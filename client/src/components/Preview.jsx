import "./Preview.css";
import preview from "../assets/dashboard-preview.png"

function Preview() {
  return (
    <section className="preview">
      <div className="preview-header">
        <p className="section-label">INSIDE TROVE</p>
        <h2 className="section-heading">Your home home on one screen.</h2>
        <p className="section-text">
          Every room, every item and your coverage, always up to date.
        </p>
      </div>
      <div className="preview-frame">
        <img src={preview} alt="Trove dashboard showing total value, coverage and rooms" />
      </div>
    </section>
  );
}

export default Preview;
