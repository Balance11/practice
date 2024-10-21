let inputforms = 
    document.querySelectorAll( 
        ".conversion"); 
inputforms.forEach( 
    (form) => 
        (form.style.display = "none")); 
let category = document.getElementById( 
    "conversionCategory"); 
category.addEventListener( 
    "change", 
    function () { 
        let userInput = category.value; 
        inputforms.forEach( 
            (form) => 
                (form.style.display = 
                    "none")); 
        document.getElementById( 
            userInput) 
            .style.display = "block";}); 
document 
    .getElementById( 
        "temperatureConvertBtn") 
    .addEventListener("click", tempFn); 

document 
    .getElementById("weightConvertBtn") 
    .addEventListener( 
        "click", 
        weightFn); 
document 
    .getElementById("lengthConvertBtn") 
    .addEventListener( 
        "click", 
        lengthFn); 

function tempFn() { 
    let valInput = parseFloat( 
        document.getElementById( 
            "temperatureInput"
        ).value); 
    let fromUnit = 
        document.getElementById( 
            "fromTemperatureUnit").value; 
    let toUnit = 
        document.getElementById( 
            "toTemperatureUnit").value; 
    let result; 
    if (fromUnit === "celsius" && 
        toUnit === "fahrenheit") { 
        result = 
            (valInput * 9) / 5 + 32;} 
    else if (fromUnit === "celsius" && 
            toUnit === "kelvin") { 
        result = valInput + 273.15;} 
    else if (fromUnit === "fahrenheit" && 
            toUnit === "celsius") { 
        result = 
            ((valInput - 32) * 5) / 9;} 
    else if (fromUnit === "fahrenheit" && 
            toUnit === "kelvin") { 
        result = 
            ((valInput - 32) * 5) / 9 + 
            273.15;} 
    else if (fromUnit === "kelvin" && 
            toUnit === "celsius") { 
        result = valInput - 273.15;} 
    else if (fromUnit === "kelvin" && 
            toUnit === "fahrenheit") { 
        result = 
            ((valInput - 273.15) * 9) / 
                5 + 
            32;} 
    else { 
        result = valInput;} 
    document.getElementById( 
        "temperatureResult"
    ).textContent = `Result: ${result.toFixed( 
        2 
)}`;} 



function weightFn() { 
    let valInput = parseFloat( 
        document.getElementById( 
            "weightInput").value); 
    let fromUnit = 
        document.getElementById( 
            "fromWeightUnit").value; 
    let toUnit = 
        document.getElementById( 
            "toWeightUnit").value; 
    let conversionFactors = { 
        gram: 1, 
        kilogram: 0.001, 
        milligram: 1000, 
        metricTon: 0.000001, 
        longTon: 0.000984207, 
        shortTon: 0.00110231, 
        pound: 0.00220462, 
        ounce: 0.03527396, 
        carat: 5,}; 
    let result = 
        valInput * 
        (conversionFactors[toUnit] / 
            conversionFactors[ 
                fromUnit]); 
    document.getElementById( 
        "weightResult"
    ).textContent = `Result: ${result.toFixed(2 
    )} ${toUnit}`; 
} 

function lengthFn() { 
    let valInput = parseFloat( 
        document.getElementById( 
            "lengthInput"
        ).value); 
    let fromUnit = 
        document.getElementById( 
            "fromLengthUnit").value; 
    let toUnit = 
        document.getElementById( 
            "toLengthUnit").value; 
    let conversionFactors = { 
        meter: 1, 
        kilometer: 0.001, 
        centimeter: 100, 
        millimeter: 1000, 
        mile: 0.000621371, 
        yard: 1.09361, 
        foot: 3.28084, 
        inch: 39.3701,}; 
    let result = 
        valInput * 
        (conversionFactors[toUnit] / 
            conversionFactors[ 
                fromUnit]); 
    document.getElementById( 
        "lengthResult") 
        .textContent = `Result: 
        ${result.toFixed(2)} ${toUnit}`;} 


