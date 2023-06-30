import React, {useContext} from "react";

import { Context } from "../store/appContext";
import { ThemeContext } from "../layout";
import "../../styles/index.css";



export const GarageAdvice = () => {
    
    const {store, actions} = useContext(Context)
    const garageImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFOZ2L1ab7nVYrVxuxVUXMBSokaf-6FWNvug&usqp=CAU"
    


    return (
    
      <div className="container mt-5 d-flex mx-auto d-flex justify-content-between  flex-wrap my-3 flex-xs-column flex-ms-column" >


         <div className="container col-5 mx-2  col-sm-12 col-xs-12 col-md-5 d-md-block d-sm-block d-xs-block container-garage">
          
                    <img src={garageImage} className="card-img garageImageLanding d-none d-sm-block d-sm-none d-md-block" alt="..."/>
                    
                    
                    <h5 className="text-end pt-3 pe-3">Consulta nuestros Talleres</h5>            
                    <p className="text-end pt-2 px-3 textGarageLeft d-flex" style={{"font-size": "larger"}}> 
                    Tasamos vuestros vehículos como garantía su estado. Las ventas serán más rápidas y las compras serán más seguras así.
                    </p>
                   
                    <div className="mt-5 justify-content-end justify-content-bottom">
                    <button className="btn-plus btn-mas m-2 float-end buttonGarage">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                    </div>
                   
               </div>
         


            <div className="wrapper flex-wrap  col-5 mx-2  d-md-block d-sm-block d-xs-block col-sm-12 col-md-5 justify-content-between container-garage">
           
            <h5 className="text-start pt-3 px-3 mx-3">¿Eres un Taller?</h5>            
                    <p className="text-start pt-2 px-3 mx-3 textGarageRight d-flex mt-5" style={{"font-size": "larger"}}> 
                    Date de alta y ayuda a vendedores y compradores a certificar el estado del vehículo.
                    </p>
                   
                    <div className="mt-5 justify-content-end justify-content-bottom">
                    <button className="btn-plus btn-mas m-2 float-end buttonGarage  ">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                    </div>
            
            </div>
               




        </div>

   
    
    );

}