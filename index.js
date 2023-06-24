let secText = document.getElementById("sec");
let minText = document.getElementById("min");

let second = 00;
let minute = 00;

btnStart = document.getElementById("btnStart");
btnStop = document.getElementById("btnStop");
btnRest = document.getElementById("btnRest");

btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnRest.addEventListener("click", reset);

function start() {
  interval = setInterval(startTimer, 1000);
}

function startTimer() {
  second++;
  secText.innerText = `0${second}`;
  if (second > 9) {
    secText.innerText = second;
  }
  if (second > 59) {
    second = 0;
    secText.innerText = `0${second}`;
    minute++;
    minText.innerText = `0${minute}`;
    if (minute > 9) {
      minText.innerText = minute;
    }
  }
}

function stop() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  second = 0;
  secText.innerText = "00";
  minText.innerText = "00";
}
