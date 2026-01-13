<template>
    <div class="general__card" @click="goToMovieDetail">
        <img class="poster" :src="movie.poster" :alt="movie.title">
        <div class="general__card-info">
            <h2 class="movie__title">{{ movie.title }}</h2>
            <p class="movie__genre">{{ movie.genre.join(', ') }}</p>
            <p :class="movie.ageRating === '18+' ? 'movie__ageRating-red' : 'movie__ageRating'">{{ movie.ageRating }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    methods: {
        // метод, который срабатывает при клике на название/постер фильма и пушит в роутер путь и значение через ?id из массива moviesToday.json (id элемента)
        goToMovieDetail() {
            this.$router.push({
                path: '/movieDetail',
                query: { id: this.movie.id }
            });
        }
    }
}
</script>

<style scoped>
.general__card {
    position: relative;
    padding: 25px 15px;
    border-radius: 15px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.85);
    transition: all 0.4s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.general__card:hover {
    transform: translateY(-10px);
    cursor: pointer;
    box-shadow: 
        0 8px 25px rgba(218, 165, 32, 0.4),
        0 12px 30px rgba(255, 193, 7, 0.3);
}

.poster {
    width: 200px;
    height: 300px;
    border-radius: 10px;
    object-fit: cover;
    margin: 0 auto;
    display: block;
}

.general__card-info {
    margin-top: 15px;
    color: #333;
}

.movie__title {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 8px;
    line-height: 1.3;
    min-height: 46px;
}

.movie__genre {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
    min-height: 20px;
}

.movie__ageRating,
.movie__ageRating-red {
    position: absolute;
    padding: 4px 8px;
    border-radius: 12px;
    top: 15px;
    right: 15px;
    font-size: 13px;
    font-weight: bold;
    color: white;
}

.movie__ageRating {
    background-color: #333;
}

.movie__ageRating-red {
    background-color: red;
}

@media (max-width: 768px) {   
    .movie__title {
        font-size: 16px;
        min-height: 40px;
    }
    
    .movie__genre {
        font-size: 12px;
    }
    
    .movie__ageRating,
    .movie__ageRating-red {
        font-size: 12px;
        padding: 3px 6px;
    } 
}
</style>