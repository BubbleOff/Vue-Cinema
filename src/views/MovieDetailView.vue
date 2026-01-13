<template>
    <div class="movie-detail-container">
        <button @click="$router.back()" class="back-button">← Назад к списку фильмов</button>

        <div v-if="movie" class="movie-detail">
            <div class="movie-header">
                <div class="poster-section">
                    <img :src="movie.poster" :alt="movie.title" class="detail-poster">
                    <div class="age-rating" :class="movie.ageRating === '18+' ? 'rating-red' : ''">
                        {{ movie.ageRating }}
                    </div>
                </div>
                
                <div class="info-section">
                    <h1 class="movie-title">{{ movie.title }}</h1>
                    <h3 class="original-title">{{ movie.originalTitle }} ({{ movie.year }})</h3>
                    
                    <div class="movie-meta">
                        <div class="meta-item">
                            <span class="meta-label">Страна:</span>
                            <span class="meta-value">{{ movie.country }}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Жанр:</span>
                            <span class="meta-value">{{ movie.genre.join(', ') }}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Длительность:</span>
                            <span class="meta-value">{{ movie.duration }} мин.</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Режиссер:</span>
                            <span class="meta-value">{{ movie.director }}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">В ролях:</span>
                            <span class="meta-value">{{ movie.cast.join(', ') }}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Рейтинг:</span>
                            <span class="rating-badge">★ {{ movie.rating }}</span>
                        </div>
                    </div>

                    <div class="badges">
                        <span v-if="movie.isPremiere" class="badge premiere">Премьера</span>
                        <span v-if="movie.isPopular" class="badge popular">Популярное</span>
                    </div>
                </div>
            </div>

            <div class="description-section">
                <h2 class="description-section--title">Описание</h2>
                <p class="description">{{ movie.description }}</p>
            </div>

            <div class="trailer-section" v-if="movie.trailer">
                <h2 class="tralier-section--title">Трейлер</h2>
                <div class="trailer-container">
                    <iframe :src="movie.trailer" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>

            <!-- Сеансы  -->
             <div class="sessions-section">
                <Schedule v-bind:movie="movie" @select-session="openBookModal"/>
             </div>
        </div>

        <!-- Модальное окно бронирования -->
        <BookWindow v-if="showBookModal" v-bind:selected-session="selectedSession" v-bind:movie="movie" @close="closeBookModal"/>
    </div>
</template>

<script>
import moviesTodayData from '../data/moviesToday.json';
import cinemasData from '../data/cinemas.json';
import Schedule from '@/components/Schedule.vue';
import BookWindow from '@/components/BookWindow.vue';

export default {
    data() {
        return {
            movie: null, // изначально фильм не выбран
            cinemas: cinemasData,
            showBookModal: false, // Состояние модального окна
            selectedSession: null
        }
    },
    components: {
        Schedule,
        BookWindow
    },
    mounted() {
        this.loadMovie();
    },
    watch: { // watch следит за любыми изменениями id в URL $route.query.id
        '$route.query.id': {
            handler() { // При любом изменении id запускается handler()
                this.loadMovie(); // handler() вызывает this.loadMovie(), загружая новый фильм
            }
        }
    },
    methods: {
        loadMovie() {
            const movieId = parseInt(this.$route.query.id); // получаем ID из URL строкой и преобразуем строку в число
            
            if (!movieId) {
                this.movie = null;
                return;
            }
            
            // Ищем фильм по ID
            this.movie = moviesTodayData.find(movie => movie.id === movieId); // ищем фильм, у которого id равен полученному id
        },
        
        getCinemaShowtimes(cinemaId) {
            if (!this.movie) return [];
            return this.movie.showtimes.filter(showtime => showtime.cinemaId === cinemaId);
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
.movie-detail-container {
    width: 100%;
    padding: 25px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.05);
}

.back-button {
    background: #ffab00;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 14px;
}

.back-button:hover {
    background: #ff9800;
}

.movie-header {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
    background: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.poster-section {
    position: relative;
    flex: 0 0 300px;
}

.detail-poster {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.age-rating {
    position: absolute;
    bottom: 0;
    left: 0;
    background: #2c3e50;
    color: white;
    padding: 8px 15px;
    border-radius: 0 12px 0 0;
    font-weight: bold;
}

.age-rating.rating-red {
    background: #e74c3c;
}

.info-section {
    flex: 1;
}

.movie-title {
    font-size: 32px;
    color: #2c3e50;
    margin-bottom: 10px;
}

.original-title {
    font-size: 18px;
    color: #7f8c8d;
    margin-bottom: 20px;
    font-weight: normal;
}

.movie-meta {
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
}

.meta-item {
    width: 100%;
    margin-bottom: 8px;
    line-height: 1.8;
    display: flex;
}

.meta-label {
    width: 130px;
    margin-right: 70px;
    font-weight: 600;
    color: #2c3e50;
    min-width: 100px;
}

.meta-value {
    color: #34495e;
}

.rating-badge {
    background: #ffd700;
    color: #333;
    padding: 3px 10px;
    border-radius: 20px;
    font-weight: bold;
}

.badges {
    display: flex;
    gap: 10px;
}

.badge {
    padding: 6px 15px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    color: white;
}

.badge.premiere {
    background: linear-gradient(135deg, #ff4757, #ff3838);
}

.badge.popular {
    background: linear-gradient(135deg, #2ed573, #1dd1a1);
}

.description-section,
.trailer-section,
.sessions-section {
    background: white;
    padding: 30px;
    border-radius: 20px;
    margin-bottom: 30px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.description-section--title {
    margin-bottom: 15px;
}

.description {
    font-size: 18px;
    line-height: 1.8;
    color: #333;
}

.trailer-container {
    width: 100%;
    height: 700px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.tralier-section--title {
    margin-bottom: 15px;
}

.trailer-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

@media (max-width: 992px) {
    .movie-header {
        flex-direction: column;
        gap: 30px;
    }
    
    .poster-section {
        flex: none;
        max-width: 400px;
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .movie-detail-container {
        padding: 15px;
    }
    
    .movie-header,
    .description-section,
    .trailer-section,
    .sessions-section {
        padding: 20px;
    }
    
    .movie-title {
        font-size: 26px;
    }
}

@media (max-width: 576px) {
    .movie-title {
        font-size: 22px;
    }
}
</style>