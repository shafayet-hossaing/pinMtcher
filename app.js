function getPin(){
    const randomPin = Math.round(Math.random()*10000)
    const randomPinNum = randomPin + ""

    if(randomPinNum.length == 4){
        return randomPin
    }else{
        return getPin()
    }
}

function generatePin(){
    const pin = getPin()
    document.getElementById("pinDisplay").value = pin
}


// Calculator body
document.getElementById("keyPress").addEventListener("click", function(event){
    const number = event.target.innerText;
    const displayCalcNumber = document.getElementById("displayCalcNumber")

    if(isNaN(number)){
        if(number == "C"){
            displayCalcNumber.value = ""
        }
    }else{
        const currentCalcNumber = displayCalcNumber.value
        const updatedNumber = currentCalcNumber + number

        displayCalcNumber.value = updatedNumber
    }
    
})



// Pin verify
function verifyPin(){
    const pinDisplay = document.getElementById("pinDisplay").value
    const displayCalcNumber = document.getElementById("displayCalcNumber").value


    const failedMassage = document.getElementById("notMatched")
    const success =  document.getElementById("matched")
    if(pinDisplay === displayCalcNumber){
        success.style.display = "block"
        failedMassage.style.display = "none"
    }else{
        success.style.display = "none"
        failedMassage.style.display = "block"
    }
}