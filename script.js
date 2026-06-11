/* =========================================================
   NANGEVILLE — NAVIGATION MOBILE
   Gère l'ouverture/fermeture du menu hamburger.
   ========================================================= */
(function () {
  "use strict";

  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  if (!toggle || !links) {
    return;
  }

  // Ouvre/ferme le menu au clic sur le bouton hamburger
  toggle.addEventListener("click", function () {
    links.classList.toggle("open");
  });

  // Ferme le menu lorsqu'un lien est cliqué (navigation vers une autre page)
  links.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      links.classList.remove("open");
    }
  });
})();
