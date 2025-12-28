const messages = [
  "Yay! I love you 🐾",
  "You're doing great 💕",
  "Take a deep breath 🌸",
  "I'm always here for you 🐶",
  "Smile! You’re loved 😽"
];

function petMe() {
  const response = document.getElementById("response");
  response.textContent =
    messages[Math.floor(Math.random() * messages.length)];
}
