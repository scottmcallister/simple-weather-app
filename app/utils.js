const utils = {
    toCelsius: (kelvinTemp) => {
        const celsiusTemp = kelvinTemp - 273.15;
        return celsiusTemp;
    },
    toFahrenheit: (kelvinTemp) => {
        const fahrenheitTemp = (kelvinTemp * (9 / 5)) + 459.67;
        return fahrenheitTemp;
    },
};

export default utils;
