import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useLocation } from "react-router-dom";

export const Cabecera = ({ dataSheet }) => {
  let location = useLocation();

  return (
    <>
      <div className="panel-header">
        <div className="panel-title">
          <h3>{dataSheet.title}</h3>
          <p>
            Creador por {dataSheet.creator}, el {dataSheet.dateCreation}
          </p>
        </div>
        <ul className="select-panel">
          <li>
            <FontAwesomeIcon icon={solid("rectangle-list")} /> GASTOS
          </li>

          <li>
            <FontAwesomeIcon icon={solid("people-arrows")} /> SALDOS
          </li>
        </ul>
      </div>
    </>
  );
};
