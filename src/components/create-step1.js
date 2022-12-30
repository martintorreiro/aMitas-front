import { useState } from "react";

export const Step1 = ({ setDataSheet, dataSheet, setStep }) => {
  const [title, setTitle] = useState(dataSheet.titulo);
  const [name, setName] = useState(dataSheet.creador);
  const [badge, setBadge] = useState(dataSheet.moneda);
  const [description, setDescription] = useState(dataSheet.descripcion);

  const handlesubmit = (e) => {
    e.preventDefault();

    setDataSheet({
      titulo: title,
      descripcion: description,
      moneda: badge,
      creador: name,
      usuarios: [{ nombre: name, conceptos: [] }],
    });

    setStep(2);
  };
  return (
    <>
      <p>Escoga un titulo, usuario y descripcion</p>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handlesubmit}
      >
        <label>
          Titulo:
          <input
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Su nombre:
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Moneda:
          <input
            type="text"
            value={badge}
            onChange={(e) => setBadge(e.target.value)}
          />
        </label>
        <label>
          Descripcion:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <div className="controls">
          <button>Siguiente</button>
        </div>
      </form>
    </>
  );
};
