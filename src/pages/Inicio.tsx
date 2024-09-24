import Item from "../components/Inicio/Item"

function Inicio() {


    return (
      <>
        <section className="md:max-w-screen-lg md:mx-auto">
          <div className="py-5 px-5 flex flex-col items-center">
            <h1 className="font-manropeBold tracking-texto text-3xl md:text-4xl">Servicios</h1>
          </div> 
          <div className="px-5">
            <Item />
          </div> 
            
        </section>
      </>
    )
  }
  
  export default Inicio