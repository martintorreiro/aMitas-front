import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

export const Cabecera = ({ dataSheet, setBalances, balances }) => {
  return (
    <>
      <div className="panel-header">
        <div className="panel-title">
          <h3>{dataSheet.title}</h3>
        </div>
        <ul className="select-panel">
          <li className={`${!balances && "active"}`}>
            <button onClick={(e) => setBalances(false)}>
              <FontAwesomeIcon icon={regular("rectangle-list")} /> GASTOS
            </button>
          </li>

          <li className={`${balances && "active"}`}>
            <button onClick={(e) => setBalances(true)}>
              <FontAwesomeIcon icon={solid("people-arrows")} /> SALDOS
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
