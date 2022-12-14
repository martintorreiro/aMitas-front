import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CargarHoja } from "../components/cargar-hoja/cargar-hoja";
import { getDataSheetService } from "../service";
import "../style-sheets/work-sheet.css";

export const WorkSheet = () => {
  const { datasheet } = useParams();
  const [workSheet, setWorkSheet] = useState("");
  const [error, setError] = useState(false);

  const getDataSheet = async (data) => {
    try {
      const dataResponse = await getDataSheetService(data);
      setWorkSheet(dataResponse.message);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getDataSheet(datasheet);
  }, []);

  return (
    <>
      {error && <p>Se a producido un error al cargar la hoja de calculos</p>}

      {workSheet && <CargarHoja dataSheet={workSheet}></CargarHoja>}
    </>
  );
};
