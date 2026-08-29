let step = 0;
const messages = [
  "Dudu 💗",
  "Bubu 🩷", 
  "I love you so much!",
  "This is your surprise!"
];
document.getElementById("btn").onclick = function() {
  document.getElementById("surprise").innerText = messages[step];
  step++;
}
