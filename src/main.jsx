import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Confirmacao from "./routes/Confirmacao/index.jsx"
import DadosBike from "./routes/Dados-bike/index.jsx"
import Error from "./routes/Error/index.jsx"
import DadosCliente from "./routes/Dados-cliente/index.jsx"
import FotosBike from "./routes/Fotos-bike/index.jsx"
import Home from "./routes/Home/index.jsx"
import Planos from "./routes/Planos/index.jsx"
import Sobre from "./routes/Sobre/index.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/planos/confirmacao",
        element: <Confirmacao/>
      },
      {
        path: "/dados-bike",
        element: <DadosBike/>
      },
      {
        path: "/dados-cliente",
        element: <DadosCliente/>
      },
      {
        path: "/dados-bike/fotos",
        element: <FotosBike/>
      },
      {
        path: "/planos",
        element: <Planos/>
      },
      {
        path:"/sobre",
        element: <Sobre/>
      }
    ]

    
  }
]

)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
