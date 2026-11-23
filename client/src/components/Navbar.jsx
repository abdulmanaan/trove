import { CaretDown } from "@phosphor-icons/react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="navbar-logo">
        Trove<span>.</span>
      </a>
      <nav className="navbar-links">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#" className="navbar-dropdown">
          Resources
          <CaretDown size={16} />
        </a>
        <a href="#">About</a>
      </nav>
      <div className="navbar-actions">
        <a href="#">Log in</a>
        <button className="btn btn-primary">Get started</button>
      </div>
    </header>
  );
}

export default Navbar;
