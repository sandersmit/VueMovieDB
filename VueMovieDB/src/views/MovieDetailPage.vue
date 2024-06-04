<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';
import { useVoertuigStore } from '../stores/VoertuigStore';
import { useRoute } from 'vue-router';
import router from '../router/index';

//Pinia Store
import { useMovieDataStore } from '../stores/DataMovieStore';
import { storeToRefs } from "pinia";

//components
import DetailComp from '../components/DetailComp.vue'

const route = useRoute(); 
const movieDataStore = useMovieDataStore();

//destructure parts of the store
const { plotbool } = storeToRefs(useMovieDataStore());



const props = defineProps({
    status: {
    type: Number,
    required: false
  },
  initMovieValue: {
    type: Array,
    required: false
  }
}); 


//COMPUTED
const computeMovieDetail = computed(function () {
  console.log('computeMovie id ', movieDataStore.getMovieId)
  return movieDataStore.getMovieId
})

onMounted(() => {
  movieDataStore.fetchMovieId(route.params.movieidparam)
  console.log("mount fetchMovieId")
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
