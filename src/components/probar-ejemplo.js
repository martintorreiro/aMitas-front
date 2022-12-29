import { useEffect, useState } from "react";
import { getExampleService } from "../service";
import { CargarHoja } from "./cargar-hoja/cargar-hoja";

export const ProbarEjemplo = () => {
  const [example, setExample] = useState("");
  const [error, setError] = useState(false);

  const getExample = async () => {
    try {
      const exampleResponse = await getExampleService();
      setExample(exampleResponse.message);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getExample();
  }, []);

  return (
    <>
      {error && (
        <p>Se a producido un error al cargar la hoja de calculos de prueba</p>
      )}

      {example && <CargarHoja dataSheet={example}></CargarHoja>}
    </>
  );
};
