<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  showMessageProp:{
   type: Boolean,
   required: true
  }
}); 
const searchfieldRef = ref('')
const boolRefInput = ref()
const boolRefCheck = ref()

const emit = defineEmits(['emit-search-value','emit-checked-value'])

//METHODS
function inputValEmit(){
    const emitObj = {
        boolRef : boolRefInput.value,
        searchRef : searchfieldRef.value
    }
  emit('emit-search-value', emitObj);
}
function checkValEmit(){
    boolRefCheck.value =! boolRefCheck.value
    const emitObj = {
        boolRef : boolRefCheck.value,
    }
  emit('emit-checked-value', emitObj);
}
</script>

<template>
  <h1 class="themecolor">{{ props.title }}</h1>
  
  <nav class="navbar  py-4 ">
    <div class="mx-auto my-2" v-show="showMessageProp">
      Minimal 3 characters search query
    </div>
    <div class="container-fluid ">
      <form class="d-flex mx-auto flex-sm-column flex-md-row flex-lg-row">
      <div class="mb-3 form-check text-start">
        <input  v-model="searchfieldRef" class="form-control" type="search" placeholder="Search" aria-label="Search">
        
       </div>
       
       <div class="mb-3 form-check text-start">
        <button @click.prevent="inputValEmit" class="btn btn-outline-success" type="submit">Search</button>
       </div>
       <div class="mb-3 mx-3 form-check text-start">
        <input v-model="boolRefCheck" @click="checkValEmit" type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">full plot</label>
      </div>     
      </form>
    </div>
  </nav>
</template>

<style scoped>
form{
  flex-direction: column;
}
button{
  margin-right: auto;
}
</style>
