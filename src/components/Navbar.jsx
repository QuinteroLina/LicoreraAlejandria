import "../styles/navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

// Componente que muestra la barra de navegación principal de la aplicación
function Navbar() {

    return (

        <nav className="navbar">

            <div className="logo">

                {/* Logo e identificación de la licorera */}
                <Link to="/">
                    <img src={logo} alt="Logo Licorera Alejandría" />
                </Link>

                <Link to="/" className="nombre-empresa">
                    <h2>Licorera Alejandría</h2>
                </Link>

            </div>

            {/* Menú principal de navegación */}
            <ul>

                <li>
                    <Link to="/">Inicio</Link>
                </li>

                <li>
                    <Link to="/productos">Productos</Link>
                </li>

                <li>
                    <Link to="/carrito">Carrito</Link>
                </li>

                <li>
                    <Link to="/ventas">Ventas</Link>
                </li>

                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>

            </ul>

        </nav>

    );

}

export default Navbar;