import React, { useState } from "react";
import "./suscription.css";
import { Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Suscription = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (regEx.test(email)) {
        const numeroCaracteres = email.length
        if (numeroCaracteres % 2 == 0) {
            setMessage("La cantidad de caracteres es un numero par: " + numeroCaracteres);  
        } else {
            setMessage("La cantidad de caracteres es un numero impar: " + numeroCaracteres);
        }
          
    } else if (!regEx.test(email) && email !== "") {
      setMessage("El email ingresado no es valido");
    } else {
      setMessage("Llena el campo");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="container">
      <Typography variant="subtitle2" component="h3">
        NEWSLETTER
      </Typography>
      <Typography variant="h3">SUSCRIBITE</Typography>
      <Typography variant="h6">Y enterate de todas las novedades</Typography>
      <div>
        <input
          id="email"
          className="input"
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={handleOnChange}
        >
        </input>
        <button className="inputButton" onClick={emailValidation}>
          <ArrowRightAltIcon />
        </button>
      </div>
      <Typography variant="p" style={{ color: "#6C1B0A" }} className="message">
        {message}
      </Typography>
    </div>
  );
};

export default Suscription;
