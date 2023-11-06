//cada componente puede tener su propio estado(hooks)
//los componentes se crean de manera segmentada y que cada uno de ellos se dedique a hacer una tarea en especifico
import React from 'react';
import { useState } from 'react';



export const AddCategory = ({ onNewCategory }) => {
  
    //necesito manejar el estado de este imput
    const [inputValue, setInputValue] = useState('');

    //aca siempre se recibe el evento 
    const onInputChange = ({ target }) => {        
        setInputValue( target.value );
    }
    
 //cuando presiono enter se envia la info al padre

    const onSubmit = ( evento ) => {
        evento.preventDefault();
              
        if( inputValue.trim().length <= 1 ) return; 

        //setCategories( categories  => [ inputValue, ...categories ]);
        setInputValue('');      
        onNewCategory( inputValue.trim() );
        

    }    
    return (
        
        <form onSubmit={ onSubmit }>
            <input    
                type="text"
                placeholder="Buscar gifs"
                value = {inputValue}
                onChange={onInputChange}    
            />

        </form>
  )
};

//los form o fragmentos se usan cuando tengo uno o mas elementos
//que van a ser el nodo root del componente 
//no se puede poner dos elementos hermanos, siempre tienen que tener un padre
