import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { SelectPanel } from "./selectPanel";

export const Cabecera = ({ dataSheet, setBalances, balances }) => {
  return (
    <>
      <div className="panel-header">
        <div className="panel-title">
          <h3>{dataSheet.title}</h3>
        </div>

        <SelectPanel
          setBalances={setBalances}
          balances={balances}
        ></SelectPanel>
      </div>
    </>
  );
};
