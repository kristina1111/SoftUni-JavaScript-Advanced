// function extractText() {
//     let lis = document.querySelectorAll('ul li');
//     for(let i = 0; i<lis.length; i++){
//         document.getElementById('result').textContent += lis[i].textContent + '\n';
//     }
// }

function extractText() {
    let listItems = document.querySelectorAll('ul li');
    let textArea = document.getElementById('result');

    for (let item of listItems) {
        textArea.value += item.textContent + "\n";
    }
}