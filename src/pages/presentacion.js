import travel from "../images/dinner.webp"; 
import "./presentacion.css"

export const Presentacion = () => {
  return (
    <section className="home-page">

      <div className="home-page_header">
        <h2>Organiza los gastos con tus compañeros</h2>
        <img src={travel} alt="foto cena"></img>
        <p>Simplifica los gastos de viaje, las actividades y la vida diaria</p>
      </div>

      <section>
        <h2>No podria ser mas simple</h2>
        <ul>
          <li>
            <h3>Simple</h3>

            <p>
              Sólo tienes que rellenar los costos y dejar que la aplicación haga
              las cuentas por ti.
            </p>
          </li>
          <li>
            <h3>Transparente</h3>
            <p>
              No hay nada escondido. Todos los gastos registrados son visibles
              para el grupo y cada uno puede añadir los suyos propios.
            </p>
          </li>
          <li>
            <h3>Colaborativo</h3>
            <p>
              Tricount te ayuda a compartir tu estilo de vida y te acerca a tus
              amigos, familiares y compañeros de piso.
            </p>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Presentacion