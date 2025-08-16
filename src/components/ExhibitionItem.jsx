function ExhibitionItem({ exhibition }) {
  return (
    <section>
      <a href="#">
        <h1>{exhibition.title}</h1>
        <p>{exhibition.description}</p>
      </a>
    </section>
  )
}

export default ExhibitionItem