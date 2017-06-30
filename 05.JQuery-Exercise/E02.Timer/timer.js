function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let timeInSec = 0;
    let timer = null;

    function printTime(sec) {
        let hours = ('0' + Math.floor(sec/(60*60))).toString().slice(-2);
        let minutes = ('0' + Math.floor((sec%(60*60))/(60)).toString()).slice(-2);
        let seconds = ('0' + (sec%(60*60))%(60).toString()).slice(-2);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
    }

    function startTimer() {
        timer = setInterval(function () {
            timeInSec++;
            printTime(timeInSec)
        }, 1000)
    }

    startBtn.on('click', function () {
        startBtn.attr('disabled', 'disabled');
        stopBtn.removeAttr('disabled');
        startTimer();
    });
    function pauseTimer() {
        clearInterval(timer);
    }

    stopBtn.on('click', function () {
        stopBtn.attr('disabled', 'disabled');
        startBtn.removeAttr('disabled');
        pauseTimer();
    })
}


// for Judge
// function timer() {
//     let startBtn = $('#start-timer');
//     let stopBtn = $('#stop-timer');
//     let timeInSec = 0;
//     let timer = null;
//     let isRunning = false;
//
//     function printTime(sec) {
//         let hours = ('0' + Math.floor(sec/(60*60))).toString().slice(-2);
//         let minutes = ('0' + Math.floor((sec%(60*60))/(60)).toString()).slice(-2);
//         let seconds = ('0' + (sec%(60*60))%(60).toString()).slice(-2);
//         $('#hours').text(hours);
//         $('#minutes').text(minutes);
//         $('#seconds').text(seconds);
//     }
//
//     function startTimer() {
//         if(!isRunning){
//             timer = setInterval(function () {
//                 timeInSec++;
//                 printTime(timeInSec)
//             }, 1000)
//         }
//         isRunning = true;
//
//     }
//
//     startBtn.on('click', function () {
//         // startBtn.attr('disabled', 'disabled');
//         // stopBtn.removeAttr('disabled');
//         startTimer();
//     });
//     function pauseTimer() {
//         clearInterval(timer);
//         isRunning = false;
//     }
//
//     stopBtn.on('click', function () {
//         // stopBtn.attr('disabled', 'disabled');
//         // startBtn.removeAttr('disabled');
//         pauseTimer();
//     })
// }