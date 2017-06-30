function attachEventsListeners() {

    function convertDistance() {
        // still not in meters!!
        let valueToConvertInMeters = Number(document.getElementById('inputDistance').value);
        let inputUnit = document.getElementById('inputUnits');
        inputUnit = inputUnit.options[inputUnit.selectedIndex].value;

        // now in meters!!
        valueToConvertInMeters = convertInputValueInSec(valueToConvertInMeters, inputUnit );

        function convertInputValueInSec(value, unit) {
            let valueConvertedInMeters = value;
            switch (unit){
                case 'km':
                    return valueConvertedInMeters*1000;
                case 'cm':
                    return valueConvertedInMeters/100;
                case 'mm':
                    return valueConvertedInMeters/1000;
                case 'mi':
                    return valueConvertedInMeters*1609.34;
                case 'yrd':
                    return valueConvertedInMeters*0.9144;
                case 'ft':
                    return valueConvertedInMeters*0.3048;
                case 'in':
                    return valueConvertedInMeters*0.0254;
            }
            return valueConvertedInMeters;
        }

        let outputUnit = document.getElementById('outputUnits');
        outputUnit = outputUnit.options[outputUnit.selectedIndex].value;

        //attach the converted value to the input
        document.getElementById('outputDistance').value = convertFromMeters(valueToConvertInMeters, outputUnit);

        function convertFromMeters(value, unitToConvertFrom) {
            let convertedValue = value;
            switch (unitToConvertFrom){
                case 'km':
                    return convertedValue/1000;
                case 'cm':
                    return convertedValue*100;
                case 'mm':
                    return convertedValue*1000;
                case 'mi':
                    return convertedValue/1609.34;
                case 'yrd':
                    return convertedValue/0.9144;
                case 'ft':
                    return convertedValue/0.3048;
                case 'in':
                    return convertedValue/0.0254;
            }
            return convertedValue;
        }
        
    }

    document.getElementById('convert').addEventListener('click', convertDistance)

}