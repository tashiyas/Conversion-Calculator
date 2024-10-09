function myFunction(){
    let metres = document.getElementById("metres").value;

    let miles = metres*0.000621;

    document.getElementById("result").innerHTML= metres + " metres is " + miles.toFixed(2) + " miles";
}