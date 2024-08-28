// //import router - createRouter and history.. from 'vue-router' npm dependancy
import { createRouter } from 'vue-router';
import { createWebHashHistory } from 'vue-router';

// //import all pages
import MoviePage from '../views/MoviePage.vue';
import MovieDetailPage from '../views/MovieDetailPage.vue';
import MovieFeaturePage from '../views/MovieFeaturePage.vue';

//setting a constant for the imported 'vue-router' call it : router
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path:"/",
            props: true,
            component: MoviePage,
        },
        {
            path:"/featurepage",
            props: true,
            component: MovieFeaturePage
        },
        {
            path:"/moviedetailpage/:movieidparam",
            props: true,
            component: MovieDetailPage
        }
    ],                                                                          
});

export default router;
