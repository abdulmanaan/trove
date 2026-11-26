import "./Problem.css";

function Problem() {
  const claimItems = [
    { name: "Television", issue: "No reeipt" },
    { name: "Dining Table", issue: "No photo" },
    { name: "Jewelry box", issue: "Forgot it" },
    { name: "Road bike", issue: "No reeipt" },
  ];

  return (
    <section className="problem">
      <div className="problem-text">
        <p className="section-label">THE PROBLEM</p>
        <h2 className="section-heading">
          After a fire, nobody remembers the TV in the guest room.
        </h2>
        <p className="section-text">
          When disaster hits, your insurer asks for a list of everything you
          owned, what it cost and proof that you had it. Most people can only
          remember a fraction. Anything you forget never makes it into the
          claim.
        </p>
      </div>
      <div className="card claim-card">
        <h3>Your claim list</h3>
        {claimItems.map((item) => (
            <div key={item.name} className="claim-row">
                <span className="claim-name">{item.name}</span>
                <span className="chip chip-red">{item.issue}</span>
                <span className="claim-price">$ ?</span>
            </div>
        ))}
        <div className="claim-total">Value you can't prove
            <span className="claim-total-value">$23,400</span>
        </div>
      </div>
    </section>
  );
}

export default Problem;
