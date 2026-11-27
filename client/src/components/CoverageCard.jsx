import "./CoverageCard.css";

function CoverageCard({ percent, className = "" }) {
  return (
    <div className={`coverage-card ${className}`}>
      <p className="coverage-card-label">Coverage</p>
      <p className="coverage-card-value">{percent}%</p>
      <div className="bar">
        <div className="bar-fill" style={{ width: `${percent}% ` }}></div>
      </div>
    </div>
  );
}

export default CoverageCard;
