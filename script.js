const MY_PASSWORD = "05/20/2024";

const reasons = [
  "1. May your 18th year be as bright as your smile! 🌟",
  "2. To more adventures and 'bugs' we'll solve together 💻",
  "3. I wish you endless success in your studies and dreams 🎓",
  "4. May you always keep that kind and beautiful soul 🌸",
  "5. Cheers to being officially an adult, but always my baby ❤️",
  "6. I wish for your happiness today and every single day 🌹",
  "7. You are, and will always be, my favorite view 📸",
  "8. May all your 18-year-old dreams start coming true today ✨",
  "9. Thank you for being my peace in this loud world 🌊",
  "10. I wish for more coffee dates and late-night talks with you ☕",
  "11. May you grow even stronger and more graceful 🏔️",
  "12. You deserve the world, and I'll try my best to give it to you 🌍",
  "13. To 18 years of beauty, and a lifetime more to go 🥂",
  "14. I'm so proud of the woman you are becoming 👑",
  "15. May your heart always stay as pure as it is now 🤍",
  "16. I wish for more shared laughter that makes our tummies hurt 😂",
  "17. You are the most beautiful debutante in the world 👗",
  "18. I love you more than all the lines of code I've ever written! 💖",
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

function startCounter() {
  const startDate = new Date("05/20/2024");
  const now = new Date();
  const timeDiff = Math.abs(now - startDate);
  const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  document.getElementById("days-together").innerText = diffDays + " Days of Us";
}

function showRandomReason() {
  const display = document.getElementById("reason-display");
  const randomReason = reasons[Math.floor(Math.random() * reasons.length)];

  display.style.opacity = 0;
  display.style.transform = "scale(0.9)";

  setTimeout(() => {
    display.innerText = randomReason;
    display.style.opacity = 1;
    display.style.transform = "scale(1)";
  }, 200);
}

function openLetter() {
  document.getElementById("letter-modal").classList.remove("hidden");
}

function closeLetter() {
  document.getElementById("letter-modal").classList.add("hidden");
}

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

function triggerConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#ff85a2", "#ffffff", "#89cff0"],
  });
}
