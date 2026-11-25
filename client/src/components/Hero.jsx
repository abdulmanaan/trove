import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-heading">
        Own it. <br /> Track it. <br /> <span>Claim it.</span>
      </h1>
      <p className="hero-text">
        Trove keeps a record of everything in your home and shows you if your
        insurance really covers it.
      </p>
      <div className="hero-buttons">
        <a href="#" className="btn btn-primary">
          Get started free
        </a>
        <a href="#calculator" className="btn btn-secondary">
          Check your coverage
        </a>
      </div>
    </section>
  );
}

export default Hero;
