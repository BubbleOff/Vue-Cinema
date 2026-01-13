<template>
    <div class="slider-container">
        <!-- Кнопки переключения -->
        <div class="slider-tabs">
            <button class="slider-tab slider-tab--active" v-on:click="switchToToday">Сегодня</button>
            <button class="slider-tab" v-on:click="switchToSoon">Скоро</button>
        </div>

        <!-- Кнопка назад -->
        <button class="slider-btn slider-btn--prev" v-on:click="prevSlide" :disabled="currentSlide === 0">
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/>
            </svg>
        </button>
        
        <!-- Слайдер -->
        <div class="slider">
            <div class="slider__track" :style="trackStyle">
                <div class="slider__slide" v-for="slide in slides">
                    <MoviesSlider v-for="movie in slide" :movie="movie"/>
                </div>
            </div>
        </div>

        <!-- Кнопка вперед -->
        <button class="slider-btn slider-btn--next" v-on:click="nextSlide" :disabled="currentSlide === totalSlides - 1">
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
            </svg>
        </button>

        <!-- Индикаторы -->
        <div class="slider-indicators">
            <div v-for="index in totalSlides" class="slider-indicator" :class="{ 'slider-indicator--active': currentSlide === index - 1 }"></div>
        </div>
    </div>
</template>

<script>
import moviesTodayData from '../../data/moviesToday.json';
import moviesSoonData from '../../data/moviesSoon.json';
import MoviesSlider from './MoviesInSlider.vue';

export default {
    data() {
        return {
            moviesToday: moviesTodayData,
            moviesSoon: moviesSoonData,
            currentMovies: moviesTodayData,
            currentSlide: 0,
            moviesPerSlide: 4
        }  
    },
    components: {
        MoviesSlider
    },
    computed: {
        // Разбиваем фильмы на слайды по 4 штуки
        slides() {
            const slides = [];
            for (let i = 0; i < this.currentMovies.length; i += this.moviesPerSlide) {
                slides.push(this.currentMovies.slice(i, i + this.moviesPerSlide));
            }
            return slides;
        },
        // Общее количество слайдов
        totalSlides() {
            return Math.ceil(this.currentMovies.length / this.moviesPerSlide);
        },
        // Стиль для перемещения трека слайдера
        trackStyle() {
            return {
                transform: `translateX(-${this.currentSlide * 100}%)`
            };
        }
    },
    methods: {
        // Переключение на фильмы сегодня
        switchToToday() {
            this.currentMovies = this.moviesToday;
            this.currentSlide = 0; // Сбрасываем на первый слайд
            this.updateActiveTab('today');
        },
        // Переключение на фильмы скоро
        switchToSoon() {
            this.currentMovies = this.moviesSoon;
            this.currentSlide = 0; // Сбрасываем на первый слайд
            this.updateActiveTab('soon');
        },
        // Обновление активной кнопки
        updateActiveTab(activeTab) {
            const tabs = document.querySelectorAll('.slider-tab');
            tabs.forEach(tab => tab.classList.remove('slider-tab--active'));
            
            if (activeTab === 'today') {
                tabs[0].classList.add('slider-tab--active');
            } else {
                tabs[1].classList.add('slider-tab--active');
            }
        },
        nextSlide() {
            if (this.currentSlide < this.totalSlides - 1) {
                this.currentSlide++;
            }
        },
        prevSlide() {
            if (this.currentSlide > 0) {
                this.currentSlide--;
            }
        }
    },
    mounted() {
        // Устанавливаем активную кнопку при загрузке
        this.updateActiveTab('today');
    }
}
</script>

<style>
.slider-container {
    position: relative;
    max-width: 1400px;
    margin: 100px auto 50px;
    padding: 0 60px;
}

/* Стили для кнопок переключения */
.slider-tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
}

.slider-tab {
    padding: 12px 40px;
    border: none;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.slider-tab:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

.slider-tab--active {
    background: rgba(255, 171, 0, 0.8);
    box-shadow: 0 5px 15px rgba(255, 171, 0, 0.4);
}

.slider {
    overflow: hidden;
    border-radius: 20px;
}

.slider__track {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slider__slide {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    flex: 0 0 100%;
    min-width: 100%;
    padding: 20px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
}

.slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
}

.slider-btn:hover:not(:disabled) {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(255, 171, 0, 0.4);
    transform: translateY(-50%) scale(1.1);
}

.slider-btn:disabled {
    opacity: 0.3;
}

.slider-btn--prev {
    left: 0;
}

.slider-btn--next {
    right: 0;
}

.slider-indicators {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
}

.slider-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
}

.slider-indicator--active {
    background: rgba(255, 171, 0, 0.8);
    transform: scale(1.2);
}

/* Стили карточек фильмов */

@media (max-width: 1200px) {
    .slider-container {
        max-width: 1000px;
        padding: 0 50px;
    }
    
    .slider__slide {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
    }
}

/* Планшеты (768-1024px) */
@media (max-width: 1024px) {
    .slider-container {
        max-width: 800px;
        padding: 0 40px;
        margin: 80px auto 40px;
    }
    
    .slider__slide {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    
    .slider-btn {
        width: 45px;
        height: 45px;
        font-size: 22px;
    }
}

/* Телефоны горизонтальные (576-768px) */
@media (max-width: 768px) {
    .slider-container {
        max-width: 600px;
        padding: 0 35px;
        margin: 70px auto 35px;
    }
    
    .slider__slide {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .slider-tabs {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    
    .slider-tab {
        width: 200px;
        text-align: center;
        padding: 10px 30px;
        font-size: 17px;
    }
    
    .slider-btn {
        width: 42px;
        height: 42px;
        font-size: 20px;
    }
    
    .slider-indicators {
        margin-top: 25px;
    }
}

/* Телефоны (480-576px) */
@media (max-width: 576px) {
    .slider-container {
        padding: 0 25px;
        margin: 60px auto 30px;
    }
    
    .slider__slide {
        gap: 15px;
        padding: 15px;
    }
    
    .slider-tab {
        width: 180px;
        padding: 9px 25px;
        font-size: 16px;
    }
    
    .slider-btn {
        width: 38px;
        height: 38px;
        font-size: 18px;
    }
    
    .slider-btn--prev {
        left: 10px;
    }
    
    .slider-btn--next {
        right: 10px;
    }
    
    .slider-indicators {
        margin-top: 20px;
    }
    
    .slider-indicator {
        width: 10px;
        height: 10px;
    }
}
</style>