import css from "./hero.module.css"
export default function Hero() {
  return (
      <div className={css.hero}>
        <h1>Find the perfect <span className={css.span}>Freelance</span> services for your business</h1>
        <p>We're a team of freelancers who specialize in helping businesses grow and succeed online.</p>
        <div className={css.buttons}>
          <button className={css.hero_button}>Get Started</button>
          <button className={css.hero_button}>Learn More</button>
        </div>  
      </div>
  )
}

