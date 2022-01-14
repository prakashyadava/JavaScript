let firstCard = parseInt(Math.random() * 10 + 1)

let secondCard = parseInt(Math.random() * 10 + 2)
let hasBlackjack = false
let isAlive = true
let sum = firstCard + secondCard
let message = " "
let card_msg = "Cards : " + firstCard + " , " + secondCard
let msg_el = document.getElementById("message-el")
let game_start_btn = document.getElementById("startgame")
let new_card = document.getElementById("newcard")
let quit = document.getElementById("exit")
let msg_card = document.getElementById("card")
let msg_sum = document.getElementById("sum")
function draw_card() {
    message = "Do you want to draw a new card?"
    msg_el.textContent = message
    msg_card.textContent = card_msg
    msg_sum.textContent = "Sum : " + sum
    new_card.style.visibility = "visible"
    game_start_btn.style.visibility = "hidden"
}
function won() {
    message = "You've got Blackjack!"
    msg_el.textContent = message
    msg_card.textContent = card_msg
    msg_sum.textContent = "Sum : " + sum
    hasBlackjack = true
    new_card.style.visibility = "hidden"
    game_start_btn.style.visibility = "hidden"
    quit.style.visibility = "visible"
}
function loose() {
    message = "You're out of the game!"
    msg_el.textContent = message
    msg_card.textContent = card_msg
    msg_sum.textContent = "Sum : " + sum
    isAlive = false
    new_card.style.visibility = "hidden"
    quit.style.visibility = "visible"
}

function startgame() {
    if (sum < 21) {
        draw_card()
    } else if (sum === 21) {
        won()
    } else {
        loose()
    }
}
function check(sum) {
    if (sum < 21) {
        draw_card()
    } else if (sum === 21) {
        won()
    } else {
        loose()
    }
}
function newcard() {
    let newCard = parseInt(Math.random() * 10 + 1)
    card_msg = card_msg + " , " + newCard
    sum = sum + newCard
    check(sum)
}
function exitgame() {
    game_start_btn.style.visibility = "visible"
    quit.style.visibility = "hidden"
    msg_el.textContent ="Want to play a round?"
    msg_card.textContent = "Cards : "
    msg_sum.textContent = "Sum : " 
    sum = 0
    firstCard = parseInt(Math.random() * 10 + 1)
    secondCard = parseInt(Math.random() * 10 + 2)
    card_msg = "Cards : " + firstCard + " , " + secondCard
    sum = firstCard + secondCard

}