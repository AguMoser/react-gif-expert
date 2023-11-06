
//hay que crear archivos por cada componente 
//para inicializarlo como un arreglo 
//No se deben poner condicion a los hooks (true-false) porque pierde 
//la referencia con que state esta trabajando
//Se puede tener tantos state como se necesite 
///prop key {tiene que ser un valor unico }, almaceno la categoria ahi
//la cantidad de states se relaciona con las variables con las que voy
//a trabajar. 
//setCategories( categories.concat('Pokemon')

//-----------------------------------------------------------------------//

import { useState } from 'react';
import { AddCategory, GifGrid } from './Components';


//componente padre
export const GifExpertApp = () => {

 const [ categories, setCategories ] = useState(['Nemo']);
 
 const onAddCategory = (onNewCategory) => {
   //categories.push(onNewCategory); NO USAR PUSH 
   
   if ( categories.includes(onNewCategory) ) return; 
   
   setCategories([onNewCategory,...categories ]);
   //console.log(onNewCategory);

   }

 return (
    <> 
       
       <h1>GifExpertApp</h1>
      
       <AddCategory 

         onNewCategory = { onAddCategory }         
       
       />    
       
       
         {
            categories.map( (category) => (
               <GifGrid 
               key = {category} 
               category={category} />
               ))

         }       

       
         
          
    </>
  )
}

// no usar indice con las llavas en react
//prop key {tiene que ser un valor unico }, almaceno la categoria ahi
//prefijos ON indican que se esta emitiendo algo (es algo muy comun en los eventos)
//<li key={ category }> {category} </li>