import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, setRecetas] = useState([]);
  const [receta, setReceta] = useState({
    ingrediente: "",
    categoria: "",
  });
  const [consultar, setConsultar] = useState(false);
  const { nombre, categoria } = receta;
  useEffect(() => {
    if (consultar === true) {
      const obtenerReceta = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const result = await axios.get(url);
        setRecetas(result.data.drinks);
      }
      obtenerReceta();
    }
  }, [receta]);
  return (
    <RecetasContext.Provider
      value={{
        setConsultar:setConsultar,
        setReceta: setReceta
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
