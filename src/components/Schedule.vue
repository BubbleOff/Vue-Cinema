<template>
    <div class="schedule__info">
        <div class="cinema" v-for="(cinemaItem, index) in cinema" :key="cinemaItem.id">
            <div class="cinema__header">
                <div class="cinema__info">
                    <p class="cinema__name">{{ cinemaItem.name }}</p>
                    <p class="cinema__address">{{ cinemaItem.address }}</p>
                    <p class="cinema__phone">{{ cinemaItem.phone }}</p>
                </div>
                <div class="cinema__format">
                    <span class="format-badge">2D</span>
                </div>
            </div>
            
            <div class="cinema__schedules">
                <div class="schedule-item" v-for="showtime in getCinemaShowtimes(index + 1)" :key="showtime.time" @click="selectSession(showtime, cinemaItem)">
                    <p class="schedule-time">{{ showtime.time }}</p>
                    <p class="schedule-price">от {{ showtime.price }} ₽</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cinemas from '../data/cinemas.json';

export default {
    data() {
        return {
            cinema: cinemas
        }
    },
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    methods: {
        getCinemaShowtimes(cinemaId) {
            return this.movie.showtimes.filter(showtime => showtime.cinemaId === cinemaId);
        },

        selectSession(showtime, cinemaItem) {
            this.$emit('select-session', {
                cinemaItem: cinemaItem,
                showtime: showtime,
                movie: this.movie
            })
        }
    }
}
</script>

<style scoped>
.schedule__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.cinema {
    border-radius: 16px;
    padding: 25px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.cinema__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid rgba(255, 171, 0, 0.2);
}

.cinema__info {
    flex: 1;
}

.cinema__name {
    font-size: 20px;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 8px;
}

.cinema__address {
    font-size: 14px;
    color: #7f8c8d;
    margin-bottom: 6px;
}

.cinema__phone {
    font-size: 14px;
    color: #3498db;
    font-weight: 500;
}

.format-badge {
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, #ffab00, #ffd740);
}

.cinema__schedules {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 15px;
}

.schedule-item {    
    padding: 15px 10px;
    border-radius: 12px;
    text-align: center;
    cursor: pointer;
    color: white;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transition: all 0.3s ease;
}

.schedule-item:hover {
    transform: translateY(-3px);
}

.schedule-time {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
}

.schedule-price {
    font-size: 12px;
}

@media (max-width: 1200px) {
    .cinema__schedules {
        grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    }
}

@media (max-width: 992px) {
    .cinema__format {
        margin-left: 0;
    }

    .cinema__header {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }
}

@media (max-width: 768px) {
    .cinema {
        padding: 20px;
    }

    .cinema__name {
        font-size: 18px;
    }
        
    .cinema__schedules {
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        gap: 10px;
    }

    .schedule-item {
        padding: 12px 8px;
    }

    .schedule-time {
        font-size: 16px;
    }
}

@media (max-width: 576px) {
    .cinema {
        padding: 15px;
    }

    .cinema__schedules {
        grid-template-columns: repeat(3, 1fr);
    }

    .schedule-item {
        padding: 10px 5px;
    }

    .schedule-time {
        font-size: 14px;
    }

    .schedule-price {
        font-size: 10px;
    }
}
</style>