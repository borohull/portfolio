
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".flip-card").forEach(function (card) {
    var inner = card.querySelector(".flip-inner");
    var flipBtn = card.querySelector(".flip-btn");
    var backBtn = card.querySelector(".back-btn");
    if (!inner || !flipBtn || !backBtn) return;

    flipBtn.addEventListener("click", function () {
      inner.classList.add("is-flipped");
      flipBtn.setAttribute("aria-pressed", "true");
    });

    backBtn.addEventListener("click", function () {
      inner.classList.remove("is-flipped");
      flipBtn.setAttribute("aria-pressed", "false");
    });
  });
});