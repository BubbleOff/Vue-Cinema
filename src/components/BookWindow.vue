<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal__header">
                <div class="info__movie">
                    <div class="info__movie-name">
                        <h2 class="name">{{ movie.title }}</h2>
                        <span class="badge">{{ movie.format }}</span>
                        <span class="ageRating">{{ movie.ageRating }}</span>
                    </div>
                    <div class="info__movie-place">
                        {{ selectedSession.cinemaItem.name }}, Зал 4
                    </div>
                    <div class="info__movie-date">
                        Суббота, 3 января в {{ selectedSession.showtime.time }}
                    </div>
                </div>
                <div class="close-btn" v-on:click="closeModal">
                    <img class="close-icon" src="../../public/images/close-icon.svg" alt="кнопка закрыть">
                </div>
            </div>

            <hr>

            <div class="modal__main">
                <img class="screen-icon" src="../../public/images/screen.svg" alt="иконка экрана">

                <div class="row">
                    <div class="row__num">
                        1
                    </div>
                    <div class="books">
                        <div class="book" data-number="1"></div>
                        <div class="book" data-number="2"></div>
                        <div class="book" data-number="3"></div>
                        <div class="book" data-number="4"></div>
                        <div class="book" data-number="5"></div>
                        <div class="book" data-number="6"></div>
                        <div class="book" data-number="7"></div>
                        <div class="book" data-number="8"></div>
                        <div class="book" data-number="9"></div>
                        <div class="book" data-number="10"></div>
                        <div class="book" data-number="11"></div>
                        <div class="book" data-number="12"></div>
                        <div class="book" data-number="13"></div>
                        <div class="book" data-number="14"></div>
                    </div>
                    <div class="row__num">
                        1
                    </div> 
                </div>

                <div class="row">
                    <div class="row__num">
                        2
                    </div>
                    <div class="books">
                        <div class="book" data-number="1"></div>
                        <div class="book" data-number="2"></div>
                        <div class="book" data-number="3"></div>
                        <div class="book" data-number="4"></div>
                        <div class="book" data-number="5"></div>
                        <div class="book" data-number="6"></div>
                        <div class="book" data-number="7"></div>
                        <div class="book" data-number="8"></div>
                        <div class="book" data-number="9"></div>
                        <div class="book" data-number="10"></div>
                        <div class="book" data-number="11"></div>
                        <div class="book" data-number="12"></div>
                        <div class="book" data-number="13"></div>
                        <div class="book" data-number="14"></div>
                    </div>
                    <div class="row__num">
                        2
                    </div> 
                </div>

                <div class="row">
                    <div class="row__num">
                        3
                    </div>
                    <div class="books">
                        <div class="book" data-number="1"></div>
                        <div class="book" data-number="2"></div>
                        <div class="book" data-number="3"></div>
                        <div class="book" data-number="4"></div>
                        <div class="book" data-number="5"></div>
                        <div class="book" data-number="6"></div>
                        <div class="book" data-number="7"></div>
                        <div class="book" data-number="8"></div>
                        <div class="book" data-number="9"></div>
                        <div class="book" data-number="10"></div>
                        <div class="book" data-number="11"></div>
                        <div class="book" data-number="12"></div>
                        <div class="book" data-number="13"></div>
                        <div class="book" data-number="14"></div>
                    </div>
                    <div class="row__num">
                        3
                    </div> 
                </div>

                <div class="row">
                    <div class="row__num">
                        4
                    </div>
                    <div class="books">
                        <div class="book" data-number="1"></div>
                        <div class="book" data-number="2"></div>
                        <div class="book" data-number="3"></div>
                        <div class="book" data-number="4"></div>
                        <div class="book" data-number="5"></div>
                        <div class="book" data-number="6"></div>
                        <div class="book" data-number="7"></div>
                        <div class="book" data-number="8"></div>
                        <div class="book" data-number="9"></div>
                        <div class="book" data-number="10"></div>
                        <div class="book" data-number="11"></div>
                        <div class="book" data-number="12"></div>
                        <div class="book" data-number="13"></div>
                        <div class="book" data-number="14"></div>
                    </div>
                    <div class="row__num">
                        4
                    </div> 
                </div>

                <div class="row">
                    <div class="row__num">
                        5
                    </div>
                    <div class="books">
                        <div class="book" data-number="1"></div>
                        <div class="book" data-number="2"></div>
                        <div class="book" data-number="3"></div>
                        <div class="book" data-number="4"></div>
                        <div class="book" data-number="5"></div>
                        <div class="book" data-number="6"></div>
                        <div class="book" data-number="7"></div>
                        <div class="book" data-number="8"></div>
                        <div class="book" data-number="9"></div>
                        <div class="book" data-number="10"></div>
                        <div class="book" data-number="11"></div>
                        <div class="book" data-number="12"></div>
                        <div class="book" data-number="13"></div>
                        <div class="book" data-number="14"></div>
                    </div>
                    <div class="row__num">
                        5
                    </div> 
                </div>

                <div class="row">
                    <div class="row__num">
                        6
                    </div>
                    <div class="books">
                        <div class="book" data-number="1"></div>
                        <div class="book" data-number="2"></div>
                        <div class="book" data-number="3"></div>
                        <div class="book" data-number="4"></div>
                        <div class="book" data-number="5"></div>
                        <div class="book" data-number="6"></div>
                        <div class="book" data-number="7"></div>
                        <div class="book" data-number="8"></div>
                        <div class="book" data-number="9"></div>
                        <div class="book" data-number="10"></div>
                        <div class="book" data-number="11"></div>
                        <div class="book" data-number="12"></div>
                        <div class="book" data-number="13"></div>
                        <div class="book" data-number="14"></div>
                    </div>
                    <div class="row__num">
                        6
                    </div> 
                </div>

                <div class="row">
                    <div class="row__num">
                        7
                    </div>
                    <div class="books">
                        <div class="book" data-number="1"></div>
                        <div class="book" data-number="2"></div>
                        <div class="book" data-number="3"></div>
                        <div class="book" data-number="4"></div>
                        <div class="book" data-number="5"></div>
                        <div class="book" data-number="6"></div>
                        <div class="book" data-number="7"></div>
                        <div class="book" data-number="8"></div>
                        <div class="book" data-number="9"></div>
                        <div class="book" data-number="10"></div>
                        <div class="book" data-number="11"></div>
                        <div class="book" data-number="12"></div>
                        <div class="book" data-number="13"></div>
                        <div class="book" data-number="14"></div>
                    </div>
                    <div class="row__num">
                        7
                    </div> 
                </div>

                <div class="row">
                    <div class="row__num">
                        8
                    </div>
                    <div class="books">
                        <div class="book" data-number="1"></div>
                        <div class="book" data-number="2"></div>
                        <div class="book" data-number="3"></div>
                        <div class="book" data-number="4"></div>
                        <div class="book" data-number="5"></div>
                        <div class="book" data-number="6"></div>
                        <div class="book" data-number="7"></div>
                        <div class="book" data-number="8"></div>
                        <div class="book" data-number="9"></div>
                        <div class="book" data-number="10"></div>
                        <div class="book" data-number="11"></div>
                        <div class="book" data-number="12"></div>
                        <div class="book" data-number="13"></div>
                        <div class="book" data-number="14"></div>
                    </div>
                    <div class="row__num">
                        8
                    </div> 
                </div>

                <div class="row row__sofa">
                    <div class="row__num">
                        9
                    </div>
                    <div class="books__sofa">
                        <div class="book__sofa">
                            <div class="book sofa" data-number="1"></div>
                            <div class="book sofa" data-number="2"></div>
                        </div>
                        <div class="book__sofa">
                            <div class="book sofa" data-number="3"></div>
                            <div class="book sofa" data-number="4"></div>
                        </div>
                        <div class="book__sofa">
                            <div class="book sofa" data-number="5"></div>
                            <div class="book sofa" data-number="6"></div>
                        </div>
                        <div class="book__sofa">
                            <div class="book sofa" data-number="7"></div>
                            <div class="book sofa" data-number="8"></div>
                        </div>
                        <div class="book__sofa">
                            <div class="book sofa" data-number="9"></div>
                            <div class="book sofa" data-number="10"></div>
                        </div>
                    </div>
                    <div class="row__num">
                        9
                    </div>
                </div>
            </div>

            <hr>

            <div class="modal__footer">
                <div class="info">
                    <div class="info-seat">
                        <div class="standart-color"></div>
                        <div>Станадартная 310 ₽</div>
                    </div>
                    <div class="info-seat">
                        <div class="sofa-color"></div>
                        <div>Диваны 380 ₽</div>
                    </div>
                    <div class="info-seat">
                        <div class="booked-color"></div>
                        <div>Место занято</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {

    },
    props: {
        movie: {
            type: Object
        },
        selectedSession: {
            type: Object
        }
    },
    beforeUnmount() {
        this.unlockBodyScroll();
    },  
    mounted() {
        this.lockBodyScroll();
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        
        lockBodyScroll() {
            document.body.style.overflow = 'hidden';
        },

        unlockBodyScroll() {
            document.body.style.overflow = '';
        },
    }
}
</script>

<style scoped>
/* MODAL */

.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
}

.modal-content {
    background-color: rgb(221, 221, 221);
    border-radius: 12px;
    max-width: 1000px;
    width: 90%;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    position: relative;
    box-shadow: 
        0 0 20px rgba(218, 165, 32, 0.35),
        0 0 10px rgba(255, 193, 7, 0.25);
}

/* MODAL HEADER */

.modal__header {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    margin-bottom: 10px;
}

.info__movie {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.info__movie-name {
    display: flex;
    align-items: center;
    gap: 12px;
}

.name {
    font-weight: 600;
    color: #2c3e50;
}

.badge {
    padding: 4px 8px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 14px;
    color: white;
    background: linear-gradient(135deg, #ffab00, #ffd740)
}

.ageRating {
    padding: 4px 10px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 14px;
    color: white;
    background-color: #2c3e50;
}

.info__movie-place {
    color: #7f8c8d;
}

.modal__header img {
    width: 30px;
    cursor: pointer;
}

/* MODAL MAIN */

.modal__main {
    display: flex;
    flex-direction: column;
    gap: 18px;  
    margin: 60px 0;
    padding: 0 30px;
}

.screen-icon {
    max-width: 686px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 55px
}

.row {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.row__sofa {
    margin-top: 10px;
}

.row__num {
    font-size: 18px;
    color: #59636b;
}

.books {
    display: flex;
    gap: 18px;
}

.book {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.2s ease;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.books__sofa {
    display: flex;
    gap: 45px;
}

.book__sofa {
    display: flex;
    gap: 14px;
}

.sofa {
    background: linear-gradient(135deg, #ffab00, #facc25)
}

.book::after {
    content: attr(data-number);
    position: absolute;
    font-size: 12px;
    color: white;
    font-weight: bold;
    opacity: 0;
    transition: 0.2s ease;
}

.book:hover {
    transform: scale(1.4);
}

.book:hover::after {
    opacity: 1;
}

/* MODAL FOOTER */

.modal__footer {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
}

.info {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 40px;
}

.info-seat {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: #7f8c8d;
}

.standart-color {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.sofa-color {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ffab00, #facc25)
}

.booked-color {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #59636b;
}

@media (max-width: 992px) {
    .modal-content {
        width: 95%;
        max-height: calc(100vh - 30px);
        padding: 15px;
    }
    
    .modal__header {
        padding: 15px 20px;
        flex-direction: column;
        gap: 15px;
    }
    
    .info__movie-name {
        flex-wrap: wrap;
        gap: 10px;
    }
    
    .modal__main {
        margin: 40px 0;
        padding: 0 20px;
        gap: 15px;
    }
    
    .row {
        width: 85%;
    }
    
    .books {
        gap: 12px;
    }
    
    .book {
        width: 18px;
        height: 18px;
    }
    
    .books__sofa {
        gap: 30px;
    }
    
    .book__sofa {
        gap: 10px;
    }
    
    .screen-icon {
        margin-bottom: 40px;
    }
    
    .row__num {
        font-size: 16px;
    }
    
    .info {
        gap: 25px;
    }
}

/* 768px - планшеты (портретная ориентация) */
@media (max-width: 768px) {
    .modal-content {
        width: 98%;
        max-height: calc(100vh - 20px);
        padding: 10px;
        border-radius: 8px;
    }
    
    .modal__header {
        padding: 12px 15px;
        margin-bottom: 5px;
    }
    
    .info__movie {
        gap: 10px;
    }
    
    .name {
        font-size: 18px;
    }
    
    .badge,
    .ageRating {
        font-size: 12px;
        padding: 3px 6px;
    }
    
    .modal__main {
        margin: 30px 0;
        padding: 0 15px;
        gap: 12px;
    }
    
    .row {
        width: 90%;
    }
    
    .books {
        gap: 8px;
    }
    
    .book {
        width: 16px;
        height: 16px;
    }
    
    .book::after {
        font-size: 10px;
    }
    
    .books__sofa {
        gap: 20px;
    }
    
    .book__sofa {
        gap: 8px;
    }
    
    .screen-icon {
        margin-bottom: 30px;
        max-width: 500px;
    }
    
    .row__num {
        font-size: 14px;
        min-width: 20px;
    }
    
    .info {
        gap: 20px;
        flex-wrap: wrap;
    }
    
    .info-seat {
        font-size: 14px;
    }
}

/* 576px - мобильные устройства */
@media (max-width: 576px) {
    .modal {
        padding: 10px;
        align-items: flex-start;
        padding-top: 20px;
    }
    
    .modal-content {
        width: 100%;
        max-height: calc(100vh - 30px);
        border-radius: 6px;
        padding: 8px;
    }
    
    .modal__header {
        padding: 10px 12px;
        flex-direction: column;
        align-items: flex-start;
    }
    
    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
    }
    
    .modal__header img {
        width: 24px;
    }
    
    .info__movie-name {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
    
    .name {
        font-size: 16px;
        margin-right: 0;
    }
    
    .modal__main {
        margin: 20px 0;
        padding: 0 10px;
        gap: 10px;
    }
    
    .row {
        width: 95%;
    }
    
    .books {
        gap: 6px;
    }
    
    .book {
        width: 14px;
        height: 14px;
    }
    
    .book:hover {
        transform: scale(1.3);
    }
    
    .books__sofa {
        gap: 15px;
    }
    
    .book__sofa {
        gap: 6px;
    }
    
    .sofa {
        width: 14px;
        height: 14px;
    }
    
    .screen-icon {
        margin-bottom: 20px;
        max-width: 350px;
    }
    
    .row__num {
        font-size: 12px;
        min-width: 18px;
    }
    
    .info {
        gap: 15px;
        flex-direction: column;
        align-items: center;
    }
    
    .info-seat {
        font-size: 13px;
    }
    
    .standart-color,
    .sofa-color,
    .booked-color {
        width: 6px;
        height: 6px;
    }
    
    hr {
        margin: 10px 0;
    }
}

/* 480px - маленькие мобильные */
@media (max-width: 480px) {
    .modal__main {
        margin: 15px 0;
        gap: 8px;
    }
    
    .row {
        width: 100%;
    }
    
    .books {
        gap: 4px;
    }
    
    .book {
        width: 12px;
        height: 12px;
    }
    
    .books__sofa {
        gap: 10px;
    }
    
    .book__sofa {
        gap: 4px;
    }
    
    .sofa {
        width: 12px;
        height: 12px;
    }
    
    .screen-icon {
        max-width: 280px;
        margin-bottom: 15px;
    }
    
    .row__num {
        font-size: 11px;
        min-width: 16px;
    }
}
</style>