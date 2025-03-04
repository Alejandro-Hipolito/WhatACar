import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { useNavigate } from "react-router-dom";
import { GripDefault } from "../component/gripDefault";
import { Filters } from "../component/filters";
import { SearchResults } from "../component/searchResults";

export const HomeGripDefault = () => {
  const { store, actions } = useContext(Context);
  const [searchText, setSearchText] = useState(""); 
  const [isFilter, setIsFilter]  = useState(false)
  const [dataFilter, setDataFilter] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      actions.getFavorites(); 
  
    }
  
  }, [])
  
  defineElement(lottie.loadAnimation);

  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    navigate("/login");
  };

  const displaySearchButton = () => {
    if (searchText !== "") {
      return (
        <button className="btn btn-outline" type="submit">
          <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
          <lord-icon
            src="https://cdn.lordicon.com/msoeawqm.json"
            trigger="hover"
            colors="primary:#3080e8,secondary:#08a88a"
            style={{ width: "30px", height: "30px" }}
            onClick={handleSearch}
          ></lord-icon>
        </button>
      );
    }
  };
  
  return (
    <div className="text-center ">
      <div className="customDiv container pt-5 flipInX">
      <h2 className="flipInX tittle ">Vende tu Coche o Moto y desmelénate</h2>
      </div>
      <div className="container d-flex justify-content-center mt-3">
        <form className="d-flex search-form" role="search">
          <div className="search-wrapper">
            <input
              className="form-control me-2 search-input"
              type="search"
              placeholder="Busca tu moto o coche"
              aria-label="Search"
              value={searchText}
              onChange={handleSearchChange}
              />
            {displaySearchButton()}
          </div>
        </form>
      </div>
          <div className="my-3">
          
             <Filters setIsFilter={setIsFilter} setDataFilter={setDataFilter}/>

          </div>
          {
            !isFilter ? <>
              <GripDefault />
              <br></br>
              <br></br>
            </>
            :
            <SearchResults products={dataFilter}/>
          }
    </div>
  );
};
