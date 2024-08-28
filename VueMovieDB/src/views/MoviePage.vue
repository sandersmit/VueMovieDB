<script setup lang="ts">
//vue imports
import { ref, computed, onMounted } from 'vue';

//components
import HeaderComp from '../components/HeaderComp.vue'
import ResultComp from '../components/ResultComp.vue'

//TS interfaces
import type { EmitedMovie } from '../types';

//Pinia Store
import { useMovieDataStore } from '../stores/DataMovieStore';
import { storeToRefs } from "pinia";


const movieDataStore = useMovieDataStore();
const showMessage = ref()

//destructure parts of the store
const { plotbool} = storeToRefs(useMovieDataStore());


//METHODS
function emitMovieValue(argument:EmitedMovie) {
    if (argument.searchRef.length >= 3) {
        showMessage.value = false
        movieDataStore.fetchMovies(argument.searchRef)
    } else {
        showMessage.value = true
    }
}

function emitCheckValue(argument:EmitedMovie) {
    plotbool.value = argument.boolRef
}


//COMPUTED
const computeMovies = computed(function () {
  return movieDataStore.getMovieData;
})

onMounted(() => {
  plotbool.value = false
  movieDataStore.fetchMovies('space')
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
