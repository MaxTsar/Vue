<template>
    <section class="home">
        <div class="news-wrap">
            <input type="text" placeholder="Поиск новостей" v-model="searchValue">
            <transition-group name="fade">
                <article @click="del(n.id)" class="news-item" v-for="n in search" :key="n.id">
                    <h3>{{n.title}}</h3>
                    <p>{{n.body}}</p>
                </article>
            </transition-group>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            searchValue: ''
        }
    },
    methods: {
        del(id) {
            this.$store.dispatch('deleteItem', id);
            console.log(id);
        }
    },
    computed: {
        news() {
            return this.$store.state.news;
        },
        search(val) {
            return this.news.filter((item) => {
                return item.title.match(this.searchValue);
            });
        }
    }
}
</script>

<style scoped>
    input {
        margin-bottom: 25px;
        width: 100%;
        padding: 10px 15px;
        border-radius: 3px;
        border: 1px solid #E6F0F9;
    }

    input:focus {
        border: 1px solid #bbb;
    }

    article {
        margin-bottom: 15px;
        padding: 25px 15px;
        background: #E6F0F9;
        border-radius: 3px;
        cursor: pointer;
        transition: all .35s ease-in;
    }

    article:hover {
        background: #FF746A;
    }

    h3 {
        margin-bottom: 10px;
        color: #26333B;
    }

    p {
        color: #334551;
    }

    .news-wrap {
        margin: 25px auto;
        width: 960px;
    }

    .fade-enter-active {
        animation: fade-in 1s ease;
    }
    .fade-leave-active {
        animation: fade-out 1s ease;
        
    }
    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes fade-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>
