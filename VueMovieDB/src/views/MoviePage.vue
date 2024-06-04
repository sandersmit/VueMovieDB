<script setup lang="ts">
//vue imports
import { ref, computed, onMounted } from 'vue';

//components
import HeaderComp from '../components/HeaderComp.vue'
import ResultComp from '../components/ResultComp.vue'

//Pinia Store
import { useMovieDataStore } from '../stores/DataMovieStore';
import { storeToRefs } from "pinia";


const movieDataStore = useMovieDataStore();
const showMessage = ref()

//destructure parts of the store
const { reactiveMovies, plotbool} = storeToRefs(useMovieDataStore());


//METHODS
function emitMovieValue(argument) {
    console.log("emit argument.searchfieldRef:", argument.searchRef, argument.searchRef.length)
    if (argument.searchRef.length >= 3) {
        console.log("fetch");
        showMessage.value = false
        movieDataStore.fetchMovies(argument.searchRef)
    } else {
        console.log("Dont fetch", reactiveMovies);
        showMessage.value = true
        return
    }
}

function emitCheckValue(argument) {
    plotbool.value = argument.boolRef
    console.log("emit argument:", argument.boolRef, plotbool.value)
}


//COMPUTED
const computeMovies = computed(function () {
  console.log('computeMovies', movieDataStore.getMovieData)
  return movieDataStore.getMovieData;
})

onMounted(() => {
  plotbool.value = false
  movieDataStore.fetchMovies('space')
  console.log("mount fetchMovies")
})
</script>

<template>
    <div class="row">
   <HeaderComp title="Vue MovieDB" @emit-search-value="emitMovieValue" @emit-checked-value="emitCheckValue" :showMessageProp="showMessage" />
    </div>
    <div class="row justify-content-center">
    <ResultComp  v-for="(movie, index) in movieDataStore.getMovieData"
        :key="movie.imdbID"
        :initMovieValue="computeMovies"
        :index-prop="index"
        :movie-name-prop="movie.Title"
        :movie-poster-prop="movie.Poster"
        :movie-id-prop="movie.imdbID"
        :max-results-prop="5"
        />
    </div>
</template>
