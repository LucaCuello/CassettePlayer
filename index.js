const song = new Audio("/casettePlayer/assets/love.mp3"),
  play = new Audio("/casettePlayer/assets/play.mp3"),
  button = document.getElementById("play"),
  buttonPause = document.getElementById("pause"),
  circle1 = document.getElementById("circle1"),
  circle2 = document.getElementById("circle2"),
  innerCircle1 = document.getElementById("inner-circle"),
  innerCircle2 = document.getElementById("inner-circle2");

button.addEventListener("click", function () {
  song.play();
  play.play();
  button.style.display = "none";
  buttonPause.style.display = "flex";
  circle1.style.animationPlayState = "running";
  circle2.style.animationPlayState = "running";
  innerCircle1.style.animationPlayState = "running";
  innerCircle2.style.animationPlayState = "running";
});
buttonPause.addEventListener("click", function () {
  song.pause();
  play.play();
  button.style.display = "flex";
  buttonPause.style.display = "none";
  circle1.style.animationPlayState = "paused";
  circle2.style.animationPlayState = "paused";
  innerCircle1.style.animationPlayState = "paused";
  innerCircle2.style.animationPlayState = "paused";
});
