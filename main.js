const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let xAttempts =1 // numero de tentativas
let randomNumber = 1

rNumber()//gera o numero aleatorio

function toggleHide(){
    //mudar telas
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function rNumber(){
    randomNumber = Math.round(Math.random()*10)
    console.log(`Numero: ${randomNumber}`)
}

//função callback
function handleTryClick(event){
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    
    //console.log(inputNumber.value)
    
    //utilizar o .value para capturar um valor de uma input

    if(Number(inputNumber.value) == randomNumber){

        toggleHide()

        document.querySelector(".screen2 h2").innerText = `Voce acertou em ${xAttempts} tentativas`

        rNumber()

    }

    inputNumber.value = ""

    xAttempts++

}




btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function(){
    toggleHide()
    xAttempts = 1
})