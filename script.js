// ====== CONFIG: set your event start in IST ======
// Format: "YYYY-MM-DDTHH:MM:SS+05:30" (+05:30 = IST). Hours must be 2 digits.
// The countdown is the same everywhere; each visitor just sees the time left.
const EVENT_START = new Date("2026-10-10T06:30:00+05:30");
// ======================================================================

const els = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  tagline: document.getElementById("tagline"),
};

const pad = (n) => String(n).padStart(2, "0");

function tick() {
  const diff = EVENT_START - Date.now();

  if (diff <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach((k) => (els[k].textContent = "00"));
    els.tagline.textContent = "The CTF is live. Go capture those flags!";
    els.tagline.classList.add("live");
    clearInterval(timer);
    return;
  }

  const s = Math.floor(diff / 1000);
  els.days.textContent = pad(Math.floor(s / 86400));
  els.hours.textContent = pad(Math.floor((s % 86400) / 3600));
  els.minutes.textContent = pad(Math.floor((s % 3600) / 60));
  els.seconds.textContent = pad(s % 60);
}

const timer = setInterval(tick, 1000);
tick();

// ----- Pixel star field -----
const field = document.getElementById("stars");
for (let i = 0; i < 40; i++) {
  const star = document.createElement("span");
  star.className = "star" + (Math.random() > 0.5 ? " v" : "");
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 3 + "s";
  field.appendChild(star);
}