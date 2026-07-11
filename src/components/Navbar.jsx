import "../styles/navbar.css";
import logo from "../assets/logo.png";

// Componente que muestra la barra de navegación principal de la aplicación
function Navbar() {

    return (

        <nav className="navbar">

            <div className="logo">

                {/* Logo e identificación de la licorera */}
                <img src={logo} alt="Logo" />

                <h2>Licorera Alejandría</h2>

            </div>

            {/* Menú principal de navegación */}
            <ul>

                <li>Dashboard</li>

                <li>Productos</li>

                <li>Inventario</li>

                <li>Ventas</li>

                <li>Clientes</li>

            </ul>

        </nav>

    );

}

export default Navbar;