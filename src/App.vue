<template>
  <div id="app">
    <toolbar></toolbar>
    <transition name="fade" appear mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
export default {
  name: 'app',
  data () {
    return {
      // news: []
    }
  },
  components: {
    toolbar: Toolbar
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then((data) => {
        this.$store.state.news = data.body.slice(0, 20);
        console.log(this.$store.state.news);
      });
  }
}
</script>

<style >
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-family: sans-serif;
  }

  
  a, a:hover {
    text-decoration: none;
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
