// function attachEventsListeners() {
//     let divs = document.querySelectorAll('div');
//
//     function convertTimeOfAllInputs(timeInSec) {
//         for(let i = 0; i<divs.length; i++){
//             switch (divs[i].children[1].id){
//                 case 'days':
//                     divs[i].children[1].value = ((timeInSec/60)/60/24);
//                     break;
//                 case 'hours':
//                     divs[i].children[1].value = ((timeInSec/60)/60);
//                     break;
//                 case 'minutes':
//                     divs[i].children[1].value = ((timeInSec/60));
//                     break;
//                 case 'seconds':
//                     divs[i].children[1].value = (timeInSec);
//                     break;
//             }
//         }
//     }
//
//     function callConverterFunc() {
//         let valueToConvertInSec = Number(this.previousElementSibling.value);
//         switch (this.id) {
//             case 'daysBtn':
//                 valueToConvertInSec = valueToConvertInSec * 24 * 60 * 60;
//                 convertTimeOfAllInputs(valueToConvertInSec);
//                 break;
//             case 'hoursBtn':
//                 valueToConvertInSec = valueToConvertInSec * 60 * 60;
//                 convertTimeOfAllInputs(valueToConvertInSec);
//                 break;
//             case 'minutesBtn':
//                 valueToConvertInSec = valueToConvertInSec * 60;
//                 convertTimeOfAllInputs(valueToConvertInSec);
//                 break;
//             case 'secondsBtn':
//                 convertTimeOfAllInputs(valueToConvertInSec);
//                 break;
//         }
//     }
//
//     for (let i = 0; i < divs.length; i++) {
//         divs[i].children[2].addEventListener('click', callConverterFunc)
//     }
// }

function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn').addEventListener('click', convert);
    let hoursBtn = document.getElementById('hoursBtn').addEventListener('click', convert);
    let minutesBtn = document.getElementById('minutesBtn').addEventListener('click', convert);
    let secondsBtn = document.getElementById('secondsBtn').addEventListener('click', convert);

    function convert(event) {
        let input = event.target.id.slice(0,event.target.id.length-3);
        let [days, hours, minutes, seconds] = [0, 0, 0, 0,];
        if (input === 'days') {
            days = Number(document.getElementById(input).value);

        } else if (input === 'hours') {
            days = Number(document.getElementById(input).value) / 24;
        } else if (input == 'minutes') {
            days = Number(document.getElementById(input).value) / 24 / 60;
        } else {
            days = Number(document.getElementById(input).value) / 24 / 60 / 60;
            console.log(input);
        }
        hours  = days * 24;
        minutes = hours * 60;
        seconds = minutes * 60;

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;

    }
}