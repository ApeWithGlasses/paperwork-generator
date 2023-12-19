import { Link } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <section className="right--section">
            <img src="https://i.imgur.com/7ZAsfKX.png" alt="LSSD Logo" className="lssd--logo"/>
        </section>
        <section className="left--section">
            <ul className="links">
                <li><Link to={'/'}>Inicio</Link></li>
                <li><Link to={'/incidents'}>Generador Incidentes</Link></li>
                <li><Link to={'/cases'}>Generador Casos OSSB</Link></li>
            </ul>
        </section>
    </nav>
  )
}

export default Navbar