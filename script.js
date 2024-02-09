const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const millisecondsLabel = document.getElementById('milliseconds');

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const pauseButton = documnet.getElementById('pauseBtn');
const resetButton = document.getElementById('reset');

const lapList = documnet.getElementById('laplist');

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    interval = setInterval(() => {
        milliseconds += 10;
        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
        }
        minutesLabel.textContent = minutes;
        secondsLabel.textContent = seconds;
        millisecondsLabel.textContent = milliseconds;
    }, 10);
}

function stopTimer() {

}

function pauseTimer() {

}

function resetTimer() {

}

function updateTimer() {
    
}