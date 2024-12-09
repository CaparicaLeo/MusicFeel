import "./global.css";
import React from "react";
import ReactDOMClient from "react-dom/client"; // Correto para React 18
import { TelaInicial } from "./screens/TelaInicial";

// Obtém o elemento com id 'app'
const app = document.getElementById("app");

// Cria a raiz para renderizar a aplicação
const root = ReactDOMClient.createRoot(app);

// Renderiza o componente TelaInicial dentro do elemento com id 'app'
root.render(<TelaInicial />);
