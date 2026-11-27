import "./Hero.css";
import camera from "../assets/hero/camera.png";
import ring from "../assets/hero/ring.png";
import bag from "../assets/hero/bag.png";
import painting from "../assets/hero/painting.png";
import armchair from "../assets/hero/armchair.png";
import watch from "../assets/hero/watch.png";
import CoverageCard from "./CoverageCard";

function Hero() {
  const heroItems = [
    {
      name: "Camera",
      price: "$2,150",
      image: camera,
      className: "item-camera",
    },
    { name: "Ring", price: "$5,600", image: ring, className: "item-ring" },
    { name: "Bag", price: "$3,900", image: bag, className: "item-bag" },
    {
      name: "Painting",
      price: "$18,500",
      image: painting,
      className: "item-painting",
    },
    {
      name: "Armchair",
      price: "$3,200",
      image: armchair,
      className: "item-armchair",
    },
    { name: "Watch", price: "$8,400", image: watch, className: "item-watch" },
  ];

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
      {heroItems.map((item) => (
        <div key={item.name} className={`hero-item ${item.className}`}>
          {" "}
          <img src={item.image} alt={item.name} />{" "}
          <span className="hero-tag">{item.price}</span>{" "}
        </div>
      ))}
      <CoverageCard percent={82} className="hero-coverage" />
    </section>
  );
}

export default Hero;
