import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">MyPetHouse</div>

      {/* Hamburger button (visible only on mobile via CSS) */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Menu — toggle 'active' when menuOpen is true */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/reviews" onClick={() => setMenuOpen(false)}>Reviews</Link></li>
        <li><Link to="/packages" onClick={() => setMenuOpen(false)}>Packages</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li>
  <Link to="/mypets" onClick={() => setMenuOpen(false)}>My Pets</Link>
</li>
      </ul>
      
      <div className="mypets-btn">
  <Link to="/mypets" onClick={() => setMenuOpen(false)}>🐾 My Pets</Link>
</div>

    </nav>
  );
}

export default Navbar;
