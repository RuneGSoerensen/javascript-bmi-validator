"use strict";

function startScript() {
    
    //  Her spørger vi i en prompt om brugerens høje 
    // parseInt er en JS funktion der konventerer strengen til et heltal

    let heightInput = prompt("Din højde i cm?");
    let height = parseInt(heightInput);

    // Her spørger vi om brugerens højde 
    let weightInput = prompt("Hvor meget vejer du");
    let weight = parseInt(weightInput);

    // Vi bruger boolean'en if til at vise udfaldet af brugerens tal. For at 
    // at brugeren indtaster tal og ikke bogstaver/symboler bruger vi isNaN, som er en funktion JS kender i forvejen. 
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        // Hvis ikke brugeren indtaster tal kommer der en alert med følgende info
        alert("Indtast et valid højde og vægt")
    } else {
        let bmi = weight / Math.pow(height / 100, 2)

        let bmiKategori;
        if(bmi < 16) {
            bmiKategori = "Meget undervægtig"
        } else if (bmi >= 16 && bmi <= 18.4) {
            bmiKategori = "undervægtig";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiKategori = "normal vægt";
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiKategori = "let overvægtig";
        } else if (bmi >= 30 && bmi <= 34.9) {
            bmiKategori = "Svært overvægtig";
        } else if (bmi >= 35 && bmi <= 39.9) {
            bmiKategori = "Meget overvægtig";
        } else {
            bmiKategori = "ER DU SIKKER?";
        }

        // Her bliver der så lavet en alert som printer din bmi
        // ${bmi.toFixed(2)} indæstter bmi og tillader 2 dicimal tal.
        // \n er det samme som et <br> i html, den skifter linje.
        // ${bmiKategori} indæstter bmiKategori fra vores if else statements fra linje 14 til 29
        
        alert(`Your BMI ${bmi.toFixed(2)}. \nKategori: ${bmiKategori}`)
        
    }
}