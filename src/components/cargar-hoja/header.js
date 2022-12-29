export const Cabecera = ({ dataSheet }) => {
  return (
    <div className="panel-header">
      <h3>{dataSheet.titulo}</h3>
      <p>{dataSheet.descripcion}</p>
      <p>
        Creador por {dataSheet.creador}, el {dataSheet.fecha}
      </p>
    </div>
  );
};
