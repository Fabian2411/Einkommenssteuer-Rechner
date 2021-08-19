function berechne(){
    let zvE = document.getElementById("einkommen").value;  // zvE = zu versteuerndes Einkommen
    // console.log(zvE);
    let z = document.getElementById("veranlagung").value; // z = Veranlagung
    console.log(z);
    let x = document.getElementById("jahr").value; // x = Jahr

// --------------------2021 Einzelveranlagung

    //2021 Einzelveranlagung Fall 1
    if (zvE <= 9744 && z == 1 && x == 2021){
        // console.log("test");
        document.getElementById("ergebnis").innerHTML = "Es muss keine Einkommen­steuer gezahlt werden. siehe Fall 1";

    //2021 Einzelveranlagung Fall 2    
    }  else if (zvE >= 9745 && zvE <= 14753 && z == 1 && x == 2021){
        let y = (zvE - 9744)/10000;
        let x = (995.21 * y + 1400) * y;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 2`;

    //2021 Einzelveranlagung Fall 3
    }  else if (zvE >= 14754 && zvE <= 57918 && z == 1 && x == 2021){
        let y = (zvE - 14753)/10000;
        let x = (208.85 * y + 2397) * y + 950.96;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 3`;
    
    //2021 Einzelveranlagung Fall 4
    }  else if (zvE >= 57919 && zvE <= 274612 && z == 1 && x == 2021){
        let x = (0.42 * zvE - 9136.63);
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 4`;

    //2021 Einzelveranlagung Fall 5
    }  else if (zvE >= 274613 && z == 1 && x == 2021){
        let x = ((0.45 * zvE) - 17374.99);
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 5`;


// --------------------2021 Zusammenveranlagung

    //2021 Zusammenveranlagung Fall 1
    }  else if (zvE <= 9744 && z == 2 && x == 2021){
        document.getElementById("ergebnis").innerHTML = "Es muss keine Einkommen­steuer gezahlt werden. siehe Fall 1";
    
    //2021 Zusammenveranlagung Fall 2    
    }  else if (zvE >= 9745 && zvE <= 14753 && z == 2 && x == 2021){
        let y = (zvE - 9744)/10000;
        let x = ((995.21 * y + 1400) * y) * 2;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 2`;
    
    //2021 Zusammenveranlagung Fall 3
    }  else if (zvE >= 14754 && zvE <= 57918 && z == 2 && x == 2021){
        let y = (zvE - 14753)/10000;
        let x = ((208.85 * y + 2397) * y + 950.96)  * 2;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 3`;
        
    //2021 Zusammenveranlagung Fall 4
    }  else if (zvE >= 57919 && zvE <= 274612 && z == 2 && x == 2021){
        let x = ((0.42 * zvE - 9136.63)) * 2;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 4`;
    
    //2021 Zusammenveranlagung Fall 5
    }  else if (zvE >= 274613 && z == 2 && x == 2021){
        let x = (((0.45 * zvE) - 17374.99) * 2);
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 5`;


// --------------------2020 Einzelveranlagung

    //2020 Einzelveranlagung Fall 1
    }  else if (zvE <= 9408 && z == 1 && x == 2020){
        document.getElementById("ergebnis").innerHTML = "Es muss keine Einkommen­steuer gezahlt werden. siehe Fall 1";

    //2020 Einzelveranlagung Fall 2    
    }  else if (zvE >= 9409 && zvE <= 14532 && z == 1 && x == 2020){
        let y = (zvE - 9408)/10000;
        let x = (972.87 * y + 1400) * y;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 2`;

    //2020 Einzelveranlagung Fall 3
    }  else if (zvE >= 14533 && zvE <= 57051 && z == 1 && x == 2020){
        let y = (zvE - 14732)/10000;
        let x = (212.02 * y + 2397) * y + 972.79;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 3`;
    
    //2020 Einzelveranlagung Fall 4
    }  else if (zvE >= 57052 && zvE <= 270500 && z == 1 && x == 2020){
        let x = (0.42 * zvE - 8963.74);
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 4`;

    //2020 Einzelveranlagung Fall 5
    }  else if (zvE >= 270501 && z == 1 && x == 2020){
        let x = ((0.45 * zvE) - 17374.99);
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 5`;


// --------------------2020 Zusammenveranlagung

    //2020 Zusammenveranlagung Fall 1
    }  else if (zvE <= 9408 && z == 2 && x == 2020){
        document.getElementById("ergebnis").innerHTML = "Es muss keine Einkommen­steuer gezahlt werden. siehe Fall 1";

    //2020 Zusammenveranlagung Fall 2    
    }  else if (zvE >= 9409 && zvE <= 14532 && z == 2 && x == 2020){
        let y = (zvE - 9408)/10000;
        let x = ((972.87 * y + 1400) * y) * 2;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 2`;

    //2020 Zusammenveranlagung Fall 3
    }  else if (zvE >= 14533 && zvE <= 57051 && z == 2 && x == 2020){
        let y = (zvE - 14732)/10000;
        let x = ((212.02 * y + 2397) * y + 972.79) * 2;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 3`;

    //2020 Zusammenveranlagung Fall 4
    }  else if (zvE >= 57052 && zvE <= 270500 && z == 2 && x == 2020){
        let x = ((0.42 * zvE - 8963.74)) * 2;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 4`;

    //2020 Zusammenveranlagung Fall 5
    }  else if (zvE >= 270501 && z == 2 && x == 2020){
        let x = (((0.45 * zvE) - 17374.99)) * 2;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 5`;


// --------------------2019 Einzelveranlagung

    //2019 Einzelveranlagung Fall 1
    }  else if (zvE <= 9168 && z == 1 && x == 2019){
        document.getElementById("ergebnis").innerHTML = "Es muss keine Einkommen­steuer gezahlt werden. siehe Fall 1";

    //2019 Einzelveranlagung Fall 2    
    }  else if (zvE >= 9169 && zvE <= 14254 && z == 1 && x == 2019){
        let y = (zvE - 9168)/10000;
        let x = (980.14 * y + 1400) * y;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 2`;

    //2019 Einzelveranlagung Fall 3
    }  else if (zvE >= 14255 && zvE <= 55960 && z == 1 && x == 2019){
        let y = (zvE - 14732)/10000;
        let x = (212.02 * y + 2397) * y + 972.79;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 3`;

    //2019 Einzelveranlagung Fall 4
    }  else if (zvE >= 55961 && zvE <= 265326 && z == 1 && x == 2019){
        let x = (0.42 * zvE - 8780.90);
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 4`;

    //2019 Einzelveranlagung Fall 5
    }  else if (zvE >= 265327 && z == 1 && x == 2019){
        let x = ((0.45 * zvE) - 16740.68);
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 5`;

// --------------------2019 Zusammenveranlagung

//2019 Zusammenveranlagung Fall 1
    }  else if (zvE <= 9168 && z == 2 && x == 2019){
        document.getElementById("ergebnis").innerHTML = "Es muss keine Einkommen­steuer gezahlt werden. siehe Fall 1";

//2019 Zusammenveranlagung Fall 2    
    }  else if (zvE >= 9169 && zvE <= 14254 && z == 2 && x == 2019){
        let y = (zvE - 9168)/10000;
        let x = ((980.14 * y + 1400) * y) * 2;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 2`;

//2019 Zusammenveranlagung Fall 3
    }  else if (zvE >= 14255 && zvE <= 55960 && z == 2 && x == 2019){
        let y = (zvE - 14254)/10000;
        let x = ((216.16 * y + 2397) * y + 965.58) * 2;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 3`;

//2019 Zusammenveranlagung Fall 4
    }  else if (zvE >= 55961 && zvE <= 265326 && z == 2 && x == 2019){
        let x = ((0.42 * zvE - 8780.90)) * 2;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 4`;

//2019 Zusammenveranlagung Fall 5
    }  else if (zvE >= 265327 && z == 2 && x == 2019){
        let x = (((0.45 * zvE) - 16740.68)) * 2;
        document.getElementById("ergebnis").innerHTML = `Die Einkommenssteuer beträgt ${x}€. siehe Fall 5`;


    }   else{
        document.getElementById("ergebnis").innerHTML = `Die Angaben sind nicht korrekt`;
        }
}
