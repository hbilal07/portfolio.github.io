"use strict";

/*
  ZABROSA CITY – Modal Control Script
  ----------------------------------
  Behavior:
  - Landing page loads normally
  - Modal opens ONLY on Explore click
  - Modal closes via:
      ✕ button
      Escape key
      Clicking outside content
*/

/* DOM REFERENCES */
const modal = document.getElementById("caseModal");
const modalContent = document.querySelector(".case-content");

/* SAFETY CHECK */
if (!modal || !modalContent) {
    console.error("Modal elements not found in DOM.");
}

/* OPEN MODAL */
function openCase() {
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // prevent background scroll
}

/* CLOSE MODAL */
function closeCase() {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // restore scroll
}

/* CLOSE ON ESC KEY */
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("active")) {
        closeCase();
    }
});

/* CLOSE ON OUTSIDE CLICK */
modal.addEventListener("click", function (event) {
    if (!modalContent.contains(event.target)) {
        closeCase();
    }
});

/*
  IMPORTANT:
  ----------
  ❌ No openCase() is called automatically
  ❌ No DOMContentLoaded auto-open
  ❌ No hidden triggers
*/



