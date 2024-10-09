function myFunction(){
    let ml=document.getElementById("ml").value;
    let litres = ml/1000;

    document.getElementById("result").innerHTML = ml + " millilitres is roughly " + litres.toFixed(2) + " litres";

}