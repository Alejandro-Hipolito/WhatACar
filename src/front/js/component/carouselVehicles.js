import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ThemeContext } from "../layout";



export const CarouselVehicles = () => {
    
    const {store, actions} = useContext(Context)
    const carImage = "https://images.coches.com/_vn_/kia/Sportage/c399cf1d98a95d24f8e8715dd0b13fb2.jpg?p=cc_vn_high"
    
    return (
      <div className="container">
          <div className="row pb-4 my-4">
            <h2>Asequibles</h2>
            <hr className="mb-4"></hr>
                  <div className="d-flex overflow-auto">
            
                <div className="col-12 col-md-4">
                  <div className="card" style={{width: "18rem"}}>
                    <img src={carImage} className="card-img-top" alt="..."/>

                    <div className="card-body d-flex justify-content-between">
                      <div>
                        <h5 className="card-title justify-content-start d-flex" id="vehicleCardTittle">Coche fantástico</h5>
                        <h5 className="card-title justify-content-start d-flex">20.000€</h5>
                      </div>

                      <div className="d-flex justify-content-end">                
                      <button className="btn btn-warning">
                          <i className="fa-solid fa-heart"></i>

                          </button>
                      </div>
                    </div>

                  </div>
                </div>

        
            </div>
            </div>
          </div>
    
          );

        }