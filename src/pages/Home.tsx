import { Link } from 'react-router-dom';

import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <>
      <Navbar/>
      <section className="navigation">
        <div className="title--container">
          <h2>Navegación Rápida</h2>
        </div>
        <Link to={'/incidents'}>Generar Reporte de Incidente</Link>
      </section>
    </>
  )
}

export default Home