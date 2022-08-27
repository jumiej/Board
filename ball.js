let num1 = 12
let num2 = 5
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


let num1HomeEl = document.getElementById("num1-el")
let num2GuestEl = document.getElementById("num2-el")

let countHome = 0
let countGuest = 0

         //  Home Score

function shorthrowHome() {
    countHome += 1 
    num1HomeEl.textContent = countHome
}

function midrangeHome() {
    countHome += 2
    num1HomeEl.textContent = countHome
}

function longthrowHome() {
    countHome += 3
    num1HomeEl.textContent = countHome
}

            // Guest Scores

function shortthrowGuest() {
    countGuest += 1
    num2GuestEl.textContent = countGuest
}

function midrangeGuest() {
    countGuest += 2
    num2GuestEl.textContent = countGuest
}

function longthrowGuest() {
    countGuest += 3
    num2GuestEl.textContent = countGuest
}