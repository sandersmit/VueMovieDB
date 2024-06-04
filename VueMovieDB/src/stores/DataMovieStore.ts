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
      console.log('getMovieData:',state.reactiveMovies.Search.length)
      return state.reactiveMovies.Search 
    },
    getMovieId: function (state) {
      console.log('getMovieId:',state.reactiveMovieId)
      return state.reactiveMovieId
    },
    getPlotState: function (state) {
      console.log('state.getPlotBool:',state.plotbool)
      return state.plotbool
    }
  },
  //Actions are functions that can also be asynchronous which are used to update the state
  //For Mutating items within the store state, use actions
  actions: {
    async fetchMovies(param){
    console.log(param, this.getPlotState)
      const params = {
        apikey: import.meta.env.VITE_endpoint1apikey,
        movietitle: param,
        plot: this.getPlotState
      };
      let url;
      url = params.plot?`https://www.omdbapi.com/?s=${params.movietitle}&plot=full&apiKey=81e8eab6`:`https://www.omdbapi.com/?s=${params.movietitle}&apiKey=81e8eab6`
      //const url = `https://www.omdbapi.com/?s=${params.movietitle}&plot=${params.plot}&apiKey=81e8eab6`;
      console.log(url,params.plot)
      const options = {
        method: "GET",
      };
      //fetching fetchFoodCategorie
      return (this.reactiveMovies = await fetch(url, options)
        .then(function (response) {
         // console.log('api response: ',response.ok)
          return response.json();
        })
        .catch((error) => {
          //request failed
          console.log("error", error);
        }));
    },
    async fetchMovieId(param){
      console.log('fetchMovieId',param, this.getPlotState)
        const params = {
          apikey: import.meta.env.VITE_endpoint1apikey,
          movieId: param,
          plot: this.getPlotState
        };
        let url;
        url = params.plot?`https://www.omdbapi.com/?i=${params.movieId}&plot=full&apiKey=81e8eab6`:`https://www.omdbapi.com/?i=${params.movieId}&apiKey=81e8eab6`
       
        //const url = `https://www.omdbapi.com/?i=${params.movieId}&plot=full&apiKey=81e8eab6`;
        const options = {
          method: "GET",
        };
        //fetching fetchFoodCategorie
        return (this.reactiveMovieId = await fetch(url, options)
          .then(function (response) {
           // console.log('api response: ',response.ok)
            return response.json();
          })
          .catch((error) => {
            //request failed
            console.log("error", error);
          }));
      }
  }
});
