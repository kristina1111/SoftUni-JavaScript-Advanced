function attachGradientEvents() {
    let container = document.getElementById('gradient');
    let output = document.getElementById('result');
    function calculateGradientPercent(event) {
        // console.log(((event.pageX - container.offsetLeft)/300)*100);
        let mousePosition = event.pageX - container.offsetLeft;
        let percentGradient = Math.floor((mousePosition/299)*100);
        outputPercent(percentGradient);
    }

    function outputPercent(value) {
        output.textContent = `${value}%`;
    }

    container.addEventListener('mousemove', function (event) {
        calculateGradientPercent(event);
    });
    container.addEventListener('mouseout', function () {
        output.textContent = "";
    })

}