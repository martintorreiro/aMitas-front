export const Cabecera = ({ dataSheet }) => {
  return (
    <div className="panel-header">
      <h3>{dataSheet.title}</h3>
      <p>{dataSheet.description}</p>
      <p>
        Creador por {dataSheet.creator}, el {dataSheet.dateCreation}
      </p>
    </div>
  );
};
