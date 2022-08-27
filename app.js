const billAmount=document.querySelector("#bill-amount");
const checkButton=document.querySelector("#check-button");
const cashGiven=document.querySelector("#cash-given");
const message=document.querySelector("#error");
const availableNotes=[2000,500,100,20,10,5,1];
const noOfNotes=document.querySelector(".no-of-notes")

checkButton.addEventListener("click",function validateBillAndCashAmount(){
    hideMessage();
    if(billAmount.value>0)
    {
if(cashGiven.value>=billAmount.value){
const amountToBeReturned = cashGiven.value - billAmount.value;
calculateChange(amountToBeReturned);
}
else{
    showMessage("The cash provided should atleast be equal to the bill amount");
}
    }
    else{
       showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned)
{
   for(var i=0;i<availableNotes.length;i++)
   {
    var numberOfNotes=Math.trunc(amountToBeReturned/availableNotes[0]);
    amountToBeReturned%=availableNotes[0];
    noOfNotes[i].innerText=numberOfNotes;
   }
}
function hideMessage()
{
    message.style.display="none";
}
function showMessage(msg)
{
    message.style.display="block";
    message.innerText=msg;
}