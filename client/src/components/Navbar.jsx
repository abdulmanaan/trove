import { CaretDownIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          <CaretDownIcon weight="bold" size={16} />
        </a>
        <a href="#">About</a>
      </nav>
      <div className="navbar-actions">
        <a href="#">Log in</a>
        <button className="btn btn-primary">Get started</button>
      </div>
      <button
        className="navbar-menu"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <XIcon weight="bold" size={24} />
        ) : (
          <ListIcon weight="bold" size={24} />
        )}
      </button>
      {isOpen && (
        <div className="mobile-menu">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
          <a href="#">About</a>
          <a href="#">Log in</a>
          <button className="btn btn-primary">Get started</button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
