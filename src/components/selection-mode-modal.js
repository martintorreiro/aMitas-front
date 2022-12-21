import { Link } from "react-router-dom";

export const SelectModeModal = ({ isOpen, closeModal }) => {
  return isOpen ? (
    <section className="select-mode-modal">
      <div className="select-mode--container">
        <button onClick={closeModal}>x</button>
        <section className="selection-box" onClick={closeModal}>
          <Link to="/calc">
            <h3>Crear pagina</h3>
            <p>
              Crea una nueva pagina de cuentas de ejemplo en la que trabajar
            </p>
          </Link>
        </section>

        <section className="selection-box" onClick={closeModal}>
          <Link to="/calc">
            <h3>Probar</h3>
            <p>
              Prueba una plantilla de ejemplo en la que podras añadir gastos y
              hacerte una idea de como funciona
            </p>
          </Link>
        </section>
      </div>
    </section>
  ) : (
    <></>
  );
};
