import { GifItem } from "./GifItem";
import { useFetchGifs } from "../../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs( category );
       
    return ( 
    <>
    
        <h3> {category} </h3>
        {
            isLoading && ( <h2>Cargando...</h2> )
        }                
        <div className="card-grid">
             {
                images.map( ( image ) => (
                    <GifItem 
                        key={image.id} 
                        {...image}
                   
                    />
                ))
             }

        </div>
    </>
    )
}
  


//Esta manera de escribir se considera una buena practica porque
//el componente no esta reprocesando la funcion 
//(asigna un nuevo espacio en memoria cada que se renderiza)
//una vez recibida la categoria solo se debe ejecutar una unica vez esta funcion    
//useEffect es para disparar efectos secundarios cuando
//se produzca un cambio en cualquier elemento  
   
  

