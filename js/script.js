function calculateBmi() {
  // indtastede string bliver konverteret til integer og afrundet, fra input id "height"
  let height = parseInt(document.getElementById("height").value);

  // indtastede string bliver konverteret til integer og afrundet, fra input id "weight"
  let weight = parseInt(document.getElementById("weight").value);

  // javascript validator som bruger OR statements til at gennem gå forskellige validators som negativ tal og tal.
  // Dog gøres det her faktisk også i html, igennem input types.
  // og hvis intet skrives i felterne bliver teksten "Du mangler at indtaste din højde og vægt." printet ud i <p id="inputError"></p>
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById("bmiOutput").innerHTML =
      "brug gerne din rigtige vægt";
  } else {
    // bmi er = vægt diviederet med højde / 100^2
    let bmi = weight / Math.pow(height / 100, 2);

    // Vores if else statements som viser den rigtige kategori udfra din BMI.
    let bmiKategori;
    let switchOn = true;

    switch (switchOn) {
      case bmi < 16:
        bmiKategori = "Meget undervægtig";
        break;
      case bmi >= 16 && bmi <= 18.4:
        bmiKategori = "undervægtig";
        break;
      case bmi >= 18.5 && bmi <= 24.9:
        bmiKategori = "normal vægt";
        break;
      case bmi >= 25 && bmi <= 29.9:
        bmiKategori = "let overvægtig";
        break;
      case bmi >= 30 && bmi <= 34.9:
        bmiKategori = "Svært overvægtig";
        break;
      case bmi >= 35 && bmi <= 39.9:
        bmiKategori = "Meget overvægtig";
        break;
      default:
        bmiKategori = "THOOOOOCCCCC";
    }

    // Her bruger jeg id'er til at ændre noget tekst til den rigtige bmi og bmi kategori til <p id="bmiOutput"></p>
    // Der bliver brugt toFixed(2) for at holde decimalerne til 2 cifrede.
    
    document.getElementById("bmiOutput").innerHTML =
      "Din bmi:" + bmi.toFixed(2) + "<br/>Kategori: " + bmiKategori;
    console.log(bmi);
    console.log(bmiKategori);
  }
}
