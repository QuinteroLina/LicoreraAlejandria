// Importación de las imágenes de los productos
import ronCaldasLitro from "../assets/productos/ron-caldas-litro.jpg";
import ronCaldasBotella from "../assets/productos/ron-caldas-botella.jpg";

import aguardienteAmarilloBotella from "../assets/productos/aguardiente-amarillo-botella.jpg";
import aguardienteAmarilloMedia from "../assets/productos/aguardiente-amarillo-media.jpg";

import aguardienteAzulMedia from "../assets/productos/aguardiente-azul-media.jpg";
import aguardienteAzulLitro from "../assets/productos/aguardiente-azul-litro.jpg";
import aguardienteAzulGarrafa from "../assets/productos/aguardiente-azul-garrafa.jpg";

import aguardienteRojoMedia from "../assets/productos/aguardiente-rojo-media.jpg";
import aguardienteRojoLitro from "../assets/productos/aguardiente-rojo-litro.jpg";
import aguardienteRojoGarrafa from "../assets/productos/aguardiente-rojo-garrafa.jpg";

import aguardienteVerdeMedia from "../assets/productos/aguardiente-verde-media.jpg";
import aguardienteVerdeLitro from "../assets/productos/aguardiente-verde-litro.jpg";
import aguardienteVerdeGarrafa from "../assets/productos/aguardiente-verde-garrafa.jpg";

import ronEsencialMedia from "../assets/productos/ron-esencial-media.jpg";
import ronEsencialLitro from "../assets/productos/ron-esencial-litro.jpg";
import ronEsencialGarrafa from "../assets/productos/ron-esencial-garrafa.jpg";

import ronMedellinMedia from "../assets/productos/ron-medellin-media.jpg";
import ronMedellinLitro from "../assets/productos/ron-medellin-litro.jpg";
import ronMedellinBotella from "../assets/productos/ron-medellin-botella.jpg";

import baileys from "../assets/productos/baileys-botella.jpg";

import oldParrMedia from "../assets/productos/oldparr-media.jpg";
import oldParrBotella from "../assets/productos/oldparr-botella.jpg";

import buchanansMedia from "../assets/productos/buchanans-media.jpg";
import buchanansBotella from "../assets/productos/buchanans-botella.jpg";
import buchanansMaster from "../assets/productos/buchanans-master-botella.jpg";

import redLabel from "../assets/productos/red-label-botella.jpg";

import jackHoney from "../assets/productos/jack-daniels-honey-botella.jpg";

import joseCuervo from "../assets/productos/jose-cuervo-botella.jpg";

import jimador from "../assets/productos/jimador-botella.jpg";

import bandolero from "../assets/productos/bandolero-litro.jpg";

// Arreglo que almacena la información de todos los productos
// Cada objeto contiene el identificador, nombre, categoría,
// precio de compra, precio de venta, cantidad en inventario e imagen.
const productos = [
    {
        id: 1,
        nombre: "Ron Caldas Litro",
        categoria: "Ron",
        compra: 63680,
        venta: 68000,
        stock: 20,
        imagen: ronCaldasLitro
    },
    {
        id: 2,
        nombre: "Ron Caldas Botella",
        categoria: "Ron",
        compra: 49610,
        venta: 53000,
        stock: 25,
        imagen: ronCaldasBotella
    },
    {
        id: 3,
        nombre: "Aguardiente Amarillo Botella",
        categoria: "Aguardiente",
        compra: 51689,
        venta: 56000,
        stock: 30,
        imagen: aguardienteAmarilloBotella
    },
    {
        id: 4,
        nombre: "Aguardiente Amarillo Media",
        categoria: "Aguardiente",
        compra: 27775,
        venta: 30500,
        stock: 40,
        imagen: aguardienteAmarilloMedia
    },
    {
        id: 5,
        nombre: "Aguardiente Azul Media",
        categoria: "Aguardiente",
        compra: 24040,
        venta: 26000,
        stock: 35,
        imagen: aguardienteAzulMedia
    },
    {
        id: 6,
        nombre: "Aguardiente Azul Litro",
        categoria: "Aguardiente",
        compra: 64450,
        venta: 69000,
        stock: 20,
        imagen: aguardienteAzulLitro
    },
    {
        id: 7,
        nombre: "Aguardiente Azul Garrafa",
        categoria: "Aguardiente",
        compra: 110010,
        venta: 118000,
        stock: 10,
        imagen: aguardienteAzulGarrafa
    },
    {
        id: 8,
        nombre: "Aguardiente Rojo Media",
        categoria: "Aguardiente",
        compra: 23440,
        venta: 25000,
        stock: 35,
        imagen: aguardienteRojoMedia
    },
    {
        id: 9,
        nombre: "Aguardiente Rojo Litro",
        categoria: "Aguardiente",
        compra: 53900,
        venta: 58000,
        stock: 18,
        imagen: aguardienteRojoLitro
    },
    {
        id: 10,
        nombre: "Aguardiente Rojo Garrafa",
        categoria: "Aguardiente",
        compra: 103980,
        venta: 110000,
        stock: 8,
        imagen: aguardienteRojoGarrafa
    },

    { 
        id: 11, 
        nombre: "Aguardiente Verde Media", 
        categoria: "Aguardiente",
        compra: 22285,
        venta: 24000,
        stock: 5,
        imagen: aguardienteVerdeMedia 
    },
    
    {
        id: 12, 
        nombre: "Aguardiente Verde Litro",
        categoria: "Aguardiente",
        compra: 50940,
        venta: 55000,
        stock: 10,
        imagen: aguardienteVerdeLitro 
    },

    { 
        id: 13,
        nombre: "Aguardiente Verde Garrafa",
        categoria: "Aguardiente", 
        compra: 84420,
        venta: 91000,
        stock: 5,
        imagen: aguardienteVerdeGarrafa 
    },

    {
        id: 14,
        nombre: "Ron Esencial Media", 
        categoria: "Ron",
        compra: 22040, 
        venta: 24000, 
        stock: 15,        
        imagen: ronEsencialMedia 
    },

    {
        id: 15,
        nombre: "Ron Esencial Litro", 
        categoria: "Ron",
        compra: 56250,
        venta: 60000,
        stock: 6,
        imagen: ronEsencialLitro 
    },

    { 
        id: 16, 
        nombre: "Ron Esencial Garrafa", 
        categoria: "Ron",
        compra: 105000,
        venta: 110000,
        stock: 5,
        imagen: ronEsencialGarrafa 
    },

    { 
        id: 17, 
        nombre: "Ron Medellín Media", 
        categoria: "Ron",
        compra: 23500, 
        venta: 26000,
        stock: 5,
        imagen: ronMedellinMedia 
    },

    { 
        id: 18, 
        nombre: "Ron Medellín Litro", 
        categoria: "Ron",
        compra: 56000, 
        venta: 62000, 
        stock: 5,
        imagen: ronMedellinLitro 
    },

    { 
        id: 19, 
        nombre: "Ron Medellín Botella", 
        categoria: "Ron",
        compra: 44620,
        venta:48000, 
        stock: 5,
        imagen: ronMedellinBotella 
    },

    { 
        id: 20, 
        nombre: "Baileys Botella", 
        categoria: "Crema de  Whisky",
        compra: 73400, 
        venta: 78000,
        stock: 10,
        imagen: baileys 
    },

    { 
        id: 21, 
        nombre: "Old Parr Media", 
        categoria:"Whisky",
        compra:93000,
        venta:100000,
        stock:5,
        imagen: oldParrMedia 
    },

    { 
        id: 22, 
        nombre: "Old Parr Botella", 
        categoria:"Whisky",
        compra: 130000,
        venta:140000,
        stock:5,
        imagen: oldParrBotella 
    },

    { 
        id: 23, 
        nombre: "Buchanan's Media", 
        categoria: "Whisky",
        compra: 94700,
        venta: 98000,
        stock: 5,
        imagen: buchanansMedia 
    },

    { 
        id: 24, 
        nombre: "Buchanan's Botella", 
        categoria: "Whisky",
        compra: 147000,
        venta: 158000,
        stock: 5,
        imagen: buchanansBotella 
    },

    { 
        id: 25, 
        nombre: "Buchanan's Master", 
        categoria: "Whisky",
        compra: 173000,
        venta: 186000,
        stock: 5,
        imagen: buchanansMaster 
    },

    { 
        id: 26, 
        nombre: "Red Label Botella", 
        categoria: "Whisky",
        compra: 61150,
        venta: 65000,
        stock: 5,
        imagen: redLabel 
    },

    { 
        id: 27, 
        nombre: "Jack Daniel's Honey Botella", 
        categoria: "Whisky",
        compra: 106000,
        venta: 115000,
        stock: 5,
        imagen: jackHoney 
    },

    { 
        id: 28, 
        nombre: "José Cuervo Botella", 
        categoria:"Tequila",
        compra: 73500,
        venta: 79000,
        stock: 5, 
        imagen: joseCuervo 
    },

    { 
        id: 29, 
        nombre: "Jimador Botella", 
        categoria: "Tequila",
        compra: 97600,
        venta: 106000,
        stock: 5,
        imagen: jimador 
    },

    {
        id: 30, 
        nombre: "Bandolero Litro", 
        categoria: "Tequila",
        compra: 63000,
        venta: 69000,
        stock: 5,
        imagen: bandolero 
    }
];

// Exporta el listado de productos para ser utilizado en el catálogo
export default productos;