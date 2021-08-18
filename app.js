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