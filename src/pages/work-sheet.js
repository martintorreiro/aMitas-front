import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Panel } from "../components/panel/panel";
import { getDataSheetService } from "../service";

export const WorkSheet = () => {
  const [workSheet, setWorkSheet] = useState("");
  const [error, setError] = useState(false);
  const { datasheet } = useParams();

  const getDataSheet = async (data) => {
    try {
      const dataResponse = await getDataSheetService(data);
      setWorkSheet(dataResponse.message);
      setError(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getDataSheet(datasheet);
  }, [datasheet]);

  return (
    <>
      {error && <p>Se a producido un error al cargar la hoja de calculos</p>}
      {workSheet && <Panel dataSheet={workSheet}></Panel>}
    </>
  );
};

export default WorkSheet;
