function countdown(durationInSec) {
    let time = durationInSec;
    let minutes = "";
    let seconds = "";
    let intervalId = setInterval(function () {

        if(time==0){
            clearInterval(intervalId);
        }
        minutes = ("0" + Math.floor(time/60).toString()).slice(-2);
        seconds = ("0" + Math.floor(time%60).toString()).slice(-2);
        document.getElementById('time').value = `${minutes}:${seconds}`;
        time--;
    }, 1000)
}