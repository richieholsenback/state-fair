const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
        console.log(clickEvent)
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "foodTicket") {
        console.log(clickEvent)
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "gameTicket") {
        console.log(clickEvent)
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showTicket") {
        console.log(clickEvent)
        const showEvent = new CustomEvent("showTicketPurchased")
        eventHub.dispatchEvent(showEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "bigTicket") {
        console.log(clickEvent)
        const bigEvent = new CustomEvent("bigTicketPurchased")
        eventHub.dispatchEvent(bigEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.classList === "button") {
        console.log(clickEvent)
        const ticketCounter = new CustomEvent("ticketCount")
        eventHub.dispatchEvent(ticketCounter)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button class="button" id="rideTicket">Ride Ticket</button>
            <button class="button" id="foodTicket">Food Ticket</button>
            <button class="button" id="gameTicket">Game Ticket</button>
            <button class="button" id="showTicket">Side Show Ticket</button>
            <button class="button" id="bigTicket">Full Package Ticket</button>
        </div>
    `
}



