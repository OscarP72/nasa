import "./figure.css";

const Figure = ({ data , fecha, onFechaChange, isBotonSiguienteDeshabilitado }) => {
    const isFechaMayorQueActual = new Date(fecha) > new Date ();
    
  
  return (
    <figure>
      <img src={data.url} alt={data.title} />
      <div className="window">
        <div className="title-bar">
          <button
            aria-label="Close"
            className="close"
            onClick={() => onFechaChange(-1)}
          >
            Anterior
          </button>
          <h1 className="title">{data.litle}</h1>
          <button
            aria-label="Resize"
            className="resize"
            onClick={() => onFechaChange(1)} disabled={isFechaMayorQueActual || isBotonSiguienteDeshabilitado}
          >
            Siguiente
          </button>
        </div>
        <div className="details-bar">
          <span>{data.date}</span>
          <span>{data.copyright}</span>
        </div>
        <div className="window-pane">{data.explanation}</div>
      </div>
    </figure>
  );
};
export default Figure;
