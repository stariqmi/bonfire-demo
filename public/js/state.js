import Vue from 'vue'
import Vuex from 'vuex'
import request from 'superagent'
import R from 'ramda'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    homeCollection: [],
    actors: [],
    fresh: true,
  },
  getters: {},
  mutations: {
    ADD_MOVIES(state, movies) {
      state.movies = movies
    },
    ADD_MOVIES_TO_COLLECTION(state, movies) {
      state.homeCollection = movies
    },
    ADD_ACTORS(state, actors) {
      state.actors = actors
    },
    STALE(state) {
      state.fresh = false;
    },
    FRESH(state) {
      state.fresh = true;
    }
  },
  actions: {
    APPLY_FILTER({ dispatch, commit }, { search_by, query }) {
      request.get('/search')
        .query({ search_by, query })
        .then((res) => {
          commit('STALE')
          commit('ADD_MOVIES_TO_COLLECTION',res.body.movies)
        })
    },
    ADD_MOVIE_TO_COLLECTION({ dispatch, commit }, id) {
      request.post('/add_to_collection')
        .send({ id })
        .then((res) => {
          dispatch('REFRESH')
        })
    },
    REMOVE_MOVIE_FROM_COLLECTION({ dispatch, commit }, id) {
      request.post('/remove_from_collection')
        .send({ id })
        .then((res) => {
          dispatch('REFRESH')
        })
    },
    REFRESH({ dispatch, commit }) {
      request.get('/movies')
        .then((res) => {
          commit('ADD_MOVIES', res.body.movies)
          commit(
            'ADD_MOVIES_TO_COLLECTION',
            R.filter(movie => movie.added_to_collection, res.body.movies)
          )
          commit('FRESH')
        })
        .catch((error) => {
          alert('Unable to fetch movies')
        })
    }
  },
})
