import "./figure.css";

const Figure = ({
  data,
  fecha,
  onFechaChange,
  isBotonSiguienteDeshabilitado,
}) => {


  return (
    <figure>
      <h1 className="title">{data.title}</h1>
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
          
          <button
            aria-label="Resize"
            className="resize"
            onClick={() => onFechaChange(1)}
            disabled={isBotonSiguienteDeshabilitado}
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