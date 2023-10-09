import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const Favoritebtn = ({ vehicle }) => {
  const { store, actions } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSameUser, setIsSameUser] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
  
    if (token) {
      try {
        setIsFavorite(
          store.favorites && store.favorites.some((favorite) => favorite.product_id === vehicle.id)
        );
  
        if (store.user && store.user.id === vehicle.user_id) {
          setIsSameUser(true);
        }
      } catch (error) {
        console.error("Error:", error);
        // Manejar el error aquí
      }
    }
  
  }, [store.favorites, store.user, vehicle.id, vehicle.user_id]);
  

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

  const token = localStorage.getItem("token");
  
  return (
    <div>
      {token ? (
        isSameUser ? (
          <div>
            
          </div>
        ) : (
          <button onClick={handleFav} className="favbtn" disabled={isSameUser}>
            <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
          </button>
        )
      ) : (
        <p> </p>
      )}
    </div>
  );
};
