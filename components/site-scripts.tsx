"use client";

import { useEffect, useRef } from "react";

import { TYPES } from "@/lib/content";

type DataLayerEvent = Record<string, unknown>;

function pushEvent(event: DataLayerEvent) {
  const w = window as unknown as { dataLayer?: DataLayerEvent[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(event);
}

/**
 * Reprend, à l'identique, le script de la maquette : logo animé, menu, bandeau
 * photo, comparateur avant/après, vidéo, simulateur de prix, zones et aperçu
 * des photos. Seule différence : les deux formulaires envoient réellement
 * leurs données à l'API, et le succès n'est affiché qu'après une réponse 200.
 */
export default function SiteScripts() {
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const $ = <T extends Element = HTMLElement>(selector: string, root: ParentNode = document) =>
      root.querySelector(selector) as T | null;
    const $$ = <T extends Element = HTMLElement>(selector: string, root: ParentNode = document) =>
      Array.from(root.querySelectorAll(selector)) as T[];
    const setText = (selector: string, value: string) => {
      const el = $(selector);
      if (el) el.textContent = value;
    };

    /* ---------- logo animé du hero ---------- */
    const logo = $<SVGSVGElement>("#logoHero");
    if (logo && reduce && typeof logo.pauseAnimations === "function") {
      try {
        logo.setCurrentTime(4);
        logo.pauseAnimations();
      } catch {
        /* animation SMIL non pilotable : on laisse le rendu statique */
      }
    }
    logo?.addEventListener("keydown", (event) => {
      const keyboardEvent = event as KeyboardEvent;
      if (keyboardEvent.key !== "Enter" && keyboardEvent.key !== " ") return;
      keyboardEvent.preventDefault();
      try {
        $$<SVGAnimationElement>("animate, animateTransform", logo).forEach((el) => {
          const begin = el.getAttribute("begin");
          if (begin && begin.includes("logoHit") && typeof el.beginElement === "function") {
            el.beginElement();
          }
        });
      } catch {
        /* idem */
      }
    });

    /* ---------- menu ---------- */
    const menuBtn = $("#menuBtn");
    const nav = $("#nav");
    menuBtn?.addEventListener("click", () => {
      const open = nav ? nav.classList.toggle("open") : false;
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$("#nav a").forEach((link) =>
      link.addEventListener("click", () => {
        nav?.classList.remove("open");
        menuBtn?.setAttribute("aria-expanded", "false");
      }),
    );

    /* ---------- bandeau photo : duplication pour une boucle continue ---------- */
    const track = $("#stripTrack");
    if (track && !reduce) {
      track.innerHTML += track.innerHTML;
      $$("figure", track)
        .slice(6)
        .forEach((figure) => figure.setAttribute("aria-hidden", "true"));
    }

    /* ---------- comparateur avant / après ---------- */
    const beforeAfter = $("#ba");
    const baRange = $<HTMLInputElement>("#baRange");
    const setBA = (value: number) => beforeAfter?.style.setProperty("--pos", `${value}%`);
    baRange?.addEventListener("input", () => setBA(Number(baRange.value)));
    setBA(50);

    /* ---------- vidéo de l'atelier ---------- */
    const video = $<HTMLVideoElement>("#vid");
    const phase = $("#vidPhase");
    const meters = $$(".vid-meter i");
    const steps = $$("#atSteps li");
    const PHASES: [number, number, string][] = [
      [0, 0.8, "Diagnostic du tapis"],
      [0.8, 4.8, "Shampooing à la brosse rotative"],
      [4.8, 8.6, "Rinçage et raclage"],
      [8.6, 10, "Séchage"],
    ];
    const onTime = () => {
      if (!video) return;
      const time = video.currentTime % 10;
      let current = 0;
      PHASES.forEach((entry, index) => {
        if (time >= entry[0] && time < entry[1]) current = index;
        const ratio = Math.max(0, Math.min(1, (time - entry[0]) / (entry[1] - entry[0])));
        if (meters[index]) meters[index].style.width = `${ratio * 100}%`;
      });
      if (phase && phase.textContent !== PHASES[current][2]) {
        phase.textContent = PHASES[current][2];
      }
      steps.forEach((step) =>
        step.classList.toggle("on", Number(step.dataset.step) === current),
      );
    };
    video?.addEventListener("timeupdate", onTime);
    if (video && reduce) {
      video.removeAttribute("autoplay");
      try {
        video.pause();
      } catch {
        /* la vidéo n'est pas encore prête */
      }
    }
    const videoToggle = $("#vidToggle");
    const iconPause = $("#icoPause");
    const iconPlay = $("#icoPlay");
    const syncVideoButton = () => {
      if (!video || !videoToggle) return;
      const paused = video.paused;
      if (iconPause) iconPause.hidden = paused;
      if (iconPlay) iconPlay.hidden = !paused;
      videoToggle.setAttribute(
        "aria-label",
        paused ? "Lire la vidéo" : "Mettre la vidéo en pause",
      );
    };
    videoToggle?.addEventListener("click", () => {
      if (!video) return;
      if (video.paused) {
        const promise = video.play();
        if (promise && typeof promise.catch === "function") promise.catch(() => {});
      } else {
        video.pause();
      }
    });
    video?.addEventListener("play", syncVideoButton);
    video?.addEventListener("pause", syncVideoButton);
    syncVideoButton();
    onTime();

    /* ---------- simulateur de prix ---------- */
    const MIN_PRICE = 60;
    const state = { type: "persan", qty: 1 };
    const eur = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    });
    const num = new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
    const round5 = (value: number) => Math.round(value / 5) * 5;

    const sL = $<HTMLInputElement>("#sL");
    const sW = $<HTMLInputElement>("#sW");
    const optionIds = ["oSpot", "oOdor", "oMite", "oExpress"] as const;
    const option = (id: (typeof optionIds)[number]) => $<HTMLInputElement>(`#${id}`);
    let lastEstimate: {
      type: string;
      L: number;
      W: number;
      q: number;
      lo: number;
      hi: number;
    } | null = null;

    function calc() {
      if (!sL || !sW) return;
      const length = Math.max(0, parseFloat(sL.value) || 0);
      const width = Math.max(0, parseFloat(sW.value) || 0);
      const m2 = (length * width) / 10000;
      const quantity = state.qty;
      const type = TYPES[state.type] ?? TYPES.persan;

      const washLo = Math.max(MIN_PRICE, m2 * type.lo) * quantity;
      const washHi = Math.max(MIN_PRICE, m2 * type.hi) * quantity;

      const spot = option("oSpot")?.checked ?? false;
      const odor = option("oOdor")?.checked ?? false;
      const mite = option("oMite")?.checked ?? false;
      const express = option("oExpress")?.checked ?? false;

      let optLo = 0;
      let optHi = 0;
      if (spot) {
        optLo += 30 * quantity;
        optHi += 60 * quantity;
      }
      if (odor) {
        optLo += 5 * m2 * quantity;
        optHi += 15 * m2 * quantity;
      }
      if (mite) {
        optHi += 10 * m2 * quantity;
      }

      const subtotal = [washLo + optLo, washHi + optHi];
      if (express) {
        subtotal[0] *= 1.15;
        subtotal[1] *= 1.25;
      }

      const totalM2 = m2 * quantity;
      const freeDelivery = totalM2 >= 6;
      const deliveryLo = freeDelivery ? 0 : 10;
      const deliveryHi = freeDelivery ? 0 : 30;
      const lo = round5(subtotal[0] + deliveryLo);
      const hi = round5(subtotal[1] + deliveryHi);

      setText("#qOut", String(quantity));
      setText("#rSurf", `${num.format(totalM2)} m²`);
      setText("#rWash", `${eur.format(round5(washLo))} – ${eur.format(round5(washHi))}`);
      setText(
        "#rOpts",
        optHi > 0 || express
          ? `${eur.format(round5(optLo))} – ${eur.format(round5(optHi))}${
              express ? " + express" : ""
            }`
          : "—",
      );
      setText("#rDel", freeDelivery ? "offerts" : "10 € – 30 €");
      setText("#rTotal", `${eur.format(lo)} – ${eur.format(hi)}`);

      lastEstimate = { type: state.type, L: length, W: width, q: quantity, lo, hi };

      $$("#presets button").forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          button.dataset.d === `${sL.value},${sW.value}` ? "true" : "false",
        ),
      );
    }

    function pickType(key: string) {
      state.type = key;
      const radio = $<HTMLInputElement>(`#sType-${key}`);
      if (radio) radio.checked = true;
      calc();
    }

    $("#simTypes")?.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      if (target.name === "sType") {
        state.type = target.value;
        calc();
      }
    });
    [sL, sW].forEach((input) => input?.addEventListener("input", calc));
    $("#presets")?.addEventListener("click", (event) => {
      const button = (event.target as HTMLElement).closest("button");
      if (!button || !sL || !sW) return;
      const dims = (button as HTMLElement).dataset.d?.split(",");
      if (!dims || dims.length < 2) return;
      sL.value = dims[0];
      sW.value = dims[1];
      calc();
    });
    $("#qMinus")?.addEventListener("click", () => {
      state.qty = Math.max(1, state.qty - 1);
      calc();
    });
    $("#qPlus")?.addEventListener("click", () => {
      state.qty = Math.min(20, state.qty + 1);
      calc();
    });
    optionIds.forEach((id) => option(id)?.addEventListener("change", calc));
    calc();

    $$("[data-pick]").forEach((button) =>
      button.addEventListener("click", () => {
        const key = (button as HTMLElement).dataset.pick;
        if (!key) return;
        pickType(key);
        $("#prix")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      }),
    );

    /* ---------- barre d'estimation rapide ---------- */
    $("#quick")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const dimsInput = $<HTMLInputElement>("#qDims");
      const typeInput = $<HTMLSelectElement>("#qType");
      const cpInput = $<HTMLInputElement>("#qCp");

      if (dimsInput && sL && sW) {
        const numbers = (dimsInput.value.match(/\d+/g) || []).map(Number);
        if (numbers.length >= 2) {
          sL.value = String(Math.max(numbers[0], numbers[1]));
          sW.value = String(Math.min(numbers[0], numbers[1]));
        }
      }
      if (typeInput) pickType(typeInput.value);

      const cp = cpInput?.value.trim();
      const formCp = $<HTMLInputElement>("#fCp");
      if (cp && formCp) formCp.value = cp;

      $("#prix")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    });

    /* ---------- simulateur vers devis ---------- */
    $("#toDevis")?.addEventListener("click", () => {
      if (!lastEstimate) return;
      const typeField = $<HTMLSelectElement>("#fType");
      const dimsField = $<HTMLInputElement>("#fDims");
      if (typeField) typeField.value = lastEstimate.type;
      if (dimsField) dimsField.value = `${lastEstimate.W} × ${lastEstimate.L}`;
      setText(
        "#recap",
        `Votre estimation : ${TYPES[lastEstimate.type].label}, ${lastEstimate.W} × ${
          lastEstimate.L
        } cm${lastEstimate.q > 1 ? `, ${lastEstimate.q} tapis` : ""} → ${eur.format(
          lastEstimate.lo,
        )} – ${eur.format(lastEstimate.hi)}.`,
      );
    });

    /* ---------- zones ---------- */
    $("#zonesList")?.addEventListener("click", (event) => {
      const link = (event.target as HTMLElement).closest("a[data-cp]");
      if (!link) return;
      const message = $<HTMLTextAreaElement>("#fMsg");
      if (message && !message.value) message.value = `Ville : ${link.textContent}`;
    });

    /* ---------- aperçu des photos ---------- */
    $("#fPhotos")?.addEventListener("change", (event) => {
      const input = event.target as HTMLInputElement;
      const box = $("#thumbs");
      if (!box) return;
      box.innerHTML = "";
      Array.from(input.files || [])
        .slice(0, 6)
        .forEach((file) => {
          if (!/^image\//.test(file.type)) return;
          const img = document.createElement("img");
          img.alt = file.name;
          img.src = URL.createObjectURL(file);
          box.appendChild(img);
        });
    });

    /* ---------- formulaire de devis ---------- */
    const devisForm = $<HTMLFormElement>("#devisForm");
    const devisError = $("#fErr");
    const devisErrorDefault = devisError?.textContent ?? "";

    devisForm?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = $<HTMLInputElement>("#fName");
      const tel = $<HTMLInputElement>("#fTel");
      const cp = $<HTMLInputElement>("#fCp");
      const consent = $<HTMLInputElement>("#fOk");

      const valid = Boolean(
        name?.value.trim() &&
          tel?.value.trim() &&
          /^\d{5}$/.test(cp?.value.trim() ?? "") &&
          consent?.checked,
      );
      if (devisError) {
        devisError.hidden = valid;
        if (!valid) devisError.textContent = devisErrorDefault;
      }
      if (!valid) return;

      const submit = devisForm.querySelector<HTMLButtonElement>('button[type="submit"]');
      if (submit) submit.disabled = true;

      try {
        const payload = new FormData(devisForm);
        payload.append("recap", $("#recap")?.textContent ?? "");
        const response = await fetch("/api/devis", { method: "POST", body: payload });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const firstName = name?.value.trim().split(/\s+/)[0] ?? "";
        setText("#okTitle", `Merci ${firstName}, demande enregistrée`);
        const fields = $("#devisFields");
        const confirmation = $("#devisOk");
        if (fields) fields.hidden = true;
        if (confirmation) confirmation.hidden = false;
        pushEvent({ event: "devis_envoye" });
      } catch {
        if (devisError) {
          devisError.textContent =
            "L'envoi a échoué. Appelez-nous au 07 62 87 07 07, ou réessayez dans un instant.";
          devisError.hidden = false;
        }
      } finally {
        if (submit) submit.disabled = false;
      }
    });

    /* ---------- formulaire partenaire ---------- */
    const proForm = $<HTMLFormElement>("#proForm");
    const proError = $("#pErr");
    const proErrorDefault = proError?.textContent ?? "";

    proForm?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = $<HTMLInputElement>("#pName");
      const city = $<HTMLInputElement>("#pCity");
      const tel = $<HTMLInputElement>("#pTel");

      const valid = Boolean(name?.value.trim() && city?.value.trim() && tel?.value.trim());
      if (proError) {
        proError.hidden = valid;
        if (!valid) proError.textContent = proErrorDefault;
      }
      if (!valid) return;

      const submit = proForm.querySelector<HTMLButtonElement>('button[type="submit"]');
      if (submit) submit.disabled = true;

      try {
        const response = await fetch("/api/partenaire", {
          method: "POST",
          body: new FormData(proForm),
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const fields = $("#proFields");
        const confirmation = $("#proOk");
        if (fields) fields.hidden = true;
        if (confirmation) confirmation.hidden = false;
        pushEvent({ event: "partenaire_envoye" });
      } catch {
        if (proError) {
          proError.textContent =
            "L'envoi a échoué. Appelez-nous au 07 62 87 07 07, ou réessayez dans un instant.";
          proError.hidden = false;
        }
      } finally {
        if (submit) submit.disabled = false;
      }
    });

    /* ---------- suivi des conversions ---------- */
    $$('a[href^="tel:"]').forEach((link) =>
      link.addEventListener("click", () => pushEvent({ event: "clic_appel" })),
    );
    $$('a[href*="wa.me"], a[href*="whatsapp"]').forEach((link) =>
      link.addEventListener("click", () => pushEvent({ event: "clic_whatsapp" })),
    );
  }, []);

  return null;
}