import { defineStore } from "pinia"; 

//TS interfaces
import type { ReactiveMovieIntFace, MovieIdObjectType } from '../types';

//as the name of the file 'FoodStore.js'
export const useMovieDataStore = defineStore("MovieDataStore", {
  //The state is defined as a function returning the initial state
  state: function () {
    return {
      loaderState:true,
      plotbool:false,
      reactiveMovies:{
        Search:[
          {} as ReactiveMovieIntFace
        ]
      },
      reactiveMovieId:[
        {} as MovieIdObjectType
      ]
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
    async fetchMovies(param:string){
      console.log(import.meta.env.VITE_env_message)
      const params = {
        apikey: import.meta.env.VITE_omdb_apikey,
        movietitle: param,
        plot: this.getPlotState
      };
      let url; 
      url = params.plot?`https://www.omdbapi.com/?s=${params.movietitle}&plot=full&apiKey=${params.apikey}`:`https://www.omdbapi.com/?s=${params.movietitle}&apiKey=${params.apikey}`
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
    async fetchMovieId(param:string | string[]){  
      this.reactiveMovieId.length = 0
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
        return (
          this.reactiveMovieId = await fetch(url, options)
          .then(function (response) { 
            return response.json()  
          })
          .catch((error) => {
            //request failed
            console.log("error", error);
          }));
      }
  }
});
