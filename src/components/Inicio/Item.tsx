import { useNavigate } from 'react-router-dom';

interface ItemProps {
  textoItem: string;
  imagenItem: string;
  direccionarItem: string;
}

const Item: React.FC<ItemProps> = ({textoItem, imagenItem, direccionarItem})  => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(direccionarItem); // Redirige a la URL proporcionada
  };
    return (
      <>
        <div className="mx-auto md:max-w-96 flex items-center flex-col container bg-white p-5 rounded-2xl border-2 border-gray-300 cursor-pointer" onClick={handleClick}>
          <img src={imagenItem} alt={textoItem} className="p-5 object-cover"></img>
          <h1 className="font-inter font-bold tracking-texto text-2xl ">
            {textoItem}
          </h1>

        </div>  
      </>
    );
 }
  
  export default Item;