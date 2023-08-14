import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { NavLink, Link } from "react-router-dom";
import { Profile_navbar } from "../component/profile_navbar";
import { Placeholder_profile } from "./placeholder_profile";
import "/workspaces/Watacar_v2/src/front/styles/profile.css"


export const Profile_garage = () => {
    const {actions, store} = useContext(Context);
    const [showFileInput, setShowFileInput] = useState(false); 


    useEffect(() => {
        const timer = setTimeout(() => {
            actions.getMyGarage();
        }, 1000);
    
        return () => {
            clearTimeout(timer);
        };
    }, []);
    

    const handleDelete = () => {

        const del_config = {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }

        }

        fetch(process.env.BACKEND_URL + 'api/configuration/garage', del_config)
        .then((resp) => resp.json())
        .then((data) => {
            alert('EXITO?')
            console.log(data)})
        .catch(err => console.error(err))
    }




  

  
    return store.garage ? (
        <>
            <Profile_navbar />
            <div className="container mt-3 w-75 box py-4"> 
            <h2  className="ms-4"><strong>Tu Taller</strong></h2>
           
            <div className="container_profile">
                <div className="avatar_container pb-4">
                    {console.log(store.garage.avatar)}
                    <img src={store.garage.avatar !== "" ? store.garage.avatar : "https://neomotor.epe.es/binrepository/990x619/0c62/990d557/none/2594535/UHEL/elegir-taller-confianza-1_285-37667622_20221031082702.jpg"} alt="Avatar" className="avatar_image" />
                    {/* <img src="https://neomotor.epe.es/binrepository/990x619/0c62/990d557/none/2594535/UHEL/elegir-taller-confianza-1_285-37667622_20221031082702.jpg" alt="Avatar" className="avatar_image" /> */}

                 

                </div>
               
                <div className="profile_info">
                    <div className="row row_profile_configuration">
                        <div>
                        <h4 className="col-12 label p-2 input-radius">Nombre del Taller:</h4>
                        </div>
                        <h4 className="col-8 user_data">{store.garage.name}</h4>
                    </div>
                    <div className="row row_profile_configuration">
                        <div>
                        <h4 className="col-12 label p-2 input-radius">Correo del Taller:</h4>
                        </div>
                        <h4 className="col-8 user_data">{store.garage.mail}</h4>
                    </div>
                    <div className="row row_profile_configuration">
                        <div>
                        <h4 className="col-12 label p-2 input-radius">Sitio Web:</h4>
                        </div>
                        <h4 className="col-8 user_data">{store.garage.web}</h4>
                    </div>
                    <div className="row row_profile_configuration">
                        <div>
                        <h4 className="col-12 label p-2 input-radius">CIF:</h4>
                        </div> 
                        <h4 className="col-8 user_data">{store.garage.cif}</h4>
                    </div>
                    <div className="row row_profile_configuration">
                        <div>
                        <h4 className="col-12 label p-2 input-radius">Teléfono :</h4>
                        </div>
                        <h4 className="col-8 user_data">{store.garage.phone}</h4>
                    </div>
                    <div className="row row_profile_configuration " >
                        <div>
                        <h4 className="col-12 label p-2 input-radius" >Dirección:</h4>
                        </div>
                        <h4 className="col-8 user_data">{store.garage.address}</h4>
                    </div>

              
                    

                    <div className="row row_edit_profile justify-content-end d-flex ">
                        <Link to="/configuration/garage" className="edit_profile col-12 label p-2">
                            Editar 
                        </Link>
                        {/* <button onClick={handleDelete} className="btn btn-danger">Eliminar</button> */}
                    </div>
                </div>

                
                </div>

          </div>
        </>
    ): 
  (   
   <div className="container justify-content-center">
    <h3>Cargando</h3>
    </div>
)
}