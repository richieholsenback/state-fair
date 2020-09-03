const contentTarget = document.querySelector(".people")
const eventHub = document.querySelector("#state-fair")

export const BigTicketHolders = () => {
    eventHub.addEventListener("bigTicketPurchased", clickEvent => {
        contentTarget.innerHTML += `<div class="person bigSpender"></div>`

    })
}