function notify(message) {
    let messageBox = document.getElementById('notification');
    messageBox.textContent = message;
    messageBox.style.display = 'block';
    setTimeout(function () {
        messageBox.style.display = 'none';
    }, 2000);
    // let time = 0;
    // function tick() {
    //     time++;
    //     if(time == 2){
    //         clearInterval(timer);
    //         messageBox.style.display = 'none';
    //     }
    // }
    //
    // let timer = setInterval(tick, 1000);

    // let bla = message;
    //
    // let logger = function () {
    //     console.log(++bla);
    // };
    // return logger;
    // // console.log(++bla);
}
// let func = notify(0);
// func();
// func();
// notify(10);
// func();
// func();