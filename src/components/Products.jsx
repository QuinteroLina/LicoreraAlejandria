import ProductCard from "./ProductCard";
import productos from "../data/productos";
import "../styles/products.css";

// Componente que muestra el catálogo de productos disponibles
function Products() {

    return (

        <section className="productos">

            <h2>Productos disponibles</h2>

            {/* Contenedor donde se muestran todas las tarjetas de productos */}
            <div className="contenedor-productos">

                {
                    // Recorre el arreglo de productos y crea una tarjeta para cada uno
                    productos.map((producto) => (

                        <ProductCard
                            key={producto.id}
                            producto={producto}
                        />

                    ))
                }

            </div>

        </section>

    );

}

export default Products;