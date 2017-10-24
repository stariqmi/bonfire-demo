import Vue from 'vue';
import Vuex from 'vuex';
import request from 'superagent';
import state from './state'

Vue.use(Vuex);



window.onload = () => {
  const movieApp = new Vue({
    el: '#app',
    data: {},
    store: new Vuex.Store(state),
    components: {},
  })
}



