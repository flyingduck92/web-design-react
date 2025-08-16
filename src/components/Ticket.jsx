import single from '../assets/pexels-samson-katt-5225420_single.jpg'
import seven from '../assets/pexels-cottonbro-8261581_7day.jpg'
import TicketItem from './TicketItem'

const tickets = [
  {
    image: single,
    title: 'Single-Day Ticket',
    description: 'Enjoy the unlimited access to the museum for one day, perfect for a short visit or exploring at your own pace in a single trip.'
  },
  {
    image: seven,
    title: '7-Day Ticket',
    description: 'A seven-day ticket allows unlimited entry across a full week, ideal for multiple entries or enjoy different exhibitions over several days.'
  }
]

function Ticket() {
  return (
    <>
      <h1 className='heading-title'>Tickets</h1>
      <article id="ticket">
        {
          tickets.map(ticket => (
            <TicketItem ticket={ticket} />
          ))
        }
      </article>
    </>
  )
}

export default Ticket