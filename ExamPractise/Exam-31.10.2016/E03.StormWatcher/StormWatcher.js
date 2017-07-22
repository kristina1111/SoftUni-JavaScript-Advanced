let StormWatcher = (function () {
    let id = 0;
    class StormWatcher {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = id;
            id++;
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
        }

        get weather(){
            if(this.temperature<20
            && (this.pressure < 700 || this.temperature>900)
            && this.windSpeed >25){
                return 'Stormy';
            }
            return 'Not stormy';
        }

        toString(){
            return 'Reading ID: ' + this.id + '\n'
                + 'Temperature: ' + this.temperature + '*C\n'
                + 'Relative Humidity: ' + this.humidity + '%\n'
                + 'Pressure: ' + this.pressure + 'hpa\n'
                + 'Wind Speed: ' + this.windSpeed + 'm/s\n'
                + 'Weather: '+ this.weather;
        }
    }
    return StormWatcher;
})();

let record1 = new StormWatcher(32, 66, 760, 12);
console.log(record1.toString());
console.log();
let record2 = new StormWatcher(10, 40, 680, 30);
console.log(record2.toString());