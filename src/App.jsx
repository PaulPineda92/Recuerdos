import { useState } from "react";

import foto1 from "./assets/FOTOS/foto1.jpeg";
import foto2 from "./assets/FOTOS/foto2.jpeg";
import foto3 from "./assets/FOTOS/foto3.jpeg";
import foto4 from "./assets/FOTOS/foto4.jpeg";
const recuerdos = [
  {
    imagen: foto1,
    titulo: "El comienzo de algo bonito ❤️",
    descripcion:
      "Este fue uno de esos momentos que quiero guardar para siempre. Cada vez que veo esta fotografía recuerdo lo bonito que fue compartir ese día contigo.",
    fecha: "7 de agosto de 2026",
    lugar: "CDMX"
  },

  {
    imagen: foto2,
    titulo: "Un día que disfruté contigo 🌸",
    descripcion:
      "Me gusta esta foto porque me recuerda lo bien que la pasamos. No necesitábamos hacer algo extraordinario, simplemente estar juntos hizo especial ese momento.",
    fecha: "8 de agosto de 2026",
    lugar: "CDMX"
  },

  {
    imagen: foto3,
    titulo: "Uno de mis recuerdos favoritos ✨",
    descripcion:
      "Cada vez que veo esta fotografía vuelvo a ese momento y recuerdo nuestras pláticas, nuestras risas y todo lo que vivimos ese día.",
    fecha: "8 de agosto de 2026",
    lugar: "CDMX"
  }
];
function App() {
  const [pagina, setPagina] = useState("inicio");

const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

const [mostrarFormulario, setMostrarFormulario] = useState(false);

const [recuerdosActuales, setRecuerdosActuales] = useState(recuerdos);

  if (pagina === "recuerdos") {
    return (
      <div className="recuerdos-page">

        <nav className="navbar">
          <div className="logo">❤️ Recuerdos</div>

          <button
            className="volver"
            onClick={() => setPagina("inicio")}
          >
            ← Inicio
          </button>
        </nav>

        {fotoSeleccionada && (

  <div
    className="modal"
    onClick={() => setFotoSeleccionada(null)}
  >

    <div
      className="modal-contenido"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="cerrar"
        onClick={() => setFotoSeleccionada(null)}
      >
        ×
      </button>

      <img
        src={fotoSeleccionada.imagen}
        alt={fotoSeleccionada.titulo}
      />

      <div className="modal-info">

        <h2>
          {fotoSeleccionada.titulo}
        </h2>

        <p>
          {fotoSeleccionada.descripcion}
        </p>

        <span>
          📅 {fotoSeleccionada.fecha}
        </span>

        <span>
          📍 {fotoSeleccionada.lugar}
        </span>

      </div>

    </div>

  </div>

)}

        <main className="contenido">

          <section className="encabezado">
            <span>✨ Nuestra historia</span>

            <h1>Momentos que quiero recordar</h1>

            <p>
              Cada fotografía guarda una historia,
              y cada historia tiene un pedacito de nosotros.
            </p>
          </section>

          <section className="seccion">

            <div className="titulo-seccion">
              <h2>📸 Nuestros recuerdos</h2>

              <button
                className="agregar"
                onClick={() => setMostrarFormulario(true)}
>
  + Agregar recuerdo
</button>
            </div>

            <div className="galeria">

  {recuerdosActuales.map((recuerdo, index) => (

    <div
      className="foto-card"
      key={index}
      onClick={() =>
        setFotoSeleccionada(recuerdo)
      }
    >

      <img
        src={recuerdo.imagen}
        alt={recuerdo.titulo}
      />

      <div className="foto-info">

        <h3>
          {recuerdo.titulo}
        </h3>

        <p>
          {recuerdo.descripcion}
        </p>

        <span>
          📅 {recuerdo.fecha}
        </span>

      </div>

    </div>

  ))}

</div>

          </section>
          {mostrarFormulario && (
  <div className="formulario-overlay">

    <div className="formulario">

      <button
        className="cerrar-formulario"
        onClick={() => setMostrarFormulario(false)}
      >
        ×
      </button>

      <h2>❤️ Nuevo recuerdo</h2>

      <p>
        Agrega un nuevo momento a nuestra historia.
      </p>

      <input
        type="text"
        placeholder="Título del recuerdo"
        id="tituloRecuerdo"
      />

      <input
        type="date"
        id="fechaRecuerdo"
      />

      <input
        type="text"
        placeholder="Lugar"
        id="lugarRecuerdo"
      />

      <textarea
        placeholder="Escribe aquí lo que recuerdas de este momento..."
        id="descripcionRecuerdo"
        rows="5"
      />

      <input
        type="file"
        accept="image/*"
        id="imagenRecuerdo"
      />

      <button
        className="guardar-recuerdo"
        onClick={() => {

          const titulo =
            document.getElementById("tituloRecuerdo").value;

          const fecha =
            document.getElementById("fechaRecuerdo").value;

          const lugar =
            document.getElementById("lugarRecuerdo").value;

          const descripcion =
            document.getElementById("descripcionRecuerdo").value;

          const archivo =
            document.getElementById("imagenRecuerdo").files[0];

          if (
            !titulo ||
            !fecha ||
            !lugar ||
            !descripcion ||
            !archivo
          ) {
            alert("Completa todos los campos ❤️");
            return;
          }

          const imagen =
            URL.createObjectURL(archivo);

          const nuevoRecuerdo = {
            imagen,
            titulo,
            descripcion,
            fecha,
            lugar
          };

          setRecuerdosActuales([
            ...recuerdosActuales,
            nuevoRecuerdo
          ]);

          setMostrarFormulario(false);

        }}
      >
        Guardar recuerdo ❤️
      </button>

    </div>

  </div>
)}

          <section className="mensaje-final">
            <div>❤️</div>

            <h2>Y esto apenas comienza...</h2>

            <p>
              Todavía nos quedan muchos recuerdos
              por crear.
            </p>
          </section>

        </main>

      </div>
    );
  }

  return (
    <div className="inicio">

      <div className="corazon">♥</div>

      <h1>Para ti...</h1>

      <p className="frase">
        Cada historia tiene un comienzo,
        <br />
        esta es la nuestra.
      </p>

      <button onClick={() => setPagina("recuerdos")}>
        Abrir nuestros recuerdos ❤️
      </button>

    </div>
  );
}

export default App;