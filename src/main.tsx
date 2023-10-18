import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from './pages/Home.tsx';
import Incidents from './pages/Incidents.tsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/incidents",
    element: <Incidents/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
