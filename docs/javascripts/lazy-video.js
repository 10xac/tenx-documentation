/* Lazy-load Google Drive video iframes when they scroll into view, and provide
   an expand-to-modal lightbox for each video.

   - Until in view, the iframe `src` is held in `data-src` so the network
     request only fires once the user is close to the video.
   - Clicking the expand button opens a same-page modal with a larger iframe.
   - The modal closes on background click, the close button, or the Escape key. */
(function () {
  function activate(card) {
    const iframe = card.querySelector("iframe[data-src]");
    if (!iframe) return;
    iframe.src = iframe.dataset.src;
    iframe.removeAttribute("data-src");
  }

  function buildModal() {
    const modal = document.createElement("div");
    modal.className = "video-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="video-modal__backdrop" data-close></div>
      <div class="video-modal__dialog" role="dialog" aria-modal="true" aria-label="Video player">
        <button class="video-modal__close" type="button" aria-label="Close video" data-close>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        <iframe class="video-modal__frame" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    `;
    document.body.appendChild(modal);
    return modal;
  }

  function openModal(modal, src) {
    const frame = modal.querySelector(".video-modal__frame");
    frame.src = src;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    const frame = modal.querySelector(".video-modal__frame");
    frame.src = "";
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function init() {
    const cards = document.querySelectorAll(".video-card");
    if (!cards.length) return;

    // Lazy-load
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              activate(entry.target);
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "200px 0px", threshold: 0.1 }
      );
      cards.forEach((card) => io.observe(card));
    } else {
      cards.forEach(activate);
    }

    // Modal lightbox
    const modal = buildModal();
    cards.forEach((card) => {
      const expand = card.querySelector(".video-expand");
      if (!expand) return;
      expand.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const iframe = card.querySelector("iframe");
        const src = iframe ? (iframe.src || iframe.dataset.src || "") : "";
        if (src) openModal(modal, src);
      });
    });

    modal.addEventListener("click", (e) => {
      if (e.target.closest("[data-close]")) closeModal(modal);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal(modal);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
