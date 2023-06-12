import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([  ]);

  const onAddCategory = ( newCategory ) => {
      //Condicion para evaluar si la categoria ya existe
      if( categories.includes(newCategory) ) return;      
      // Primera manera de insertar elementos en un array 
      setCategories([ newCategory, ...categories ]);
      // Otra forma de hacerlo, es con una funcion de callback que hace refencia al scope local entonces cat = al array del estado actual
      // setCategories( cat => [..cat, 'Valorant'] );
  };


  return (
    <>
    

        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ value => onAddCategory(value) }
        />
        
        { 
        categories.map( category => (
          <GifGrid
            key={ category } 
            category={ category }
          />
        ))
        }

    </>
  )
}
