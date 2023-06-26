import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";



export const Recover = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [eye, setEye] = useState(true);
    const navigate = useNavigate();
    const handleEmailChange = e => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await actions.bestLogin(email, password);
           navigate("/private");
        } catch (error) {
            console.log(error);
            navigate("/notfound");
        }
    };

    const handleEye = () => {
        if (eye == true) {
            setEye(false)
          
        }
        if (eye == false) {
            setEye(true)
        
        }
        
    };
  
    

    return (
        <div className="container text-center justify-content-center">
            <br />
            <h1>Recuperar contraseña</h1>
            <br />
            <br />
            <div>
                <div className="container wrapper d-flex justify-content-center">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="h4">Introduce el correo de recuperación </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Correo al que enviar tu clave de recuperación"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                      
                    </form>
                </div>
                <br />
                <br />
                <br />
                <br />
                
            </div>
        </div>
    );
}