import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import {  AppRouter} from "./utis/AppRouter";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={AppRouter}></RouterProvider>
  </StrictMode>,
)
