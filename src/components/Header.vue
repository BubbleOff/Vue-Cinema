<template>
    <header>
        <nav class="menu">
            <ul class="list__menu">
                <li class="list__menu-item logo-image"><router-link to="/"><img src="/images/logo1.svg" alt="logo"></router-link></li>
                <li class="list__menu-item menu-link"><router-link to="/movies">Расписание</router-link></li>
                <li class="list__menu-item menu-link"><router-link to="/cinemas">Кинотеатры</router-link></li>
                <li class="list__menu-item menu-link"><router-link to="/contacts">Контакты</router-link></li>
                <li class="list__menu-item menu-link"><router-link to="/about">О нас</router-link></li>
            </ul> 
        </nav>
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
header {
    width: 100%;
    height: 93px;
    margin-bottom: 80px;
}

.logo-image {
    width: 100px;
    height: 100%;
    margin-right: 350px;
}

.list__menu {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 10px 0 0 0;
    gap: 35px;
    list-style: none;
    border-radius: 0 0 20px 20px;
    background-color: #18153348;
    color: white;
    transition: 0.3s;
    box-shadow: 
        0 -3px 15px rgba(218, 165, 32, 0.35),
        0 -5px 20px rgba(255, 193, 7, 0.25);
}

.list__menu:hover {
    box-shadow: 
        0 -3px 15px rgba(218, 165, 32, 0.5),
        0 -5px 20px rgba(255, 193, 7, 0.4);
}

.list__menu-item {
    position: relative;
}

.list__menu-item a {
    text-decoration: none;
    font-size: 22px;
    color: white;
}

.menu-link a::after {
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

.menu-link a:hover::after {
    width: 100%;
}

@media (max-width: 1200px) {
    .logo-image {
        margin-right: 200px;
    }
    
    .list__menu {
        gap: 25px;
    }
    
    .list__menu-item a {
        font-size: 20px;
    }
}

@media (max-width: 992px) {
    header {
        height: 80px;
        margin-bottom: 60px;
    }
    
    .logo-image {
        margin-right: 100px;
        width: 85px;
    }
    
    .list__menu {
        gap: 20px;
        padding: 8px 15px 0 15px;
        border-radius: 0 0 15px 15px;
    }
    
    .list__menu-item a {
        font-size: 18px;
    }
}

@media (max-width: 768px) {
    header {
        height: 70px;
        margin-bottom: 40px;
    }
    
    .logo-image {
        margin-right: 0;
        width: 75px;
        order: -1; /* лого перемещается в начало */
    }
    
    .list__menu {
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 15px 20px;
        padding: 8px 10px 5px 10px;
        border-radius: 0 0 12px 12px;
    }
    
    .list__menu-item {
        flex: 0 0 auto;
    }
    
    .list__menu-item a {
        font-size: 16px;
        white-space: nowrap;
    }
    
    .menu-link a::after {
        height: 1.5px;
    }
}

@media (max-width: 576px) {
    header {
        height: auto;
        margin-bottom: 30px;
    }
    
    .list__menu {
        flex-direction: column;
        gap: 12px;
        padding: 10px 0;
        border-radius: 0 0 10px 10px;
    }
    
    .logo-image {
        width: 70px;
        margin-bottom: 5px;
    }
    
    .list__menu-item a {
        font-size: 17px;
        padding: 5px 0;
        display: block;
        width: 100%;
        text-align: center;
    }
    
    .menu-link a::after {
        bottom: -2px;
        left: 10%;
        width: 80% !important; /* переопределяем hover эффект */
    }
    
    .menu-link a:hover::after {
        width: 80% !important; /* фиксированная линия на мобилках */
    }
}

@media (max-width: 400px) {
    .list__menu {
        gap: 8px;
        padding: 8px 0;
    }
    
    .list__menu-item a {
        font-size: 16px;
    }
    
    .logo-image {
        width: 65px;
    }
}
</style>