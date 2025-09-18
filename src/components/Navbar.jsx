import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">MyPetHouse</div>
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#pages">Pages</a></li>
      </ul>
      <div className="cart-btn">
        🛒 2 Item
      </div>
    </nav>
  );
}

export default Navbar;
