<template>
    <div class="container">
        <div class="cinema" v-for="cinemaItem in cinema">
            <div class="cinema__card">
                <h2 class="cinema__name">{{ cinemaItem.name }}</h2>
                <p class="cinema__town">Екатеринбург</p>
                <p class="cinema__info"><img class="cinema__icon" src="../../public/images/pin2.svg" alt="иконка метки"><span class="cinema__info-inner">Адрес:</span> {{ cinemaItem.address }}</p>
                <p class="cinema__info"><img class="cinema__icon" src="../../public/images/time2.svg" alt="иконка времени"><span class="cinema__info-inner">Режим работы:</span> {{ cinemaItem.schedule }}</p>
                <p class="cinema__info"><img class="cinema__icon" src="../../public/images/phone.svg" alt="иконка телефона"><span class="cinema__info-inner">Телефон:</span> {{ cinemaItem.phone }}</p>  
                <p class="cinema__info"><img class="cinema__icon" src="../../public/images/chair.svg" alt="иконка стула"><span class="cinema__info-inner">Залов:</span> {{ cinemaItem.halls }}</p>
                <router-link to="/movies" class="nav-link"><div class="cinema__detail">Подробнее</div></router-link>
            </div>
            <div>
                <img class="cinema__image" :src="cinemaItem.image" alt=""> 
            </div>
        </div>
    </div>
</template>

<script>
import cinemas from '../data/cinemas.json'

export default {
    data() {
        return {
            cinema: cinemas
        }
    }
}
</script>

<style scoped>
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 25px;
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.05);
    }

    .cinema {
        display: flex;
        justify-content: space-between;
        border-radius: 16px;
        padding: 25px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        background-color: white;
    }

    .cinema__name {
        font-size: 20px;
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 8px;
    }

    .cinema__town {
        font-size: 16px;
        color: #7f8c8d;
        margin-bottom: 24px;
    }

    .cinema__icon {
        width: 16px;
    }

    .cinema__info {  
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 12px;
    }

    .cinema__info-inner {
        font-weight: 700;
        color: #2c3e50;
    }

    .nav-link {
        text-decoration: none;
    }

    .cinema__detail {
        width: 100%;
        padding: 15px 10px;
        border-radius: 12px;
        margin-top: 190px;
        text-align: center;
        cursor: pointer;
        color: white;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        transition: all 0.3s ease;
    }

    .cinema__detail:hover {
        transform: translateY(-3px);
    }

    .cinema__image {
        width: 700px;
        height: 450px;
        border-radius: 15px;
    }



    @media (max-width: 1200px) {
        .cinema__image {
            width: 600px;
            height: 400px;
        }

        .cinema__detail {
            margin-top: 140px;
        }
    }

     @media (max-width: 1100px) {
        .cinema__image {
            width: 550px;
            height: 350px;
        }

        .cinema__info {
            font-size: 14px;
        }

        .cinema__detail {
            margin-top: 50px;
            width: 70%;
        }
     }

    @media (max-width: 992px) {
        .cinema__image {
            width: 500px;
            height: 300px;
        }

        .cinema__info-inner {
            max-width: 67px;
            min-width: 67px;
        }
        
        .cinema__detail {
            margin-top: 15px;
        }
    }

    @media (max-width: 850px) {
        .cinema {
            flex-direction: column;
            gap: 30px;
        }
        
        .cinema__image {
            width: 100%;
            height: 350px;
        }

        .cinema__info-inner {
            max-width: 114px;
            min-width: 114px;
        }
        
        .cinema__detail {
            width: 100%;
            margin-top: 30px;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 576px) {
        .container {
            padding: 15px;
            gap: 30px;
        }
        
        .cinema {
            padding: 20px;
        }
        
        .cinema__image {
            height: 270px;
        }
        
        .cinema__detail {
            padding: 12px 0;
        }
    }

</style>