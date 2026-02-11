document.addEventListener("DOMContentLoaded", () => {

  const screens = document.querySelectorAll(".screen");
  const envelope = document.getElementById("openEnvelope");

  function showScreen(id) {
    screens.forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }
const envelope = document.getElementById("openEnvelope");

  /* Screen 1 → 2 */
  envelope.addEventListener("click", () => {
    envelope.classList.add("open");

    setTimeout(() => {
      showScreen("screen2");
    }, 1000);
  });

  /* Screen 2 → 3 */
  const nextBtn = document.querySelector(".nextBtn");
  nextBtn.addEventListener("click", () => {
    showScreen("screen3");
  });

  /* No button dodge */
  const noBtn = document.getElementById("noBtn");
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  /* Yes button hearts */
  const yesBtn = document.getElementById("yesBtn");
  const heartsContainer = document.getElementById("hearts");
  const response = document.getElementById("response");

  yesBtn.addEventListener("click", () => {
    response.textContent = "YAY 💖 I love you so much!!!";

    setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.textContent = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heartsContainer.appendChild(heart);

      setTimeout(() => heart.remove(), 4000);
    }, 300);
  });

});
