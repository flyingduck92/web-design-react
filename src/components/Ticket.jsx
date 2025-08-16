import single from '../assets/pexels-samson-katt-5225420_single.jpg'
import seven from '../assets/pexels-cottonbro-8261581_7day.jpg'

function Ticket() {
  return (
    <>
      <h1 className='heading-title'>Tickets</h1>
      <article id="ticket">
        <section>
          <img src={single} alt="single-day" />
          <div className='ticket-wrapper'>
            <h1>Single-Day Ticket</h1>
            <p>Enjoy the unlimited access to the museum for one day, perfect for a short visit or exploring at your own pace in a single trip.</p>
            <a className='btn' href="#">Buy</a>
          </div>
        </section>
        <section>
          <img src={seven} alt="seven-day" />
          <div className="ticket-wrapper">
            <h1>7-Day Ticket</h1>
            <p>A seven-day ticket allows unlimited entry across a full week, ideal for multiple entries or enjoy different exhibitions over several days.</p>
            <a className='btn' href="#">Buy</a>
          </div>
        </section>
      </article>
    </>
  )
}

export default Ticket