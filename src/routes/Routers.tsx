import { Route, Routes } from "react-router-dom"
import Inicio from "../pages/inicio/Inicio"
import Gestion from "../pages/gestion/Gestion";

const Routers = () => {
    return (
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path='/gestion' element={<Gestion />} />
      </Routes>
    )
  }
  
  export default Routers;