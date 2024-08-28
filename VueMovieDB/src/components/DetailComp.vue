<script setup lang="ts">

interface Props {
    movieValue:String|Object|Number|Array<object>,
    movieKey:string|number,
}
const props = defineProps<Props>()

</script>

<template>
    <!-- Looping over object -->
    <li class="col-sm-12  col-lg-7 py-3 title" v-if="props.movieKey === 'Title'">
        <h1 class="themecolor">{{ props.movieValue }}</h1>
    </li>
    <li class="col-sm-12 col-md-4 py-5 poster" v-else-if="props.movieKey === 'Poster'"> 
        <img :src="`${props.movieValue}`"
        alt="description">
        </li>
    <li class="col-sm-12 py-4" v-else-if="props.movieKey === 'Plot'"> {{ props.movieValue }}</li>
    <li v-else class="col-xs-12 col-md-3 py-2">
        <h3 class="themecolor">{{ props.movieKey }}</h3> : {{ props.movieValue }}
    </li>
</template>

<style scoped lang="scss">

ul {
    display: flex;
    h1{
        color:white;
        font-size: 6rem;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
}
img {
    order: 0
}

li {
    order: 2;
    list-style: none;
    text-align: left;

    &.poster {
        order: 1;
        text-align:center;
    }

    &.title {
        text-align: center;
        align-self: center;
        border-radius: 10px;
    }
}
</style>
