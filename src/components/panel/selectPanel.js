import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

export const SelectPanel = ({ setBalances, balances }) => {
  return (
    <>
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
    </>
  );
};
