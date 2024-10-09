function myFunction(){
    let litres = document.getElementById("litre").value;

    let gallons = litres* 0.264172;

    document.getElementById("result").innerHTML= litres + " litres is " + gallons.toFixed(2) + " gallons";
}