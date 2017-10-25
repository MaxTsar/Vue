<template>
    <section class="stats">
        <h4>Всего на главной {{count}} новостей</h4>
        <h5>Вы удалили {{del}} новостей</h5>
    </section>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.news.length;
        },
        del() {
            return 20 - this.count;
        }
    }
}
</script>

<style>
    .stats {
        padding: 50px;
        text-align: center
    }
</style>
