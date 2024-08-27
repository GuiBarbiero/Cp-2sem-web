import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';  // A página principal será o componente Home
import Sobre from './pages/Sobre';  // Importa o componente Sobre
import Contato from './pages/Contato';  // Importa o componente Contato
import './index.css';
import './sobre.css';
import './contato.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Configurando as rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,  // Home será a rota principal
  },
  {
    path: "/sobre",
    element: <Sobre />,  // Rota para a página Sobre
  },
  {
    path: "/contato",
    element: <Contato />,  // Rota para a página Contato
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);