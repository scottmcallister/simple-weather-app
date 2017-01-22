const utils = {
    toCelsius: (kelvinTemp) => {
        let celsiusTemp = kelvinTemp - 273.15;
        celsiusTemp = Math.round(celsiusTemp);
        return celsiusTemp;
    },
    toFahrenheit: (kelvinTemp) => {
        let fahrenheitTemp = (kelvinTemp * (9 / 5)) + 459.67;
        fahrenheitTemp = Math.round(fahrenheitTemp);
        return fahrenheitTemp;
    },
};

export default utils;
