var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var availableNotes = [2000,500,100,20,10,5,1];
var noofnotes = document.querySelectorAll(".no-of-notes");

function validateCashandBillAmount(){
    // hideMessage();
    if(Math.trunc(billAmount.value)>0){
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            var amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        
        }else{ 
            showMessage("Cash provided should atleast be equal to bill amount ");
            // alert("cash should be at least equal to bill amount");
        }
    }

    }
    // else{ 
    //     showMessage("Invalid Bill Amount");
    // }


    // function showMessage(msg){
    //     message.style.display="block";
    //     message.innertext=msg;
    // }
    // function hideMessage(){
    //     message.style.display=none;
    // }
    function calculateChange(amountToBeReturned){
        for(let i=0;i<availableNotes.length;i++)
        {
            var numberOfNotes= Math.trunc(amountToBeReturned/availableNotes[i])
            amountToBeReturned = amountToBeReturned % availableNotes[i];
            noofnotes[i].innerText = numberOfNotes;            
        };
    }


 checkButton.addEventListener("click",validateCashandBillAmount)