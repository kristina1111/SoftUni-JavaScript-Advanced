function stopwatch() {
    let output = document.getElementById('time');
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    stopBtn.disabled = true;
    let time = 0;

    // let timer = null;

    // OR

    // Another approach is to use
    // timer object
    let timer = {
        intervalId: null,
        setTimerInterval: function () {
            this.intervalId = setInterval(startTimer, 1000)
        },
        stopTimeInterval: function () {
            clearInterval(this.intervalId);
        }
    };

    // event listener on start click - it changes the disabled attribute of both buttons and starts the timer
    startBtn.addEventListener('click', function () {
        outputTime(time);
        changeDisabled(startBtn, stopBtn);

        // timer = setInterval(startTimer, 1000);
        // OR
        timer.setTimerInterval();

        // this will still run right after!!!
        console.log('Hello!');
        console.log('Hello There!');


    });

    // event listener on stop - it changes the disabled attributes of both buttons and stops the timer
    stopBtn.addEventListener('click', function () {
        time = 0;
        changeDisabled(stopBtn, startBtn);

        // clearInterval(timer);
        // OR
        timer.stopTimeInterval();

    });

    function changeDisabled(buttonToDisable, buttonToEnable) {
        buttonToDisable.disabled = true;
        buttonToEnable.disabled = false;
    }

    function startTimer() {
        time++;
        outputTime(time);
    }

    function outputTime(value) {
        let minutes = '';
        let seconds = '';
        minutes = ("0" + Math.floor(value / 60).toString()).slice(-2);
        seconds = ("0" + Math.floor(value % 60).toString()).slice(-2);
        output.textContent = `${minutes}:${seconds}`;
    }

}