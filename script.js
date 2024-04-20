
var totalValue = 0;

function calculater(val){
    totalValue += val;
 }

function clearbtn(){
    document.getElementById("display").textContent = "";
}
 
 function submitValue(){
 
    document.getElementById("display").textContent = totalValue;
 }