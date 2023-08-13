import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "/workspaces/Watacar_v2/src/front/styles/signup.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const CreateGarage = () => {
  const navigate = useNavigate();
  const {actions, store} = useContext(Context);
  const [data, setData] = useState("");
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [cif, setCif] = useState("")
  const [description, setDescription] = useState("")
  const [web, setWeb] = useState("")
  const [avatar, setAvatar] = useState("")
  const user_id = store.garage.user_id


const handleNameChange = (e) => {
    setName(e.target.value)
    console.log(name)
} 
const handleMailChange = (e) => {
    setMail(e.target.value)
    console.log(mail)
} 
const handlePhoneChange = (e) => {
    setPhone(e.target.value)
    console.log(phone)
} 
const handleAddressChange = (e) => {
    setAddress(e.target.value)
    console.log(address)
} 
const handleWebChange = (e) => {
    setWeb(e.target.value)
    console.log(web)
} 
const handleCifChange = (e) => {
    setCif(e.target.value)
    console.log(cif)
} 
const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
    console.log(description)
} 
 
const handleAvatar = (e) => {
    setAvatar(e.target.value)
    console.log(avatar)
} 

const handleAvatarChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "WhataCar");
  formData.append("api_key", process.env.API_KEY);
  formData.append("timestamp", Math.floor(Date.now() / 1000));

  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/djpzj47gu/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    
    const data = await response.json();

    setAvatar(data.secure_url); 
  } catch (error) {
    console.error("Error uploading avatar:", error);
  }
};


const isGarageUser = store.user.role === 'garage';





  const handleChange = (ev) => {
    setData({ ...data, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      await actions.postGarage(
        name,
        mail,
        phone,
        cif,
        address,
        description,
        web,
        user_id,
        avatar 
      );
        navigate("/profile/garage");
        Swal.fire({
          icon: 'success',
          title: '¡Enhorabuena!',
          text: 'Has registrado tu Taller!',
        
        });
        actions.getMyGarage()

    }
    catch(error) {
     

        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Te faltan datos',
          text: 'Completa los campos necesarios',
     
        });
        navigate("/profile/garage")
      
       
    }
 

    }

    
    return (
        <>
      <div className="flex-container d-flex justify-content-center">
        <div className="container my-5">
          {isGarageUser ? <h2 className="text-center mt-3 mb-5">Únete a nuestra Red de Talleres</h2> : <h2 className="text-center mt-3 mb-5">Usted NO puede crear un taller ya que se registró como usuario normal</h2>}

          <form onSubmit={handleSubmit} method="POST">

           
              <div className="row justify-content-center text-center align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-6 input-box mx-auto">
                  <div ><label htmlFor="name">Nombre del Taller</label></div>
                  
                  <input disabled={!isGarageUser} className="mb-3" type="text" placeholder="Talleres Rodríguez" name="name" onChange={handleNameChange}/>
                </div>
              
              <div className="col-sm-12 col-md-12 col-lg-6 input-box mx-auto">
                  <div><label htmlFor="mail">Correo de contacto</label></div>
                  
                  <input disabled={!isGarageUser} className="mb-3" type="text" placeholder="mitaller@talleres.com" name="mail" onChange={handleMailChange}/>
                </div>
              </div>


            
              
              <div className="row justify-content-center text-center align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-6 input-box mx-auto">
                  <div><label htmlFor="phone">Teléfono del Taller</label></div>
                  
                  <input disabled={!isGarageUser} className="mb-3" type="number" placeholder="777 777 777 " name="phone" onChange={handlePhoneChange} />
                </div>
   
             
              <div className="col-sm-12 col-md-12 col-lg-6 input-box mx-auto">
                  <div><label htmlFor="address">Dirección</label></div>
                  
                  <input disabled={!isGarageUser} className="mb-3" type="text" placeholder="Av. del corral 7" id="address" name="address" onChange={handleAddressChange} />
                </div>
              </div>
         


            
              

              <div className="row justify-content-center text-center align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-6 input-box mx-auto">
                  <div> <label htmlFor="cif">CIF</label></div>
                 
                  <input disabled={!isGarageUser} className="mb-3" type="text" id="idNumber" placeholder="123412312H" name="cif" onChange={handleCifChange
                } />
                </div>
            
              <div className="col-sm-12 col-md-12 col-lg-6 input-box mx-auto">
                  <div>
                  <label htmlFor="web">Sitio Web</label>
                  </div>
                  <input disabled={!isGarageUser} className="mb-3" type="text" id="idNumber" placeholder="123412312H" name="web" onChange={handleWebChange} />
                </div>
              </div>


              <div className="row justify-content-center text-center align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-6 input-box mx-auto">
                  <div><label htmlFor="description">Descripción</label></div>
                  
                  <input disabled={!isGarageUser} type="text" placeholder="Describe tu taller" name="description" onChange={handleDescriptionChange} />
                </div>
              
              <div className="col-sm-12 col-md-12 col-lg-6 input-box mx-auto">
                  <div><label htmlFor="description">Foto del Taller</label></div>

                    <input disabled={!isGarageUser} type="file" onChange={handleAvatarChange} placeholder="Elije la foto..."></input>
                  
                  {/* <input type="text" placeholder="Sube tu foto" name="description" onChange={handleImageIdChange} /> */}
                </div>
              </div>
         


            
            
            <div className="button mt-4">
              <button className="btn btn-primary btn1">Subir Taller</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
