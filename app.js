billAmount = document.getElementById("bill");
thirty = document.getElementById("thirty");
twenty = document.getElementById("twenty");
fifteen = document.getElementById("fifteen");
ten = document.getElementById("ten");
zero = document.getElementById("zero");
people = document.getElementById("people");
calcBtn = document.getElementById("calcBtn");
tip = document.getElementById("tipAmount");

// Event listener
calcBtn.addEventListener("click",calculate);

// Calculate Function
function calculate(){
    if(thirty.selected === true){
       tip.innerHTML = (billAmount.value*(30/100))/people.value;
    } else if(twenty.selected === true){
        tip.innerHTML = (billAmount.value*(20/100))/people.value;
    } else if(fifteen.selected === true){
        tip.innerHTML = (billAmount.value*(15/100))/people.value;
    } else if(ten.selected === true){
        tip.innerHTML = (billAmount.value*(10/100))/people.value;
    } else if(ten.selected === true){
        tip.innerHTML = (billAmount.value*(0/100))/people.value;
    }
}