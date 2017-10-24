import Vue from 'vue'
import Vuex from 'vuex'
import request from 'superagent'
import R from 'ramda'
import store from './state'

import Movie from './components/movie.vue'
import MovieFilter from './components/movie_filter.vue'

Vue.use(Vuex)

window.onload = () => {
  const movieApp = new Vue({
    el: '#app',
    data: {},
    store,
    components: {
      Movie,
      'movie-filter': MovieFilter,
    },
    computed: {
      movies() {
        return this.$store.state.movies
      },
      actors() {
        return this.$store.state.actors
      },
      homeCollection() {
        return this.$store.state.homeCollection
      },
      fresh() {
        return this.$store.state.fresh
      }
    },
    mounted() {
      request.get('/movies')
        .then((res) => {
          this.$store.commit('ADD_MOVIES', res.body.movies)
          this.$store.commit(
            'ADD_MOVIES_TO_COLLECTION',
            R.filter(movie => movie.added_to_collection, res.body.movies)
          )
        })
        .then(() => {
          return request.get('/actors')
        })
        .then((res) => {
          this.$store.commit('ADD_ACTORS', res.body.actors)
        })
        .catch((error) => {
          console.log(error)
          alert('Unable to fetch movies')
        })
    }
  })
}



