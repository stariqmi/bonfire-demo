<template lang="pug">
  .movie
    h3.title {{ movie.title }}
    h4.genre {{ movie.genre }}
    ul.actors(v-for='actor in movie.actors')
      li.actor {{ actor.first_name }} {{ actor.last_name }}
    button(v-if='!movie.added_to_collection && showButtons', @click='addMovieToCollection') Add Movie
    button(v-if='movie.added_to_collection && showButtons', @click='removeMovieFromCollection') Remove Movie
</template>

<script>
  module.exports = {
    props: ['movie', 'showButtons'],
    methods: {
      addMovieToCollection() {
        this.$store.dispatch('ADD_MOVIE_TO_COLLECTION', this.movie.id)
      },
      removeMovieFromCollection() {
        this.$store.dispatch('REMOVE_MOVIE_FROM_COLLECTION', this.movie.id)
      }
    }
  }
</script>

<style lang="sass">
  
</style>