import { useEffect, useState } from "react";
import Figure from "./Components/Figure/Figure";
import  logo from "./assets/logo.png";
import axios from "axios";
import "./App.css";

const App = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);
  const [isBotonSiguienteDeshabilitado, setIsBotonSiguienteDeshabilitado] = useState(true);
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "VMHZZhjILx0QSRitb7NsGuz7LVbJC5e9XX64Tlfa";

  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data);
      const isFechaMayorQueActual = new Date(date) >= new Date(today);
      setIsBotonSiguienteDeshabilitado(isFechaMayorQueActual);
    };
    getApod();
  }, [date]);
  
  const handleInput = (ev) => {
    const selectedDate = ev.target.value
    setDate(ev.target.value);
    
  };
  const cambiarFecha = (incremento) => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + incremento);
    const newDate = currentDate.toISOString().slice(0, 10);
    setDate(newDate);
  };


  return (
    <div className="App">
      <h1 className="litle">
        <img src={logo} className="logo" alt="NASA LOGO" />
      </h1>
      <h2>Foto Astronómica del día</h2>
      <input type="date" id="photo-date" onChange={handleInput} />
      {date > today ? (
        <h2>Elija una fecha anterior</h2>
      ) : (
        <Figure data={apod} fecha={date} onFechaChange={cambiarFecha} isBotonSiguienteDeshabilitado={isBotonSiguienteDeshabilitado} />
      )}
      <div className="standard-dialog center">
        <h4 className="dialog-text">
          OPA - 2023 -
          <a href="https://api.nasa.gov/">Nasa</a>
        </h4>
      </div>
    </div>
  );
};

export default App;
