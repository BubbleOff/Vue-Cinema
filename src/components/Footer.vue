<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="item">
                <ul class="item__list">
                    <li class="item-link"><router-link to="/about">О нас</router-link></li>
                    <li class="item-link"><router-link to="#">Вакансии</router-link></li>
                    <li class="item-link"><router-link to="#">Новости</router-link></li>
                    <li class="item-link"><router-link to="#">Рекламодателям</router-link></li>
                </ul>
            </div>
            <div class="item">
                <ul class="item__list">
                    <li class="item-link"><router-link to="#">Правила покупки</router-link></li>
                    <li class="item-link"><router-link to="#">Возврат билетов</router-link></li>
                    <li class="item-link"><router-link to="#">Подарочные карты</router-link></li>
                    <li class="item-link"><router-link to="#">Корпоративным клиентам</router-link></li>
                </ul>
            </div>
            <div class="item">
                <ul class="item__list">
                    <li class="item-link"><router-link to="#">Вопрос ответ</router-link></li>
                    <li class="item-link"><router-link to="/contacts">Контакты</router-link></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>

</script>

<style scoped>
.footer {
    width: 100%;
    height: fit-content;
    background-color: #18153348;
    border-radius: 20px 20px 0 0;
    margin-top: 80px;
    transition: 0.3s;
    box-shadow: 
        0 3px 15px rgba(218, 165, 32, 0.35),
        0 5px 20px rgba(255, 193, 7, 0.25);
}

.footer:hover {
    box-shadow: 
        0 3px 15px rgba(218, 165, 32, 0.5),
        0 5px 20px rgba(255, 193, 7, 0.4);
}

.footer__container {
    display: flex;
    justify-content: center;
    gap: 50px;
    padding: 20px 50px;
}

.item__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
}

.item-link {
    position: relative;
}

.item-link a {
    position: relative;
    text-decoration: none;
    color: white;
    font-size: 18px;
}

.item-link a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(
        90deg,
        transparent 0%,
        #ffab00 20%,
        #ffd740 50%,
        #ffab00 80%,
        transparent 100%
    );
    transition: width 0.3s ease;
}

.item-link a:hover::after {
    width: 100%;
}
</style>