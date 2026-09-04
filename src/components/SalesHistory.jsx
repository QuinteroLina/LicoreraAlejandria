import { useEffect, useState } from "react";
import "../styles/salesHistory.css";

// Componente que muestra el historial de ventas registradas
function SalesHistory() {

    // Estado que almacena las ventas guardadas en LocalStorage
    const [ventas, setVentas] = useState([]);

    // Función para cargar las ventas almacenadas
    const cargarVentas = () => {

        const datos =
            JSON.parse(localStorage.getItem("ventas")) || [];

        setVentas(datos);

    };

    // Carga las ventas al iniciar el componente
    useEffect(() => {

        cargarVentas();

        // Escucha cambios realizados desde otras pestañas
        window.addEventListener("storage", cargarVentas);

        // Escucha el evento personalizado generado dentro de la aplicación
        window.addEventListener("ventaRealizada", cargarVentas);

        return () => {

            window.removeEventListener(
                "storage",
                cargarVentas
            );

            window.removeEventListener(
                "ventaRealizada",
                cargarVentas
            );

        };

    }, []);

    return (

        <section className="sales-history">

            <h2>📋 Historial de Ventas</h2>

            {
                ventas.length === 0 ?

                    <p>No hay ventas registradas.</p>

                    :

                    <table>

                        <thead>

                            <tr>

                                <th>Fecha</th>
                                <th>Productos</th>
                                <th>Total</th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                ventas.map((venta, index) => (

                                    <tr
                                        key={venta.id ?? index}
                                    >

                                        <td>
                                            {venta.fecha}
                                        </td>

                                        <td>
                                            {
                                                venta.productos.reduce(
                                                    (total, producto) =>
                                                        total + producto.cantidad,
                                                    0
                                                )
                                            }
                                        </td>

                                        <td>
                                            $
                                            {Number(
                                                venta.total
                                            ).toLocaleString("es-CO")}
                                        </td>

                                    </tr>

                                ))
                            }

                        </tbody>

                    </table>
            }

        </section>

    );

}

export default SalesHistory;