const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const millisecondsLabel = document.getElementById('milliseconds');

const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');

const lapList = document.getElementById('lapList');

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    interval = setInterval(updateTimer, 10);
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
    stopButton.disabled = false;
}

function stopTimer() {
    clearInterval(interval);
    addToLapList();
    resetTimer();
    startButton.disabled = false;
    stopButton.disabled = true;
}

function pauseTimer() {
    if(pauseButton.textContent === 'Pause') {
        clearInterval(interval);
        pauseButton.textContent = 'Resume';
        pauseButton.classList.add("pausePulse");
    } else {
        interval = setInterval(updateTimer, 10);
        pauseButton.textContent = 'Pause';
        pauseButton.classList.remove("pausePulse");
    }
    // Added logic to resume from Pause
}

function resetTimer() {
    clearInterval(interval);
    resetTimerData();
    startButton.disabled = false;
    pauseButton.classList.remove("pausePulse");
    pauseButton.textContent = 'Pause';
    pauseButton.disabled = true;
    stopButton.disabled = true;
}

function updateTimer() {
    milliseconds++;
    if(milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    displayTimer();
}

function displayTimer() {
    millisecondsLabel.textContent = padTime(milliseconds);
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
}

function padTime(time) {
    return time.toString().padStart(2, '0');
}

function resetTimerData() {
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTimer();
}

function addToLapList() {
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    const listTime = document.createElement('li');
    listTime.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: </span>${lapTime}`;
    lapList.appendChild(listTime);

}