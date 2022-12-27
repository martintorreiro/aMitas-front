import { useState } from "react";

export const Step1 = ({ setUserList, setStep }) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [badge, setBadge] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <p>Escoga un titulo, usuario y descripcion</p>
      <form style={{ display: "flex", flexDirection: "column" }}>
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
            value="EUR"
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
      </form>
      <div className="controls">
        <button
          onClick={() => {
            setUserList([`${name}(YO)`]);
            setStep(2);
          }}
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
