function playSound() {
  document.getElementById("celebration").play();
  const results = [
    "Detected brainwaves forming haikus in Morse code.",
    "Subconscious ran a full Apex campaign overnight.",
    "Thinks in stupid language.",
    "Ventre faire gulu gulu under pressure.",
    "Can recite nothing in dreams."
  ];
  const randomResult = results[Math.floor(Math.random() * results.length)];
  document.getElementById("random-result").innerText = randomResult;
}
