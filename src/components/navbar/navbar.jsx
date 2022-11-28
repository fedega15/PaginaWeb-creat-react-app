import './nav.css'
import { useState } from "react"




export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        BARBER SHOP
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
       <svg viewBox="0 0 100 80" width="40" height="40">
  <rect x="14"width="30" height="15"></rect>
  <rect x = "14"y="25" width="30" height="15"></rect>
  
</svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a  href="/inicio">Inicio</a>
          </li>
          <li>
            <a  href="/nosotros">Nosotros</a>
          </li>
          <li>
            <a  href="/contactanos">Contactanos</a>
          </li>
          <li>
            <a href="/servicios">Servicios</a>
          </li>
          <li>
            <a href="/cortes">Cortes</a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}