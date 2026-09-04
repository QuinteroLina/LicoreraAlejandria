import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import productosIniciales from "../data/productos";
import "../styles/products.css";

// Componente que muestra el catálogo de productos disponibles
function Products() {

    // Estado que almacena el inventario actual
    const [productos, setProductos] = useState([]);

    // Carga el inventario almacenado
    useEffect(() => {

        const datosGuardados =
            JSON.parse(localStorage.getItem("productos"));

        const inventario =
            datosGuardados && datosGuardados.length > 0
                ? datosGuardados
                : productosIniciales;

        // Si todavía no existe el inventario, se guardan
        // los productos iniciales en LocalStorage
        localStorage.setItem(
            "productos",
            JSON.stringify(inventario)
        );

        setProductos(inventario);

    }, []);

    return (

        <section className="productos">

            <h2>Productos disponibles</h2>

            {/* Contenedor donde se muestran las tarjetas de productos */}
            <div className="contenedor-productos">

                {
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