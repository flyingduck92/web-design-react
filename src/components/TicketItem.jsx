function TicketItem({ ticket }) {
  return (
    <section>
      <img src={ticket.image} alt="single-day" />
      <div className='ticket-wrapper'>
        <h1>{ticket.title}</h1>
        <p>{ticket.description}</p>
      </div>
      <div>
        <a className='btn' href="#">Buy</a>
      </div>
    </section>
  )
}

export default TicketItem