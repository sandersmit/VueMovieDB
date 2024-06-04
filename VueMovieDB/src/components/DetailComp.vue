<script setup lang="ts">
import { ref } from 'vue'
import { useVoertuigStore } from '../stores/VoertuigStore';


const props = defineProps({
    status: {
        type: Number,
        required: false
    },
    initMovieIdData: {
        type: Object,
        required: false
    },
    movieValue: {

    },
    movieKey: {

    }
}); 
</script>

<template>
    <!-- Looping over object -->
    <li class="col-sm-12  col-lg-7 py-3 title" v-if="movieKey === 'Title'">
        <h1>{{ movieValue }}</h1>
    </li>
    <li class="col-sm-12 col-md-3 py-5 poster" v-else-if="movieKey === 'Poster'"> <img :src="`${movieValue}`"
            alt="description"></li>
    <li class="col-sm-12 py-4" v-else-if="movieKey === 'Plot'"> {{ movieValue }}</li>
    <li v-else class="col-xs-12 col-md-3 py-2">
        <h3 class="themecolor">{{ movieKey }}</h3> : {{ movieValue }}
    </li>
</template>

<style scoped lang="scss">
h1 {
    max-width: 500px;
    color: black
}

ul {
    display: flex;
}

img {
    order: 0
}

li {
    order: 2;
    list-style: none;
    text-align: left;

    &.poster {
        order: 1
    }

    &.title {
        text-align: center;
        align-self: center;
        background-color: white;
        border-radius: 10px;
    }
}
</style>
