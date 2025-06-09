function playSound() {
  document.getElementById("celebration").play();
  const results = [
    "Detected brainwaves forming haikus in Morse code.",
    "Subconscious ran a full Dungeons & Dragons campaign overnight.",
    "Thinks in interpretive dance.",
    "Brain emits mild jazz tones under pressure.",
    "Can recite digits of pi backward in dreams."
  ];
  const randomResult = results[Math.floor(Math.random() * results.length)];
  document.getElementById("random-result").innerText = randomResult;
}
