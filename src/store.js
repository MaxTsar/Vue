import Vue from 'vue';
import Vuex from 'Vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        news: []
    },
    mutations: {
        newState(state, id) {
            state.news = state.news.filter((item) => {
                return item.id != id;
            });
        }
    },
    actions: {
        deleteItem(context, id) {
            context.commit('newState', id);
        }
    }
});

export default store;