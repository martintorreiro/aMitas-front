import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export const Cabecera = ({ dataSheet, setBalances, balances }) => {
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
          <li
            className={balances ? "" : "active"}
            onClick={() => setBalances(false)}
          >
            <FontAwesomeIcon icon={solid("rectangle-list")} /> GASTOS
          </li>
          <li
            className={balances ? "active" : ""}
            onClick={() => setBalances(true)}
          >
            <FontAwesomeIcon icon={solid("people-arrows")} /> SALDOS
          </li>
        </ul>
      </div>
    </>
  );
};
