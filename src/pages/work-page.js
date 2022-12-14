import { Link } from "react-router-dom";
import { Selection } from "../components/work-page-selection";

export const WorkPage = () => {
  return (
    <section>
      <div className="wp--selection-container">
        <Selection
          title="Crear pagina"
          msg="Crea una nueva pagina de cuentas de ejemplo en la que trabajar"
        ></Selection>
        <Link to="/prueba">
          <Selection
            title="Probar"
            msg="Prueba una plantilla de ejemplo en la que podras añadir gastos y hacerte una idea de como funciona"
          ></Selection>
        </Link>
      </div>
    </section>
  );
};
