<template>
    <div class="slidernew-container">
        <div class="slidernew">
            <div class="slidernew__track" :style="trackStyle">
                <div class="slidernew__slide" v-for="movie in filteredMovies" :key="movie.id" >
                    <img class="poster__new" :src="movie.largeposter" :alt="movie.title" @click="goToMovieDetail(movie)">
                </div>
            </div>
            
            <!-- Стрелки внутри слайдера -->
            <button class="slidernew-btn slidernew-btn--prev" @click="prevSlide">    
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/>
                </svg>
            </button>
            <button class="slidernew-btn slidernew-btn--next" @click="nextSlide">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import NewMoviesData from '../../data/moviesToday.json';
export default {
    data() {
        return {
            movies: NewMoviesData,
            currentSlide: 0,
        }  
    },
    computed: {
        filteredMovies() {
            return this.movies.filter(movie => movie.largeposter); // фильтруем фильмы, у которых есть largeposter
        },
        trackStyle() {     
            return {
                transform: `translateX(-${this.currentSlide * 100}%)`
            };
        }
    },
    methods: {
        nextSlide() {
            const totalSlides = this.filteredMovies.length;
            if (totalSlides === 0) return;

            if (this.currentSlide < totalSlides - 1) {
                this.currentSlide++;
            } else {
                this.currentSlide = 0;
            }
        },
        prevSlide() {
            const totalSlides = this.filteredMovies.length;
            if (totalSlides === 0) return;

            if (this.currentSlide > 0) {
                this.currentSlide--;
            } else {
                this.currentSlide = totalSlides - 1;
            }
        },
        // метод, который срабатывает при клике на название/постер фильма и пушит в роутер путь и значение через ?id из массива moviesToday.json (id элемента)
        goToMovieDetail(movie) {
            this.$router.push({
                path: '/movieDetail',
                query: { id: movie.id }
            });
        }
    }
}
</script>        


<style scoped>
.slidernew-container {
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
}

.slidernew {
    position: relative;
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
}

.slidernew__track {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slidernew__slide {
    flex: 0 0 100%;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.poster__new {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
    display: block;
}

.slidernew-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 30px;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slidernew-btn:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: translateY(-50%) scale(1.1);
}

.slidernew-btn--prev {
    left: 20px;
}

.slidernew-btn--next {
    right: 20px;
}

/* Адаптивность - ТОЛЬКО высота и размеры кнопок */
@media (max-width: 1600px) {
    .poster__new {
        height: 500px;
    }
}

@media (max-width: 1400px) {
    .poster__new {
        height: 450px;
    }
}

@media (max-width: 1200px) {
    .poster__new {
        height: 400px;
    }
    
    .slidernew-btn {
        width: 55px;
        height: 55px;
        font-size: 28px;
    }
}

@media (max-width: 992px) {
    .poster__new {
        height: 350px;
        border-radius: 15px;
    }
    
    .slidernew {
        border-radius: 15px;
    }
    
    .slidernew-btn {
        width: 50px;
        height: 50px;
        font-size: 24px;
    }
    
    .slidernew-btn--prev {
        left: 15px;
    }
    
    .slidernew-btn--next {
        right: 15px;
    }
}

@media (max-width: 768px) {
    .slidernew-container {
        padding: 0 10px;
    }
    
    .poster__new {
        height: 300px;
        border-radius: 12px;
    }
    
    .slidernew {
        border-radius: 12px;
    }
    
    .slidernew-btn {
        width: 45px;
        height: 45px;
        font-size: 22px;
    }
    
    .slidernew-btn--prev {
        left: 10px;
    }
    
    .slidernew-btn--next {
        right: 10px;
    }
}

@media (max-width: 576px) {
    .slidernew-container {
        padding: 0 5px;
    }
    
    .poster__new {
        height: 250px;
        border-radius: 10px;
    }
    
    .slidernew {
        border-radius: 10px;
    }
    
    .slidernew-btn {
        width: 40px;
        height: 40px;
        font-size: 20px;
        background: rgba(0, 0, 0, 0.6);
    }
    
    .slidernew-btn--prev {
        left: 8px;
    }
    
    .slidernew-btn--next {
        right: 8px;
    }
}

@media (max-width: 480px) {
    .poster__new {
        height: 220px;
        border-radius: 8px;
    }
    
    .slidernew {
        border-radius: 8px;
    }
    
    .slidernew-btn {
        width: 36px;
        height: 36px;
        font-size: 18px;
    }
}

@media (max-width: 380px) {
    .poster__new {
        height: 200px;
    }
    
    .slidernew-btn {
        width: 32px;
        height: 32px;
        font-size: 16px;
    }
    
    .slidernew-btn--prev {
        left: 5px;
    }
    
    .slidernew-btn--next {
        right: 5px;
    }
}
</style>