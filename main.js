const billInput = document.querySelector(".bill-input")
const personInput = document.querySelector(".people-input")
const tipPerPerson = document.querySelector(".tip-amount")
const totalPerPerson = document.querySelector(".total-amount")
const resetBtn = document.querySelector(".reset")
const tipPercentagesSelections = Array.from(document.querySelectorAll(".btn"))
const tipCustom = document.querySelector(".custom")
const warning = document.querySelector(".error")
const peopleSection = document.querySelector(".people")


billInput.value = 0.0
personInput.value = 1
tipPerPerson.textContent = "$" + (0.0).toFixed(2)
totalPerPerson.textContent = "$"+ (0.0).toFixed(2)


let billValue = 0.0
let groupNumber = 1
let tipSelectedValue = .15
let tipValue = .15



billInput.addEventListener("input", billInputAction)
personInput.addEventListener("input", personInputAction)
tipPercentagesSelections.forEach(tipSelection =>{
    tipSelection.addEventListener("click", tipSelectionAction)
})

tipCustom.addEventListener("input", tipCustomAction)
resetBtn.addEventListener("click", restAction) 


// get the value of both bill input and number of people and convert to float

function billInputAction (){
    billValue = parseFloat(billInput.value)   
    tipCalculation()
}

function personInputAction(){
    groupNumber = parseFloat(personInput.value)
    if(groupNumber == 0){
peopleSection.classList.add("warning")
    }else{
        peopleSection.classList.remove("warning")
    }
    tipCalculation()
}
function tipCustomAction(){
    tipValue = parseFloat(tipCustom.value/100) 
    tipPercentagesSelections.forEach(tipSelection =>{
        tipSelection.classList.remove("active")
})
    tipCalculation()
}


function tipCalculation(){
    if(groupNumber >=1){
        let tipTotal = (billValue * tipValue) / groupNumber
        let amountTotal = (billValue / groupNumber)+tipTotal
        tipPerPerson.textContent = "$" + tipTotal.toFixed(2)
        totalPerPerson.textContent = "$"+ amountTotal.toFixed(2)
    }
}

function tipSelectionAction(e){
    tipPercentagesSelections.forEach(tipSelection =>{
        tipSelection.classList.remove("active")
        if(e.target.textContent == tipSelection.textContent){
            tipSelection.classList.add("active")
            tipValue = parseFloat(tipSelection.textContent)/100
        }
       tipCalculation()
    })
}

function restAction(){
    billInput.value = 0.0
    personInput.value = 1
    tipPerPerson.textContent = "$" + (0.0).toFixed(2)
    totalPerPerson.textContent = "$"+ (0.0).toFixed(2)
    tipCustom.value = ""
}
