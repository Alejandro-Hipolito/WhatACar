import { Navigate, useNavigate } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			productlist: [],

			brandlist: [],

			
			user: [],
			users: [],
     		token: localStorage.getItem("token") || "",
			products: [],
			motoBrands: [],
			carBrands: [],
			allBrands: [],
			favorites: [],
			reviews: [],
			garages: [],
			garage: [],
			filters: [],
			filterProducts: [],
			status: [],
			filteredMotos: [],
			filteredCars: [],
			filteredPrice: [],
			filteredKm: []
		
		},

		actions: {

			getProduct: (productid) => {
				fetch(process.env.BACKEND_URL + `api/product/${productid}`)
				.then(resp => resp.json())
				.then((data) => {
					console.log(data); 
					setStore({ productlist: [data] });

				})
				.catch(err => console.error(err))
			},



			  

			getBrand: (brandId) => {
				fetch(process.env.BACKEND_URL + `api/brands/${brandId}`)
				.then(resp => resp.json())
				.then(data => {
					setBrand(data.name);
				})
				.catch(err => console.error(err))
			},
			  


			login: async (email, password) => {
				const store = getStore();
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${store.token}`
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};
			
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}api/login`, opts);
					const data = await resp.json();
					localStorage.setItem("token", data.token);
					setStore({ "token": data.token });
					console.log(data);
			
					// Espera 2 segundos y luego recarga la página
					setTimeout(() => {
						window.location.reload();
					}, 100); // Antes estaba a dos
			
					getActions().getFavorites();
					// getActions().deleteToken(() => {
					// 	console.log("Token eliminado");
					//   });
				} catch (error) {
					console.error(error);
				}
			},

			// deleteToken: () => {
			// 	const timer = setTimeout(() => {
			// 		// Eliminar el token del localstorage
			// 		localStorage.removeItem('token');
			// 	  }, 1000 * 60 * 60);
			// },
			

			getUser: () => {
				if(localStorage.getItem("token")){
					const store = getStore();
				fetch(process.env.BACKEND_URL + `api/configuration`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				.then (response => response.json())
				.then ((response) => {
					setStore({user: response.data});
				});
				} else {
					return undefined
				}
				
			},

			getToken: () => {
				const store = getStore()
				if (localStorage.getItem("token")) {
				  return localStorage.getItem("token"); 
				}
				return store.token; 
			  },


			  getAllBrands: () => {

				const store = getStore()

				if(store.allBrands.length != 0){
					fetch(process.env.BACKEND_URL + 'api/all-brands')
				  .then(response => response.json())
				  .then(response => {
					if (Array.isArray(response)) {
					  const brands = response.map(item => ({ ...item }));
					  setStore({ allBrands: brands });
					  console.log(brands);
					} else {
					  console.error('Error: La respuesta no es un array');
					}
				  })
				  .catch(error => {
					console.error('Error al obtener las marcas:', error);
				  });
				}
				
			  },

			  getFilteredProducts: (brand_id, vehicle_type, min_price, max_price, min_year, max_year, min_km, max_km) => {
				fetch(`${process.env.BACKEND_URL}api/search-by/filter?brand_id=${brand_id}&vehicle_type=${vehicle_type}&min_price=${min_price}&max_price=${max_price}&min_year=${min_year}&max_year=${max_year}&min_km=${min_km}&max_km=${max_km}`)
				  .then(response => response.json())
				  .then(data => {
					// Almacenar los productos filtrados en store.filterProducts
					setStore({ filterProducts: data });
					console.log("se han recuperado los datos")
				  })
				  .catch(error => {
					// Manejar errores en la solicitud
					console.error('Error al obtener los productos filtrados:', error);
				  });
			  },
			  

			  getFilteredMotos: () => {

				// const store = getStore()

				// if(store.filteredMotos.length != 0){
					fetch(`${process.env.BACKEND_URL}api/search-by-moto`)
					.then(response => response.json())
					.then(data => {
					  // Almacenar los productos filtrados en store.filterProducts
					  setStore({ filteredMotos: data });
					  console.log("se han recuperado los datos")
					})
					.catch(error => {
					  // Manejar errores en la solicitud
					  console.error('Error al obtener las MOTOS filtrados:', error);
					});
				// }
				
			  },

			  getFilteredCars: () => {

				// const store = getStore()
				// if(store.filteredCars.length != 0){
					fetch(`${process.env.BACKEND_URL}api/search-by-car`)
					.then(response => response.json())
					.then(data => {
					  // Almacenar los productos filtrados en store.filterProducts
					  setStore({ filteredCars: data });
					  console.log("se han recuperado los datos")
					})
					.catch(error => {
					  // Manejar errores en la solicitud
					  console.error('Error al obtener los COCHES filtrados:', error);
					});
				// }
				
			  },


			  getFilteredPrice: () => {

				// const store = getStore()

				// if(store.filteredPrice.length != 0){
					fetch(`${process.env.BACKEND_URL}api/search-by-price`)
					.then(response => response.json())
					.then(data => {
					  // Almacenar los productos filtrados en store.filterProducts
					  setStore({ filteredPrice: data });
					  console.log("se han recuperado los datos")
					})
					.catch(error => {
					  // Manejar errores en la solicitud
					  console.error('Error al obtener los COCHES filtrados:', error);
					});
				// }
				
			  },


			  getFilteredKm: () => {

				// const store = getStore()

				// if(store.filteredKm.length != 0){
					fetch(`${process.env.BACKEND_URL}api/search-by-price`)
					.then(response => response.json())
					.then(data => {
					  // Almacenar los productos filtrados en store.filterProducts
					  setStore({ filteredKm: data });
					  console.log("se han recuperado los datos")
					})
					.catch(error => {
					  // Manejar errores en la solicitud
					  console.error('Error al obtener los vehículos filtrados por KM:', error);
					});
				// }
				
			  },




			  
			  setFilterProducts: (products) => {
				setStore({ filterProducts: products });
			  },
			
			//   login: async (email, password) => {
            //     const store = getStore()
            //     const opts = {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "Application/json",
            //             Authorization: Bearer ${store.token}
            //         },
            //         body: JSON.stringify({
            //             email: email,
            //             password: password
            //         })
            //     }
            //     const resp = await fetch(process.env.BACKEND_URL+"api/login", opts)
            //     const data = await resp.json()
            //     localStorage.setItem("token", data.token)
            //     setStore({"token": data.token})
            //     console.log(data)
            // },
			  
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getProductsOnSale: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/profile/products/ONSALE", {
					method: "GET",
					headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				const data = await response.json ()
					setStore({products: data});
					return data
				}
				catch{
					(error => {
					console.error(error);
				})};
			},

			getProductsPendingBlocked: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/profile/products/PENDING_BLOCKED", {
					method: "GET",
					headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				const data = await response.json ()
					setStore({products: data});
					return data
				}
				catch{
					(error => {
					console.error(error);
				})};
			},

			getProductsBlocked: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/profile/products/BLOCKED", {
					method: "GET",
					headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				const data = await response.json ()
					setStore({products: data});
					return data
				}
				catch{
					(error => {
					console.error(error);
				})};
			},

			getProductsPendingSale: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/profile/products/PENDING_SALE", {
					method: "GET",
					headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				const data = await response.json ()
					setStore({products: data});
					return data
				}
				catch{
					(error => {
					console.error(error);
				})};
			},


			getProductsSold: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/profile/products/SOLD", {
					method: "GET",
					headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				const data = await response.json ()
					setStore({products: data});
					return data
				}
				catch{
					(error => {
					console.error(error);
				})};
			},

			getProductsSoldReviewed: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/profile/products/SOLD_REVIEWED", {
					method: "GET",
					headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				const data = await response.json ()
					setStore({products: data});
					return data
				}
				catch{
					(error => {
					console.error(error);
				})};
			},

			PendingBlockedChanged: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/profile/changed/PENDING_BLOCKED", {
					method: "GET",
					headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				const data = await response.json ()
					setStore({products: data});
					return data
				}
				catch{
					(error => {
					console.error(error);
				})};
			},

			BlockedChanged: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/profile/changed/BLOCKED", {
					method: "GET",
					headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				const data = await response.json ()
					setStore({products: data});
					return data
				}
				catch{
					(error => {
					console.error(error);
				})};
			},

			PendingSaleChanged: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/profile/changed/PENDING_SALE", {
					method: "GET",
					headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				const data = await response.json ()
					setStore({products: data});
					return data
				}
				catch{
					(error => {
					console.error(error);
				})};
			},

			SoldChanged: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/profile/changed/SOLD", {
					method: "GET",
					headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				const data = await response.json ()
					setStore({products: data});
					return data
				}
				catch{
					(error => {
					console.error(error);
				})};
			},

			SoldReviewedChanged: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/profile/changed/SOLD_REVIEWED", {
					method: "GET",
					headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				const data = await response.json ()
					setStore({products: data});
					return data
				}
				catch{
					(error => {
					console.error(error);
				})};
			},

			getGarages: () => {
                fetch(process.env.BACKEND_URL + 'api/garages' , {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
                })
                .then (response => response.json())
                .then ((response) => {
                    setStore({garages: response})
                    console.log(response)
                });
            },

			getMyGarage: () => {
				fetch(process.env.BACKEND_URL + `api/profile/garage`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${localStorage.getItem("token")}`
				}
				})
				.then (response => response.json())
				.then ((response) => {
					setStore({garage: response})
					console.log(response)
				});
			},

			postGarage: async (name, mail, phone, cif, address, description, web, user_id, avatar) => {
				const token = localStorage.getItem("token");
			  
				try {
				  // Realiza una solicitud GET para obtener el taller del usuario
				//   const garageResponse = await fetch(process.env.BACKEND_URL + "api/profile/garage", {
				// 	method: "GET",
				// 	headers: {
				// 	  "Content-Type": "application/json",
				// 	  Authorization: `Bearer ${token}`
				// 	}
				//   });
				//   const garageData = await garageResponse.json();
				//   const myGarage = garageData.garage;
			  
				//   // Comprueba si ya existe un garaje con las mismas propiedades
				//   const isGarage = myGarage.some(garage => (
				// 	garage.name === name ||
				// 	garage.address === address||
				// 	garage.phone === phone
				//   ));
			  
				//   if (isGarage) {
				// 	console.log("El garaje ya existe.");
				// 	const navigate = useNavigate()
				// 	navigate("/create-garage")
				//   } else {
					const requestOptions = {
					  method: "POST",
					  headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`
					  },
					  body: JSON.stringify({
						name: name,
						mail: mail,
						phone: phone,
						cif: cif,
						address: address,
						description: description,
						web: web,
						user_id: user_id,
						avatar: avatar
					  })
					};
			  
					const response = await fetch(`${process.env.BACKEND_URL}api/create-garage`, requestOptions);
					if (response.ok) {
					  const data = await response.json();
					  console.log(data);
					  // Realiza las acciones necesarias después de un registro exitoso
					} else {
					  throw new Error("Error al registrar el garaje");
					}
				  
				} catch (error) {
				  console.error(error);
				  // Realiza las acciones necesarias en caso de error
				}
			  },
			  
			getProducts: () => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + `api/profile/onsale`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				.then (response => response.json())
				.then ((response) => {
					setStore({ products: response.data });
					
				})
			},

			getAllProducts: () => {
				const store = getStore();
				
				if(store.products.length != 0){
					fetch(process.env.BACKEND_URL + `api/products/ONSALE`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							
						}
					})
					.then (response => response.json())
					.then ((response) => {
						setStore({ products: response });
						console.log(response)
					})
				}
				
			},

			getUsers: () => {
				fetch(process.env.BACKEND_URL + "api/users", {
				  method: "GET",
				  headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem("token")}`
				  }
				})
				.then(response => response.json())
				.then(response => {
				  setStore({ users: response.data })
				  console.log(response)
				})
				.catch(error => {
				  console.error("Error:", error);
				});
			  },

			  
			  
			getFavorites: () => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + `api/profile/favorites`, {
				  method: "GET",
				  headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem("token")}`
				  }
				})
				  .then(response => response.json())
				  .then(response => {
					setStore({ favorites: response }); // Cambiar "favorites" por "products"
					console.log(response);
				  });
			},

			postFavorite: async (user_id, product_id) => {
				const token = localStorage.getItem("token");
				const store = getStore();
				
				const isProductFavorited = store.favorites.some((favorite) => favorite.product_id === product_id);
			  
				if (isProductFavorited) {
				  console.log("El producto ya está guardado como favorito.");
				  return;
				}
				
				try {
				  const requestOptions = {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					  Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({ 
					  user_id: user_id,
					  product_id: product_id 
					}),
					};
			  
				  const response = await fetch(`${process.env.BACKEND_URL}api/profile/favorites`, requestOptions);
				  if (response.ok) {
					getActions().getFavorites()
					// const data = await response.json();
					// console.log(data);
					// const updatedFavorites = [...store.favorites, data];
					// setStore({ favorites: updatedFavorites });
					// localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
				  } else {
					throw new Error('Error al añadir Favorito');
				  }
				} catch (error) {
				  console.error("Error:", error);
				}
			},
			  
			putFavorite: (product_id) => {
				const token = localStorage.getItem("token");
				const requestOptions = {
				  method: "PUT",
				  headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`
				  }
				};
			  
				fetch(process.env.BACKEND_URL + `api/profile/favorites/${product_id}`, requestOptions)
				  .then(response => response.json())
				  .then(data => {
					const updatedFavorites = [...store.favorites, data]
					setStore({ favorites: updatedFavorites })
					console.log(data);
				  })
				  .catch(error => {
					console.error("Error:", error);
				  });
			},

			removeFavorite: async (user_id, product_id) => {
				const store = getStore();

				const token = localStorage.getItem("token");
				const requestOptions = {
				  method: "PUT",
				  headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				  },
				};
			  
				try {
				  const response = await fetch(
					`${process.env.BACKEND_URL}api/profile/favorites/${product_id}`,
					requestOptions
				  );
				  if (response.ok) {
					const updatedFavorites = store.favorites.filter(
					  (favorite) => favorite.product_id !== product_id
					);
					setStore({ favorites: updatedFavorites });
					localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
					console.log("Favorite removed successfully");
				  } else {
					throw new Error("Error removing favorite");
				  }
				} catch (error) {
				  console.error("Error:", error);
				}
			  },
			  

			getReviews: () => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + `api/profile/reviews`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				.then (response => response.json())
				.then ((response) => {
					setStore({ reviews: response});
					console.log(response)
				})
			},

			getFilters: () => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + `api/search-by/<filter>`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						
					}
				})
				.then (response => response.json())
				.then ((response) => {
					setStore({ filters: response });
					console.log(response)
				})
			},
		}
	}
};

export default getState;


