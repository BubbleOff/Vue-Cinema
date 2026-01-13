<template>
    <div class="general__card">
        <div class="general__card-side">
            <div class="general__card-info">
                <h2 class="movie__title" @click="goToMovieDetail">{{ movie.title }}</h2>
                <p class="movie__genre">{{ movie.genre.join(', ') }}</p> 
                <div class="poster-container">
                    <img class="poster" :src="movie.poster" :alt="movie.title" @click="goToMovieDetail">
                    <p :class="movie.ageRating === '18+' ? 'movie__ageRating-red' : 'movie__ageRating'">{{ movie.ageRating }}</p>
                </div>
            </div>
            <!-- Вывод сеансов для каждого фильма -->
            <Schedule v-bind:movie="movie" @select-session="openBookModal"/>
        </div>
    </div>

    <BookWindow v-if="showBookModal" v-bind:selected-session="selectedSession" v-bind:movie="movie" @close="closeBookModal"/>
</template>

<script>
import Schedule from './Schedule.vue';
import BookWindow from './BookWindow.vue';

export default {
    data() {
        return {
            showBookModal: false, // Состояние модального окна
            selectedSession: null
        }
    },
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    components: {
        Schedule,
        BookWindow
    },
    methods: {
        // метод, который срабатывает при клике на название/постер фильма и пушит в роутер путь и значение через ?id из массива moviesToday.json (id элемента)
        goToMovieDetail() {
            this.$router.push({
                path: '/movieDetail',
                query: { id: this.movie.id }
            });
        },

        openBookModal(sessionData) {
            this.showBookModal = true;
            this.selectedSession = sessionData;
        },

        closeBookModal() {
            this.showBookModal = false;
            this.selectedSession = null;
        }
    }
}
</script>

<style scoped>
.general__card {
    width: 100%;
    position: relative;
    border-radius: 20px;
    padding: 30px;
    margin-bottom: 50px;
    background: rgba(255, 255, 255, 0.9);
}

.general__card-side {
    width: 100%;
    display: flex;
    gap: 40px;
}

.poster-container {
    position: relative;
    display: inline-block;
}

.poster {
    display: block;
    width: 280px;
    height: 400px;
    border-radius: 12px;
    object-fit: cover;
    cursor: pointer;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
}

.general__card-info {
    flex: 0 0 300px;
    color: #333;
}

.movie__title {
    font-weight: 700;
    font-size: 28px;
    margin-bottom: 12px;
    cursor: pointer;
    color: #2c3e50;
}

.movie__genre {
    font-size: 16px;
    margin-bottom: 20px;
    color: #7f8c8d;
}

.movie__ageRating,
.movie__ageRating-red {
    position: absolute;
    padding: 8px 12px;
    border-radius: 8px 8px 0 8px;
    font-size: 14px;
    font-weight: bold;
    color: white;
    bottom: 0;
    left: 0;
    margin: 0;
}

.movie__ageRating {
    background: linear-gradient(135deg, #34495e, #2c3e50);
}

.movie__ageRating-red {
    background: linear-gradient(135deg, #e74c3c, #c0392b);
}

@media (max-width: 1200px) {
    .general__card-side {
        gap: 30px;
    }
    
    .poster {
        width: 240px;
        height: 340px;
    }
    
    .general__card-info {
        flex: 0 0 260px;
    }
}

@media (max-width: 992px) {
    .general__card-side {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .general__card-info {
        flex: none;
        width: 100%;
        max-width: 400px;
    }
    
    .poster {
        width: 220px;
        height: 320px;
    }
}

@media (max-width: 768px) {
    .general__card {
        padding: 20px;
        margin-bottom: 20px;
    }
    
    .movie__title {
        font-size: 22px;
    }
    
    .movie__genre {
        font-size: 14px;
    }

    .movie__ageRating,
    .movie__ageRating-red {
        padding: 6px 10px;
        font-size: 12px;
    }
}

@media (max-width: 576px) {
    .general__card {
        padding: 15px;
        border-radius: 15px;
    }
    
    .general__card-side {
        gap: 20px;
    }
    
    .poster {
        width: 200px;
        height: 280px;
    }
    
    .movie__title {
        font-size: 20px;
    }
    
    .movie__ageRating,
    .movie__ageRating-red {
        padding: 4px 8px;
        font-size: 11px;
    }
}
</style>