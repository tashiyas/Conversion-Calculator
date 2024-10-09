function myFunction(){
    let grams=document.getElementById("grams").value;
    let lbs = grams*0.002205;

    document.getElementById("result").innerHTML = grams + " grams is roughly " + lbs.toFixed(2) + " pounds";

}