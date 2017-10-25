<template>
    <transition name="fade" appear>
        <nav>
            <h1><span>TOP</span>NEWS</h1>
            <ul>
                <li><router-link to="/" exact>Главная</router-link></li>
                <li><router-link to="/about">О проекте</router-link></li>
                <li><router-link to="/stats">Статистика</router-link></li>
            </ul>
        </nav>
    </transition>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style>
    .router-link-active {
        color: #2FB8EF;
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 25px;
        background: #1e1e1e;
    }

    h1 {
        color: #eee;
    }

    h1 span {
        font-weight: 100;
    }

    ul {
        display: flex;
    }

    li {
        margin-left: 45px;
        list-style: none;
    }
    li:first-child {
        margin-left: 0;
    }

    a {
        color: #eee;
    }
</style>
