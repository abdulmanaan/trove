import "./Features.css";
import watch from "../assets/hero/watch.png";
import painting from "../assets/hero/painting.png";
import CoverageCard from "./CoverageCard";

const itemsList = [
  { photo: watch, name: "Watch", room: "Bedroom", price: "$8,400" },
  { photo: painting, name: "Painting", room: "Living room", price: "$18,500" },
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="features-header">
        <p className="section-label">FEATURES</p>
        <h2 className="section-heading">
          Everything your claim needs, in one place.
        </h2>
      </div>

      <div className="features-grid">
        <article className="card feature-card">
          <div className="feature-visual" aria-hidden="true">
            {itemsList.map((item) => (
              <div key={item.name} className="item-row">
                <img src={item.photo} alt="" />
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-room">{item.room}</span>
                </div>
                <div className="item-price">
                  <span className="item-amount">{item.price}</span>
                  <span className="item-receipt">Has receipt</span>
                </div>
              </div>
            ))}
          </div>
          <h3>Snap it, log it</h3>
          <p>
            Add items room by room with a photo, price, purchase date and
            receipt.
          </p>
        </article>

        <article className="card feature-card">
          <div className="feature-visual" aria-hidden="true">
            <CoverageCard percent={82} />
          </div>
          <h3>Know your gap</h3>
          <p>
            Enter your policy limit and see exactly how much you're
            underinsured.
          </p>
        </article>

        <article className="card feature-card">
          <div
            className="feature-visual feature-visual-report"
            aria-hidden="true"
          >
            <div className="paper">
              <span className="paper-title"></span>
              <span className="paper-line"></span>
              <span className="paper-line"></span>
              <span className="paper-line"></span>
              <span className="paper-line"></span>
            </div>
            <span className="btn btn-primary">Download PDF</span>
          </div>
          <h3>Claim in one click</h3>
          <p>
            Turn your whole inventory into a report your insurer can actually
            use.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Features;
