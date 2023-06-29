import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ThemeContext } from "../layout";
import "../../styles/index.css";



export const GarageAdvice = () => {
    
    const {store, actions} = useContext(Context)
    const garageImage = "https://a-solis.com/wp-content/uploads/2020/04/taller-mecanico-malaga.jpg"
    


    return (
      <div className="container">
         <div className="wrapper row">
            <div className="col-6 d-flex">
                <div className="col-2">
                <img src={garageImage} className="card-img" alt="..."/>

                </div>
                <div>
                    <h5>Consulta nuestros talleres</h5>
                    <div className="d-flex">
                        <p>Tasamos vuestros vehículos como garantía su estado. Las ventas serán más rápidas y las compras serán más seguras así.</p>
                            <button className="nav-link btn-plus mb-2 me-3">
                              <i className="fa-solid fa-plus"></i>
                            </button>

                    </div>
                    
                </div>



            </div>



            <div className="col-6 d-flex">
                <div className="wrapper-row">
                    <div >
                        <h5>¿Eres un taller?</h5>
                        </div>
                    <div className="d-flex">
                        <p>Date de alta y ayuda a vendedores y compradores a certificar el estado del vehículo.</p>
                        <button className="nav-link btn-plus mb-2 me-3">
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>


                
                    </div>
                     <i class="fa-solid fa-wrench" style={{"color": "#2490d7"}}></i>
                    </div>




            </div>















        </div>           
   
    
    );

}