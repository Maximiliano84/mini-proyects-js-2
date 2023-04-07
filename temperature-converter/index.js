function computeTemp(event) {
    // Obtenemos los valores de los campos de entrada
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = document.getElementById('fahrenheit').value;
    const kelvin = document.getElementById('kelvin').value;

    // Si el usuario ha ingresado un valor en Celsius
    if (event.target.name === 'celsius') {
        // Convertimos de Celsius a Fahrenheit
        const newFahrenheit = celsius * 1.8 + 32;
        // Convertimos de Celsius a Kelvin
        const newKelvin = parseFloat(celsius) + 273.15;

        // Actualizamos los valores de los campos de salida correspondientes
        document.getElementById('fahrenheit').value = newFahrenheit.toFixed(2);
        document.getElementById('kelvin').value = newKelvin.toFixed(2);
    }

    // Si el usuario ha ingresado un valor en Fahrenheit
    if (event.target.name === 'fahrenheit') {
        // Convertimos de Fahrenheit a Celsius
        const newCelsius = (fahrenheit - 32) / 1.8;
        // Convertimos de Fahrenheit a Kelvin
        const newKelvin = (fahrenheit + 459.67) / 1.8;

        // Actualizamos los valores de los campos de salida correspondientes
        document.getElementById('celsius').value = newCelsius.toFixed(2);
        document.getElementById('kelvin').value = newKelvin.toFixed(2);
    }

    // Si el usuario ha ingresado un valor en Kelvin
    if (event.target.name === 'kelvin') {
        // Convertimos de Kelvin a Celsius
        const newCelsius = kelvin - 273.15;
        // Convertimos de Kelvin a Fahrenheit
        const newFahrenheit = kelvin * 1.8 - 459.67;

        // Actualizamos los valores de los campos de salida correspondientes
        document.getElementById('celsius').value = newCelsius.toFixed(2);
        document.getElementById('fahrenheit').value = newFahrenheit.toFixed(2);
    }
}