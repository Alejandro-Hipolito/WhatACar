import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import "/workspaces/Watacar_v2/src/front/styles/signup.css";
import "../../styles/signup.css"

import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  // const [data, setData] = useState("");
  const [data, setData] = useState({ password: "" });
  const [eye, setEye] = useState(true); // Estado para controlar la visibilidad de la contraseña

  const handleChange = (ev) => {
    setData({ ...data, [ev.target.name]: ev.target.value });
  };

  const handleEye = () => {
    setEye(!eye);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const config = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(process.env.BACKEND_URL + "api/signup", config)
      .then((resp) => resp.json())
      .then((resp) => {
        Swal.fire({
          icon: 'success',
          title: 'Usuario Creado con éxito',
        
        });
        navigate("/login");
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Faltan algunos datos',
        });
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="container col-12 my-5 justify-content-center ">
        <div className="signupbox my-5 ">
          <h2 className="text-center mt-4 pt-3">Únete a WhataCar</h2>

          <form onSubmit={handleSubmit} method="POST">
            <div className="centercontent">
            <div className="row mx-1 justify-content-around text-center mb-4">
              <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 ">
                <div className="input-box">
                  <label className="form-floating" htmlFor="full_name">Nombre y apellidos
                  {""} <i className="input-with-icon2 fa-solid fa-user"></i></label>
                  <div>
                    <input type="text" placeholder="Ramon Gutierrez" name="full_name" onChange={handleChange} />
                  </div>
                </div>
              </div>

            <div className="row  mx-1  justify-content-around text-center mt-4 ">
              <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10  "> 
                <div className="input-box">
                  <label className="form-floating " htmlFor="email">Email <FontAwesomeIcon className="input-with-icon2"icon={faEnvelope} /></label>
                  <div>
                    <input type="email" placeholder="email@example.com" name="email" onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className="row  mx-1  justify-content-around text-center mt-4">
              <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 ">
                <div className="input-box">
                  <label className="form-floating" htmlFor="password"> Contraseña {""} 
                  <i className="input-with-icon2 fa-solid fa-lock"></i>  </label>
                  <div className="input-with-icon">
                    <input
                      type={eye ? "password" : "text"} // Cambiar el tipo de entrada en función del estado de 'eye'
                      placeholder="******"
                      id="password"
                      name="password"
 
                      onChange={handleChange}
                    />
                    <FontAwesomeIcon
                      icon={eye ? faEye : faEyeSlash} // Cambiar el ícono en función del estado de 'eye'
                      className="eye-icon"
                      onClick={handleEye}
                    />
                  </div>
                </div>
              </div>

              
            </div>

            <div className="row mx-1 justify-content-around text-center mb-5">
              <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10 ">
                <div className="labelbox">
                  <label className="form-floating" htmlFor="role">Rol Usuario
                  {""} <i className="input-with-icon2 fa-solid fa-screwdriver-wrench"></i></label>
                  <div>
                    <select id="role" name="role" onChange={handleChange}>
                      <option value="COMMON_USER">Particular</option>
                      <option value="GARAGE">Taller</option>
                    </select>
                  </div>
                </div>
              </div>

              
            </div>
            </div>
            

            

            <h6 className="text-center mt-5">
              <strong>* Todos los campos deben ser rellenados</strong>
            </h6>
            <div className="button  py-5">
              <button disabled={data.password.length < 5} className="btn btn-primary btn1">Registrar Usuario</button>

            </div>
          </form>
        </div>
      </div>
    </>
  );
};
