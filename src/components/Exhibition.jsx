import ExhibitionItem from './ExhibitionItem'

const exhibitions = [
  {
    title: "Autumn Holiday Activities",
    description: "Join our family-friendly events, hands-on workshops, guided tours, and fun dino-themed experiences this Summer Holiday."
  },
  {
    title: "The Science of Nature",
    description: "Explores how the natural world works, from the smallest living organisms to vast ecosystems."
  },
  {
    title: "Save our Earth",
    description: "Help us to save the Earth from pollution, climate change, and environmental damages."
  },
]


function Exhibition() {
  return (
    <>
      <h1 className='heading-title'>Exhibition and Events</h1>
      <article id="exhibition">
        {exhibitions.map(exhibition => (
          <ExhibitionItem exhibition={exhibition} />
        ))}
      </article>
    </>
  )
}

export default Exhibition