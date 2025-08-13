function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

window.addEventListener('DOMContentLoaded', () => {
  loadHTML("header", "header.html");
  loadHTML("footer", "footer.html");
});

// Countdown Timer
document.addEventListener("DOMContentLoaded", () => {
  // Set the target date (e.g., 4 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 4);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.querySelectorAll(".deal-timer").forEach(el => el.textContent = "00");
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const values = [days, hours, minutes, seconds];
    const labels = ["Days", "Hour", "Min", "Sec"];

    document.querySelectorAll(".deal-timer").forEach((el, index) => {
      el.innerHTML = `${values[index]}<br><span>${labels[index]}</span>`;
    });
  }

  setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call
});

