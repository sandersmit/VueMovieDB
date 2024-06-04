<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

//Pinia Store
import { useMovieDataStore } from '../stores/DataMovieStore';

//components
import DetailComp from '../components/DetailComp.vue'

const route = useRoute(); 
const movieDataStore = useMovieDataStore();


//COMPUTED
const computeMovieDetail = computed(function () {
  return movieDataStore.getMovieId
})

onMounted(() => {
  movieDataStore.fetchMovieId(route.params.movieidparam)
})
</script>

<template>
 <ul class="d-flex flex-wrap row" >
  <DetailComp v-for="(value, key)  in computeMovieDetail" 
  :movie-value="value"
  :movie-key="key"
  />
</ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
ul{
  padding:0
}
</style>
