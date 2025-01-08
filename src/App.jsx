import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import{Header} from "./components/Header/Header"

import './App.css'

function App() {


  return (
    <>
     <Header/>
     <main>
     <Outlet></Outlet>
     </main>
    </>
  )
}

export default App
