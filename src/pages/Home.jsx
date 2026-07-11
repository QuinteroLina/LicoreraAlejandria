import "../styles/home.css";
import logo from "../assets/logo.png";

// Componente que muestra la página principal de bienvenida
function Home() {

  return (

    <section className="home">

      {/* Logo principal de la licorera */}
      <img
        src={logo}
        alt="Logo Licorera Alejandría"
        className="logo-fondo"
      />

      <div className="contenido">

        <h1>🍷 Bienvenido a Licorera Alejandría</h1>

        <p>

          ✔ Más de 30 productos disponibles
          <br />

          ✔ Entregas rápidas
          <br />

          ✔ Los mejores precios de la región.
          <br /><br />

          Encuentra los mejores licores nacionales e importados.
          <br />

          Es un placer para nosotros atenderlo.

        </p>

        {/* Botón para acceder al catálogo de productos */}
        <button>Ver Catálogo</button>

      </div>

    </section>

  );

}

export default Home;