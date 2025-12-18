// Battery info
if (navigator.getBattery) {
  navigator.getBattery().then(b => {
    document.getElementById("battery").textContent =
      "Battery: " + Math.round(b.level * 100) + "%";
  });
} else {
  document.getElementById("battery").textContent = "Battery info not supported.";
}

// Time updater
setInterval(() => {
  let now = new Date();
  document.getElementById("time").textContent =
    "Time: " + now.toLocaleTimeString();
}, 1000);

// Location (with consent)
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(pos => {
    document.getElementById("location").textContent =
      "Location: " + pos.coords.latitude.toFixed(4) + ", " + pos.coords.longitude.toFixed(4);
  }, () => {
    document.getElementById("location").textContent = "Location access denied.";
  });
} else {
  document.getElementById("location").textContent = "Location not supported.";
}

// Phone number playful effect
document.getElementById("phone").addEventListener("change", function() {
  alert("Simulating hack... Call " + this.value + " now!");
});

// Matrix rain background
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
let columns = canvas.width / fontSize;
let drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 33);
