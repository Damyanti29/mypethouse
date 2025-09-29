import React from "react";
import "./Mph.css";
import { Link } from "react-router-dom";

export default function Mph() {
  return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1>
//           The World's Best Team <br /> for Pet Care Services
//         </h1>
//         <p>
//           Consequat nisl vel pretium lectus quam id leo in. Quis viverra nibh cras
//           pulvinar mattis. Quis hendrerit dolor magna eget est lorem ipsum dolor
//         </p>
//         <button className="hero-btn">🐾 Our Service</button>
//       </div>

//       {/* Dog */}
//       <div className="hero-dog">
//         <div className="circle pink"></div>
//         <img src="/dog1.png" alt="Dog" />
//       </div>

//       {/* Cat */}
//       <div className="hero-cat">
//         <div className="circle yellow"></div>
//         <img src="/dog2.png" alt="Cat" />
//       </div>

//       {/* Decorative paw + dots */}
//       <span className="paw paw1">🐾</span>
//       <span className="paw paw2">🐾</span>
//       <span className="dot dot1"></span>
//       <span className="dot dot2"></span>
//       <span className="dot dot3"></span>
//     </section>
//   );
// }
 <section className="hero">
      <div className="hero-wrapper">
        {/* Left - Dog */}
        <div className="pet left">
          <div className="circle pink"></div>
          <img src="/d1.png" alt="Dog" />
        </div>

        {/* Center - Text */}
        <div className="hero-content">
          <h1>
            The World's Best Team  for Pet Care Services
          </h1>
          <p>
            Experience the best for your furry friends at our pet grooming and boarding center! From refreshing baths and stylish haircuts to safe, cozy boarding and playful daycare, we’ve got every service your pet needs to look and feel their best. Visit us and check out our full range of grooming, boarding, and special care services—personalized for your pet’s comfort and happiness
          </p>
          <button className="hero-btn">🐾 Our
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          </button>
        </div>

        {/* Right - Cat */}
        <div className="pet right">
          <div className="circle yellow"></div>
          <img src="/d2.png" alt="Cat" />
        </div>
      </div>
      <span className="paw paw1">🐾</span>
      <span className="paw paw2">🐾</span>
       <span className="dot dot1"></span>
       <span className="dot dot2"></span>
       <span className="dot dot3"></span>
    </section>
  );
}
