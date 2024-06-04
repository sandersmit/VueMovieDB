<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';

//components
import ResultComp from '../components/ResultComp.vue'

//Pinia Store
import { useMovieDataStore } from '../stores/DataMovieStore';

const movieDataStore = useMovieDataStore();

//COMPUTED
const computeMovies = computed(function () {
  return movieDataStore.getMovieData
})

onMounted(() => {
    movieDataStore.fetchMovies('matrix', true)
})
</script>

<template>
  <h1 class="themecolor">Todays Featured movies</h1>
  <div class="row justify-content-center py-4 ">
  <ResultComp  v-for="(movie, index) in movieDataStore.getMovieData"
  :key="movie.imdbID"
  :initMovieValue="computeMovies"
  :index-prop="index"
  :movie-name-prop="movie.Title"
  :movie-poster-prop="movie.Poster"
  :movie-id-prop="movie.imdbID"
  :max-results-prop="2"/>
    </div>

</template>

<style scoped>

</style>
