import Item from "../../components/Inicio/Item";
import { Button } from 'primereact/button';

const Inicio = () => {

  const servicios = [
    {
      textoItem: "Sistema POS",
      imagenItem: "/img/pos.png", // Ruta a la imagen
      direccionarItem: "/sistema"
    },
    {
      textoItem: "Gestión",
      imagenItem: "/img/gestion.png", // Ruta a la imagen
      direccionarItem: "/gestion"
    },
    {
      textoItem: "Inventario",
      imagenItem: "/img/inventory.png", // Ruta a la imagen
      direccionarItem: "/inventario"
    }
  ];

    return (
      <>
        <section className="md:max-w-screen-lg md:mx-auto">
          <div className="pt-10 md:pt-10 px-5 flex flex-col  items-center ">
            <h1 className="font-manropeBold tracking-texto text-4xl md:text-6xl">Servicios</h1>
          </div> 
          <div className="px-5 py-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {servicios.map((servicio, index) => (
              <Item
              key={index}
              textoItem={servicio.textoItem}
              imagenItem={servicio.imagenItem}
              direccionarItem={servicio.direccionarItem}  // Pasar la URL al componente
              />
            ))}
          </div> 
            
        </section>
      </>
    )
  }
  
  export default Inicio;