const MY_PASSWORD = "05/20/2024";

// Random Reasons Array
const reasons = [
  "The way you smile when you're happy ✨",
  "How you support my coding projects 💻",
  "Your kind and beautiful soul 🌸",
  "The way you make every day feel special ❤️",
  "You are my favorite view in the whole world 🌹",
  "The way you laugh at my silly jokes 😂",
  "The way you smile when you're happy ✨",
  "How you support my coding projects 💻",
  "Your kind and beautiful soul 🌸",
  "The way you make every day feel special ❤️",
  "You are my favorite view in the whole world 🌹",
  "I Love You bb! ❤️",
  "Your patience when I'm stuck on a bug 🐞",
  "How you make even the hardest days feel easy ☁️",
  "The way your eyes light up when you talk about things you love 💡",
  "Being my peace in a very loud world 🌊",
  "How you're not just my love, but my best friend 🤝",
  "The beautiful 'shade of blue' you bring to my life 💙",
  "Your incredible strength and ambition 🏔️",
  "How you make our 'together' feel like home 🏠",
  "The way you always know how to make me feel better 🍫",
  "Your intelligence and the way you handle everything with grace 🎓",
];

function checkLock() {
  const userInput = document.getElementById("password").value.trim();
  const song = document.getElementById("birthday-song");

  if (userInput === MY_PASSWORD) {
    song.play();
    const lockScreen = document.getElementById("lock-screen");
    lockScreen.style.opacity = "0";

    setTimeout(() => {
      lockScreen.classList.add("hidden");
      document.getElementById("main-content").classList.remove("hidden");
      startCounter();
      triggerConfetti();
    }, 1000);
  } else {
    alert("Incorrect password, my love! ❤️");
  }
}

// Function to calculate and show days together
function startCounter() {
  const startDate = new Date("05/20/2024");
  const now = new Date();
  const timeDiff = Math.abs(now - startDate);
  const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  document.getElementById("days-together").innerText = diffDays + " Days";
}

// Function to show a random reason
function showRandomReason() {
  const display = document.getElementById("reason-display");
  const randomReason = reasons[Math.floor(Math.random() * reasons.length)];

  display.style.opacity = 0;
  setTimeout(() => {
    display.innerText = randomReason;
    display.style.opacity = 1;
    display.style.transition = "opacity 0.5s";
  }, 200);
}

// Letter Functions
function openLetter() {
  document.getElementById("letter-modal").classList.remove("hidden");
}

function closeLetter() {
  document.getElementById("letter-modal").classList.add("hidden");
}

// Flower Animation
function createFlower() {
  const flowers = ["🌸", "🌷", "🌹", "✨", "❤️"];
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = Math.random() * 3 + 3 + "s";
  flower.style.fontSize = Math.random() * 20 + 10 + "px";
  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 6000);
}
setInterval(createFlower, 400);

// Celebration Confetti
function triggerConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#ff85a2", "#ffffff", "#89cff0"],
  });
}
