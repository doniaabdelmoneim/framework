import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [padding, setPadding] = useState("calc(1rem + 0.5vw)");

  useEffect(() => {
    function changePadding() {
      if (window.scrollY >= 30) {
        setPadding("calc(0.5rem + 0.25vw)");
      } else {
        setPadding("calc(1rem + 0.5vw)");
      }
    }
    window.addEventListener("scroll", changePadding);

    return () => {
      window.removeEventListener("scroll", changePadding);
    };
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{ padding }}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            START FRAMEWORK
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className="nav-link">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
