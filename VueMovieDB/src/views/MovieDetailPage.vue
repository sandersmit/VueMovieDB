<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

//Pinia Store
import { useMovieDataStore  } from '../stores/DataMovieStore';
import { storeToRefs } from "pinia";

//components
import DetailComp from '../components/DetailComp.vue'

const route = useRoute(); 
const movieDataStore = useMovieDataStore();

//destructure parts of the store
const { loaderState} = storeToRefs(useMovieDataStore());

//COMPUTED
const computeMovieDetail = computed(function () {
  return movieDataStore.getMovieId
})

onMounted(() => {
  movieDataStore.fetchMovieId(route.params.movieidparam)
})
</script>

<template>
  <div v-if="computeMovieDetail.length == 0">
    <div class="loaderBlock">
      <div class="loader">
      </div>
      <h1 class="themecolor">
        Loading..
      </h1>
    </div>
</div>
<div v-else >
  <ul class="d-flex flex-wrap row">
    <DetailComp v-for="(value, key) in computeMovieDetail" 
    :movie-value="value"
    :movie-key="key"
    />
  </ul> 
</div>

</template>

<style scoped>
.loaderBlock{
  height: 300px;
  width: 300px;
  position: relative;
  display: flex;
  justify-content: center;
    align-items: center;
    margin: auto;

  h1{
    font-size: 0.9rem;
    margin-left: -27%;
    margin-top: 0.5rem;
  }
}
.loader{
    border: 10px solid #EAF0F6;
    border-radius: 50%;
    border-top: 10px solid #35eb9a;
    width: 100px;
    height: 100px;
  animation: spinner 2s linear infinite
}
@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
ul{
  padding:0
}
</style>
