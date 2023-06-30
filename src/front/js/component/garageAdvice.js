import React, {useContext} from "react";

import { Context } from "../store/appContext";
import { ThemeContext } from "../layout";
import "../../styles/index.css";
import { Link } from "react-router-dom";



export const GarageAdvice = () => {
    
    const {store, actions} = useContext(Context)
    const garageImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFOZ2L1ab7nVYrVxuxVUXMBSokaf-6FWNvug&usqp=CAU"
    


    return (
    
      <div className="container mt-5 my-3 d-md-flex justify-content-between" >


         <div className="container mx-2 mb-4 col-5 container-garage ">
          
                    <img src={garageImage} className="card-img garageImageLanding d-none d-sm-block d-sm-none d-md-block" alt="..."/>
                    
                    
                    <h5 className="text-end text-white mt-4 pt-3 pe-3">Consulta nuestros Talleres</h5>            
                    <p className="text-end text-white pt-2 px-3 textGarageLeft d-flex" style={{"font-size": "larger"}}> 
                    Tasamos vuestros vehículos como garantía su estado. Las ventas serán más rápidas y las compras serán más seguras así.
                    </p>
                   
                    <div className="mt-5 justify-content-end justify-content-bottom">
                    <Link to="/profile"className="btn-plus btn-mas m-2 float-end buttonGarage">
                    <lord-icon
                        src="https://cdn.lordicon.com/mecwbjnp.json"
                        trigger="hover"
                        colors="primary:#b4b4b4,secondary:#ffffff"
                        stroke="80"
                        style={{"width":"250px","height":"250px"}}>
                    </lord-icon>
                    </Link>                        

                    </div>
                   
               </div>
         


            <div className="wrapper flex-wrap mx-2 mb-4 col-5 container-garage">
            <div className="d-flex">
                    <h5 className="text-start text-white pt-3 px-3 mx-3">¿Eres un Taller?</h5>            
                    <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                    <lord-icon
                        className="toolIcon justify-content-end"
                        src="https://cdn.lordicon.com/sbiheqdr.json"
                        trigger="hover"
                        colors="primary:#ffffff,secondary:#3080e8"
                        stroke="90"
                        style={{"width":"250px", "height":"250px"}}>
                    </lord-icon></div>
                    <p className="text-start text-white pt-2 px-3 mx-3 textGarageRight d-flex mt-5" style={{"font-size": "larger"}}> 
                    Date de alta y ayuda a vendedores y compradores a certificar el estado del vehículo.
                    </p>
                   
                    <div className="mt-5 justify-content-end justify-content-bottom">
                    <Link to="profile" className="btn-plus btn-mas m-2 float-end buttonGarage  ">
                    <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                    <lord-icon
                        src="https://cdn.lordicon.com/mecwbjnp.json"
                        trigger="hover"
                        colors="primary:#b4b4b4,secondary:#ffffff"
                        stroke="80"
                        style={{"width":"250px","height":"250px"}}>
                    </lord-icon>
                    </Link>
                    </div>
            </div>
               




        </div>

   
    
    );

}