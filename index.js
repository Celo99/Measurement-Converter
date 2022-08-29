let inputVal = document.getElementById('input-unit')
let btnConvert = document.getElementById('btn-convert')
let pMeterFeet = document.getElementById('unit-meter-feet')
let pLitreGallon = document.getElementById('unit-litre-gallon')
let pKilosLbs = document.getElementById('unit-kilos-lbs')


// ON-LOAD ---------------------------------------------
convertMf()
convertLg()
convertKl()

// ON-CLICK ---------------------------------------------
btnConvert.addEventListener("click", function(){
    convertMf()
    convertLg()
    convertKl()
})

function convertMf(){
    // 1 meter = 3.281 feet
    let ftFromM = inputVal.value * 3.281        //65.616 feet
    let mFromFt = (inputVal.value * 0.1) / 3.281 // 6.096
    let textMsg = `
        ${inputVal.value} meters = ${ftFromM} feet | 
        ${inputVal.value} feet = ${mFromFt.toFixed(3)} meters
    `  
    pMeterFeet.innerHTML = textMsg 
}

function convertLg(){
    // 1 liter = 0.264 gallon
    let gFromL = inputVal.value * 0.264
    let lFromG = inputVal.value / 0.264
    let textMsg = `
        ${inputVal.value} liters = ${gFromL} gallons | 
        ${inputVal.value} gallons = ${lFromG.toFixed(3)} liters
    `
    pLitreGallon.innerHTML = textMsg
}

function convertKl(){
    // 1 kilogram = 2.204 pound
    let kFromLbs = inputVal.value * 2.204 // 44.092 lbs.
    let lbsFromK = inputVal.value / 2.204 // 9.072 kilo
    let textMsg = `
        ${inputVal.value} kilos = ${kFromLbs.toFixed(3)} pounds | 
        ${inputVal.value} pounds = ${lbsFromK.toFixed(3)} kilos
    `
    pKilosLbs.innerHTML = textMsg
}
