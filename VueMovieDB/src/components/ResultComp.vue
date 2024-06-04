<script setup lang="ts">
const props = defineProps({
    indexProp: {
        type: Number,
        required: true
    },
    maxResultsProp: {
        type: Number,
        required: true
    }
    ,
    initMovieValue: {
        type: Array,
        required: false
    },
    movieIdProp: {

    },
    movieNameProp: {

    },
    moviePosterProp: {

    }
}); 
</script>

<template>
    <router-link class="col-10 col-sm-4 col-md-3 card m-2 justify-content-center " v-if="props.indexProp < maxResultsProp"
        :to="`/moviedetailpage/${movieIdProp}`">
        <img :src="`${moviePosterProp}`" alt="img description">
        <h5 class="card-title">{{ movieNameProp }}</h5>
    </router-link>
</template>

<style scoped lang="scss">
.card {
    display: flex;
    align-items: flex-end;
    border: solid 1px white
}

a {
    &:hover {
        opacity: 0.9;
    }
}

img {
    width: 100%;
}
</style>
