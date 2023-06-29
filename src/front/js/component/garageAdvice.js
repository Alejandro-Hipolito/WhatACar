import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { ThemeContext } from "../layout";
import "../../styles/index.css";



export const GarageAdvice = () => {
    
    const {store, actions} = useContext(Context)
    const garageImage = "https://a-solis.com/wp-content/uploads/2020/04/taller-mecanico-malaga.jpg"
    
    const navigate = useNavigate()

    return (
    
      <div className="container mt-5 d-flex mx-auto d-flex justify-content-between " >


         <div className="container col-5 mx-4  col-sm-12 col-md-5  container-garage">
         

                    <img src={garageImage} className="card-img garageImageLanding d-none d-sm-block d-sm-none d-md-block" alt="..."/>
                    <h5 className="text-end pt-2 pe-3">Consulta nuestros Talleres</h5>            
                    <p className="text-end pt-2 px-3 textGarageLeft d-flex"> 
                    Tasamos vuestros vehículos como garantía su estado. Las ventas serán más rápidas y las compras serán más seguras así.
                    </p>
                   

                    <button className="btn-plus btn-mas m-2 float-end buttonGarage">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                   
               </div>
         


            <div className="wrapper col-4 mx-4   col-sm-12 col-md-5 justify-content-between container-garage">
           
            <h5 className="text-end pt-2 pe-3">¿Eres un Taller?</h5>            
                    <p className="text-start pt-2 px-3 textGarageRight d-flex"> 
                    Date de alta y ayuda a vendedores y compradores a certificar el estado del vehículo.
                    </p>
                   

                    <button className="btn-plus btn-mas m-2 float-end buttonGarage">
                        <i className="fa-solid fa-plus"></i>
                    </button>
            
            </div>
               

        </div>















                
   
    
    );

}