function commandProcessor(arr) {
    let processor = (function () {
        let output = '';
        return function (commandString) {
            let tokens = commandString.split(' ');
            switch (tokens[0]){
                case 'append':
                    output += tokens[1];
                    break;
                case 'removeStart':
                    output = output.slice(Number(tokens[1]));
                    break;
                case 'removeEnd':
                    output = output.slice(0, -1*Number(tokens[1]));
                    break;
                case 'print':
                    console.log(output);
                    break;
            }
        }

    })();
    arr.forEach(function (e) {
        processor(e);
    });
}
commandProcessor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'])