import { Ticket } from './Tiket'

let sortStrategies: object = {
  destination: (a:Ticket, b:Ticket) => a.destination.localeCompare(b.destination),
  status: (a:Ticket, b:Ticket) => a.status.localeCompare(b.status),
  price: (a:Ticket, b:Ticket) => a.price - b.price
}

function sortTickets(ticketsInput: string[], critaria: string) {
  let tickets = handleInput(ticketsInput)
  return tickets.sort(sortStrategies[critaria])
}

function handleInput(ticketsInput: string[]) {
  let tickets: Ticket[] = []

  for (const ticketStr of ticketsInput) {
    let [destination, price, status] = ticketStr.split('|')

    tickets.push(new Ticket(destination, Number(price), status))
  }

  return tickets
}

let result = sortTickets(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
  ],
  'status')

console.log(result)