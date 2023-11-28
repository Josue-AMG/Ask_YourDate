import {  useState } from "react";
import '../App.css'

const Cuerpo = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Cuando el valor del input cambia, actualiza el estado inputValue
    setInputValue(e.target.value);
  };

  const [data, setData] = useState({
    foto: "https://cdn-icons-png.flaticon.com/512/7835/7835466.png",
    cedula: "---------",
    nombres: "---------",
    apellidos: "---------",
    lugar: "---------",
    fecha: "---------",
    nacionalidad: "---------",
    sexo: "---------",
    sangre: "---------",
    estado: "---------",
    ocupacion: "---------",
    fechaex: "---------",
  });

  /*40222465144*/

  const handleSearch = () => {
    fetch(`http://api.adamix.net/apec/cedula/${inputValue}`)
      .then((response) => response.json())
      .then((dato) => {
        const nada = "";
        if (dato.Cedula === nada) {
            
            setData({
                
                foto: "https://cdn-icons-png.flaticon.com/512/7835/7835466.png",
                cedula: "---------",
                nombres: "---------",
                apellidos: "---------",
                lugar: "---------",
                fecha: "---------",
                nacionalidad: "---------",
                sexo: "---------",
                sangre: "---------",
                estado: "---------",
                ocupacion: "---------",
                fechaex: "---------",
            })
        } else {
            setData({
            foto: dato.foto,
            cedula: dato.Cedula,
            nombres: dato.Nombres,
            apellidos: dato.Apellido1 + " " + dato.Apellido2,
            lugar: dato.LugarNacimiento,
            fecha: dato.FechaNacimiento,
            nacionalidad: dato.LugarNacimiento,
            sexo: dato.IdSexo,
            sangre: "--------",
            estado: dato.IdEstadoCivil,
            ocupacion: "---------",
            fechaex: "-------",
            });
        }
    })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
      });
  };

  return (
    <>
      <div className="container">
        <input className="text"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          style={{
            width: "450px",
            height: "50px",
            backgroundColor: "black",
            border: "black",
            borderRadius: "10px",
          }}
          placeholder="    Write a valid Cedula"
        />
        <button
          onClick={handleSearch}
          style={{ height: "50px", margin: "3px" }}
        >
          Search
        </button>
      </div>
      <br />
      <div className="cuerpo">
        <img
          className="Esc"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_the_Dominican_Republic.svg/1200px-Coat_of_arms_of_the_Dominican_Republic.svg.png"
        />
        <img
          className="jce"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/LOGO_JCE.svg/1200px-LOGO_JCE.svg.png"
        />

        <div className="text1">
          <h3>REPUBLICA DOMINICANA</h3>
          <h4>JUNTA CENTRAL ELECTORAL</h4>
          <h5>CEDULA DE IDENTIDAD Y ELECTORAL</h5>
          <h1>{data.cedula}</h1>
        </div>

        <div className="text2">
          <label>
            LUGAR DE NACIMIENTO: <h3>{data.lugar}</h3>
          </label>
          <br />
          <label>
            FECHA DE NACIMIENTO: <h3>{data.fecha}</h3>
          </label>
          <br />
          <label>
            NACIONALIDAD: <h3>{data.nacionalidad}</h3>
          </label>
          <br />
          <label>
            SEXO: <b>{data.sexo} </b> SANGRE: <b>{data.sangre}</b> ESTADO CIVIL:{" "}
            <b>{data.estado}</b>
          </label>
          <br />
          <label>OCUPACION: {data.ocupacion}</label>
          <br />
          <label>FECHA DE EXPIRACION: {data.fechaex}</label>
        </div>

        <div className="foto">
          <img className="fotoc" src={data.foto} alt="" />
        </div>
        <div className="name">
          <label>
            <h5>{data.nombres}</h5>
          </label>
          <br />
          <label>
            <h5>{data.apellidos}</h5>
          </label>
        </div>
      </div>
    </>
  );
};

export default Cuerpo;
