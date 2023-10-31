import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { CarouselDefault } from "./carouselDefault";
import { CarouselMotos } from "./carouselMotos";
import { CarouselCars } from "./carouselCars";
import { CarouselPrice } from "./carouselPrice";
import { CarouselKm } from "./carouselKm";



export const CarouselVehicles = () => {
    
    defineElement(lottie.loadAnimation);
    const {store, actions} = useContext(Context)
    

    return (
      <div className="container mb-">
          <div className="row pb-4 my-4">
            <Link to={`/view`} className="landing-link">
                  <h2>Asequibles</h2>
            </Link>
            <CarouselPrice />
           </div>
          
           {/* <div className="row pb-4 my-4">
            <Link to={`/view-default`} className="landing-link">
                  <h2>Los más vistosos</h2>
            </Link>
            <CarouselDefault />
            </div> */}


           <div className="row pb-4 my-4">
            <Link to={`/view-motos`} className="landing-link">
                  <h2>Motos</h2>
            </Link>
            <CarouselMotos />
            </div>


            <div className="row pb-4 my-4">
            <Link to={`/view-km`} className="landing-link">
                  <h2>De bajo kilometraje</h2>
            </Link>
            <CarouselKm />
            </div>


            <div className="row pb-4 my-4">
            <Link to={`/view-cars`} className="landing-link">
                  <h2>Coches</h2>
            </Link>
            <CarouselCars />
            </div>





            </div>    
          );

        }