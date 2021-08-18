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


    const failedMassage = document.getElementById("matched")
    const success =  document.getElementById("notMatched")
    if(pinDisplay === displayCalcNumber){
        failedMassage.style.display = "block"
        success.style.display = "none"
    }else{
        failedMassage.style.display = "block"
        success.style.display = "none"
    }
}