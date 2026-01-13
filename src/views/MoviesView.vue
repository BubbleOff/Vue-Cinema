<template>
    <div class="movies-view">
        <MovieView v-for="movie in moviesView" v-bind:movie="movie"/>
    </div>
</template>

<script>
import moviesTodayData from '../data/moviesToday.json';
import MovieView from '../components/Movie.vue';
export default {
    data() {
        return {
            moviesView: moviesTodayData
        } 
    },
    components: {
        MovieView
    }
}
</script>

<style scoped>
.movies-view {
    width: 100%;
    padding: 25px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.05);
}
</style>