import hero from '../assets/pexels-sebastian-dziomba-762357063-30397052_hero.jpg'

function Hero() {
  return (
    <section>
      <picture>
        <source media='(width < 800px)' srcSet={hero} />
        <source media='(width >= 800px)' srcSet={hero} />
        <img src={hero} alt="Exhibition hero" />
      </picture>
    </section>
  )
}

export default Hero