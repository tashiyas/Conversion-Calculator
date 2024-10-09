function myFunction(){
    let grams = document.getElementById("grams").value;

    let kg = grams/1000;

    document.getElementById("result").innerHTML= grams + " grams is roughly " + kg.toFixed(2) + " kilograms";
}