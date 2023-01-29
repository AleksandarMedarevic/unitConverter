/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/// javascript


//let inputBtn=document.getElementById("button-el")

//let convetNumber= document.getElementById("input-el")



function converted(){
    let convetNumber= document.getElementById("input-el").value
    let litersInGallons= (0.264* convetNumber).toFixed(2)
    let kilogramsInPounds= (2.204* convetNumber).toFixed(2)
    let metersInFeets= (3.281* convetNumber).toFixed(2)
    let meterFeet=document.getElementById("meterFeet")
    let literGallon=document.getElementById("litreGalons")
    let kilogramPound=document.getElementById("kilogramPound")    
        
    meterFeet.textContent= 
    `${convetNumber} meters = ${metersInFeets} feet | 
    ${metersInFeets} feet = ${convetNumber} meters`
    
     literGallon.textContent= 
    `${convetNumber} liters = ${litersInGallons} gallon | 
    ${litersInGallons} gallon = ${convetNumber} liters`
    
     kilogramPound.textContent= 
    `${convetNumber} kilograms = ${kilogramsInPounds} pound | 
    ${metersInFeets} pound = ${convetNumber} kilograms`
    
    document.getElementById("input-el").value = 0;

}


