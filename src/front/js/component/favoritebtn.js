import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const Favoritebtn = ({ vehicle }) => {
  const { store, actions } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSameUser, setIsSameUser] = useState(false);

  useEffect(() => {
    setIsFavorite(
      store.favorites.some((favorite) => favorite.product_id === vehicle.id)
    );
    
    // Verificar si el usuario actual es el mismo que subió el producto
    setIsSameUser(store.user.id === vehicle.user_id);
  }, [store.favorites, store.user.id, vehicle.id, vehicle.user_id]);

  const handleFav = () => {
    if (!isSameUser) {
      if (isFavorite) {
        actions.removeFavorite(store.user.id, vehicle.id);
      } else {
        actions.postFavorite(store.user.id, vehicle.id);
      }
      setIsFavorite(!isFavorite);
    }
  };

  // Verificar si el token existe en el localStorage
  const token = localStorage.getItem("token");
  if (!token || isSameUser) {
    return null; // No renderizar el componente si no hay token o el mismo usuario
  }

  return (
    <button onClick={handleFav} className="favbtn">
      <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
    </button>
  );
};
