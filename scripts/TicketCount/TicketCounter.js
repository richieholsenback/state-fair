const contentTarget = document.querySelector(".ticketCounter")
const eventHub = document.querySelector("#state-fair")
let ticketCount = 0
const ticketCounter = (numOfTickets) => {
    
}

export const ShowTicketHolders = () => {
    eventHub.addEventListener("showTicketPurchased", clickEvent => {
        contentTarget.innerHTML += `<div>Number of tickets purchased</div>`

    })
}
