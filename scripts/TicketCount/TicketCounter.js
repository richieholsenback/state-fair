const contentTarget = document.querySelector(".ticketCounter")
const eventHub = document.querySelector("#state-fair")

export const ShowTicketHolders = () => {
    eventHub.addEventListener("showTicketPurchased", clickEvent => {
        contentTarget.innerHTML += `<div>Number of tickets purchased</div>`

    })
}
