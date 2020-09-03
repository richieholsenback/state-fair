const contentTargetFood = document.querySelector(".food")
const contentTargetGames = document.querySelector(".games")
const contentTargetRides = document.querySelector(".rides")
const contentTargetSideshow = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const BigTicketHolders = () => {
    eventHub.addEventListener("bigTicketPurchased", clickEvent => {
        contentTargetFood.innerHTML += `<div class="person bigSpender"></div>`
        contentTargetGames.innerHTML += `<div class="person bigSpender"></div>`
        contentTargetRides.innerHTML += `<div class="person bigSpender"></div>`
        contentTargetSideshow.innerHTML += `<div class="person bigSpender"></div>`
    })
}