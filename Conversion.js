const buttons = document.querySelectorAll('button'); 

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent.trim();
        
        if (value === 'g to kg') {
            window.location.href = "kg.html"; 
        } else if (value === 'g to lb') {
            window.location.href = "lb.html";
        } else if (value === 'ml to litres') {
            window.location.href = "litre.html"; 
        } else if (value === 'litres to gallons') {
            window.location.href = "gallon.html"; 
        } else if (value === 'metres to miles') {
            window.location.href = "miles.html"; 
        }
    });
});
