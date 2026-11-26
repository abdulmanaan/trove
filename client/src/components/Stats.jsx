import "./Stats.css";

function Stats() {
  const stats = [
    {
      number: "20%",
      label: "of insured homeowners updated a home inventory last year",
      highlight: false,
    },
    {
      number: "25%",
      label: "have never made one at all",
      highlight: false,
    },
    {
      number: "2 in 3",
      label: "homes may be underinsured",
      highlight: true,
    },
    {
      number: "74%",
      label: "of Marshall Fire policyholders were underinsured",
      highlight: false,
    },
  ];

  return (
    <section className="stats">
      <ul className="stats-list">
        {stats.map((stat) => (
          <li key={stat.number} className="stat">
            <p className={`stat-number ${stat.highlight ? "highlight" : ""}`}>
              {stat.number}
            </p>
            <p className="stat-label">{stat.label}</p>
          </li>
        ))}
      </ul>
      <a href="#" className="stats-source">
        See the sources
      </a>
    </section>
  );
}

export default Stats;
