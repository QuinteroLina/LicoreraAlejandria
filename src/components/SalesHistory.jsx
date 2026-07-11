import { useEffect, useState } from "react";
import "../styles/salesHistory.css";

// Componente que muestra el historial de ventas registradas
function SalesHistory() {

    // Estado que almacena las ventas guardadas en LocalStorage
    const [ventas, setVentas] = useState([]);

    // Función para cargar las ventas almacenadas
    const cargarVentas = () => {

        const datos = JSON.parse(localStorage.getItem("ventas")) || [];

        setVentas(datos);

    };

    // Carga las ventas al iniciar el componente y escucha cambios en el almacenamiento
    useEffect(() => {

        cargarVentas();

        window.addEventListener("storage", cargarVentas);

        return () => {

            window.removeEventListener("storage", cargarVentas);

        };

    }, []);

    return (

        <section className="sales-history">

            <h2>📋 Historial de Ventas</h2>

            {

                // Verifica si existen ventas registradas
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

                                // Recorre la lista de ventas para mostrarlas en la tabla
                                ventas.map((venta, index) => (

                                    <tr key={index}>

                                        <td>{venta.fecha}</td>

                                        <td>{venta.productos.length}</td>

                                        <td>

                                            ${venta.total.toLocaleString("es-CO")}

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