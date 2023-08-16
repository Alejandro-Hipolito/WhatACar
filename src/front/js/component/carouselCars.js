import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ThemeContext } from "../layout";
import { useNavigate } from "react-router-dom";
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { Filters } from "./filters";
import "src/front/styles/index.css";
import { Placeholder_carousel } from "../pages/placeholder_carousel";
import { Favoritebtn } from "/workspaces/Watacar_v2/src/front/js/component/favoritebtn.js";



export const CarouselCars = () => {
  defineElement(lottie.loadAnimation);
  const { store, actions } = useContext(Context);
  const carImage = "https://images.coches.com/_vn_/kia/Sportage/c399cf1d98a95d24f8e8715dd0b13fb2.jpg?p=cc_vn_high"
  const navigate = useNavigate();

  useEffect(() => {
    actions.getFilteredCars();
    // actions.getFavorites(); 

  }, []);



  // const selectFavoriteVehicle = async (user_id, product_id) => {
  //   const isProductFavorited = store.favorites.some(
  //     (favorite) => favorite.product_id === product_id
  //   );

  //   if (!isProductFavorited) {
  //     try {
  //       // ... (código anterior)
  //       const updatedFavorites = [...store.favorites, data];
  //       setStore({ favorites: updatedFavorites });

  //       // Actualizar el estado del vehículo seleccionado
  //       setVehicles((prevVehicles) =>
  //         prevVehicles.map((vehicle) =>
  //           vehicle.id === product_id
  //             ? { ...vehicle, isFavorited: true }
  //             : vehicle
  //         )
  //       );
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   }
  // };

  return (
    <div className="d-flex overflow-auto my-5 ">
    {store.filteredCars.length > 0 ? (
      store.filteredCars.map((vehicle, index) => (
        <div className="mx-3 mb-5" key={index}>
          <div className="card card-blur" style={{ width: "18rem" }}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  {/* Update the rendering to show the first image of the vehicle */}
                  {vehicle.images.length > 0 ? (
                    <img src={vehicle.images[0].image} className="card-img-top imgCarousel" alt="..." />
                  ) : (
                    <img src={carImage} className="card-img-top imgCarousel" alt="..." />
                  )}
                </div>
                <div className="flip-card-back">
                    <Link to={`product/${vehicle.id}`}  style={{ color: 'white', textDecoration: 'none' }} className="link-hover">
                      <h3 className="pt-2">{vehicle.brand.name}</h3>
                    <p>Matriculación: {vehicle.year}</p>
                    <p>Estado: {vehicle.state}</p>
                    <p>{vehicle.km} km</p>
                    <p>{vehicle.fuel}</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body d-flex justify-content-between">
                <div>
                  <Link to={`/product/${vehicle.id}`} style={{ color: 'black', textDecoration: 'none' }} className="link-hover">
                    <h5 className="card-title justify-content-start d-flex" id="vehicleCardTittle">
                    {vehicle.name.length >= 25 ? vehicle.name.slice(0, 19) + "..." : vehicle.name}
                    </h5>
                  </Link>
                  <h5 className="card-title justify-content-start d-flex">{vehicle.price} €</h5>
                  <p>
                    Vendido por{" "}
                    <span
                      
                      style={{ color: 'black', textDecoration: 'none' }}
                      className="link-hover"
                    >
                      {vehicle.user_full_name}
                    </span>
                  </p>
                </div> 
                <div className="d-flex justify-content-end">
                  <Favoritebtn vehicle={vehicle} />

                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Placeholder_carousel/ >
      )}
    </div>
  );
};
