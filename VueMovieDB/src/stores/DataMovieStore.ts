import { defineStore } from "pinia"; 

//as the name of the file 'FoodStore.js'
export const useMovieDataStore = defineStore("MovieDataStore", {
  //The state is defined as a function returning the initial state
  state: function () {
    return {
      plotbool:false,
      reactiveMovies:{
        Search:['No Data in Store']
      },
      reactiveMovieId:[]
    };
   
  },
  //Getters are synchronous functions used to retrieve data from the state
  getters: {
    getMovieData: function (state) {
      return state.reactiveMovies.Search 
    },
    getMovieId: function (state) {
      return state.reactiveMovieId
    },
    getPlotState: function (state) {
      return state.plotbool
    }
  },
  //Actions are functions that can also be asynchronous which are used to update the state
  //For Mutating items within the store state, use actions
  actions: {
    async fetchMovies(param){
      const params = {
        apikey: import.meta.env.VITE_endpoint1apikey,
        movietitle: param,
        plot: this.getPlotState
      };
      let url;
      url = params.plot?`https://www.omdbapi.com/?s=${params.movietitle}&plot=full&apiKey=81e8eab6`:`https://www.omdbapi.com/?s=${params.movietitle}&apiKey=81e8eab6`
      const options = {
        method: "GET",
      };
      //fetching fetchFoodCategorie
      return (this.reactiveMovies = await fetch(url, options)
        .then(function (response) {
          return response.json();
        })
        .catch((error) => {
          //request failed
          console.log("error", error);
        }));
    },
    async fetchMovieId(param){
        const params = {
          apikey: import.meta.env.VITE_endpoint1apikey,
          movieId: param,
          plot: this.getPlotState
        };
        let url;
        url = params.plot?`https://www.omdbapi.com/?i=${params.movieId}&plot=full&apiKey=81e8eab6`:`https://www.omdbapi.com/?i=${params.movieId}&apiKey=81e8eab6`
        const options = {
          method: "GET",
        };
        //fetching fetchFoodCategorie
        return (this.reactiveMovieId = await fetch(url, options)
          .then(function (response) {
            return response.json();
          })
          .catch((error) => {
            //request failed
            console.log("error", error);
          }));
      }
  }
});
