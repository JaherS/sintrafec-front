import { Route, Routes } from "react-router-dom"
import Inicio from "../pages/Inicio"

const Routers = () => {
    return (
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    )
  }
  
  export default Routers