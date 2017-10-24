<template lang="pug">
  .filters
    p Filter By
    select(v-model='filterType')
      option(value='actors') Actors
      option(value='title') Title
      option(value='genre') Genre
    div
      input(v-if='isTitleFilter', type='text', v-model='title' @change='onTitleFilterChange')
      select(v-if='isActorFilter' v-model='actorId' @change='onActorFilterChange')
        option(value='0') Select Actor to filter by
        option(v-for='actor in actors' :value='actor.id') {{ actor.first_name }} {{ actor.last_name }}
      select(v-if='isGenreFilter' v-model='genre' @change='onGenreFilterChange')
        option(value='sci-fi') Sci Fi
        option(value='horror') Horror
        option(value='action') Action
</template>

<script>
  module.exports = {
    props: ['actors'],
    data() {
      return {
        filterType: 'title',
        actorId: 0,
        title: '',
        genre: '',
      }
    },
    computed: {
      isActorFilter() {
        return this.filterType === 'actors'
      },
      isTitleFilter() {
        return this.filterType === 'title'
      },
      isGenreFilter() {
        return this.filterType === 'genre'
      }
    },
    methods: {
      onActorFilterChange() {
        this.applyFilter('actor', this.actorId)
      },
      onTitleFilterChange() {
        this.applyFilter('title', this.title)
      },
      onGenreFilterChange() {
        this.applyFilter('genre', this.genre)
      },
      applyFilter(search_by, query) {
        this.$store.dispatch('APPLY_FILTER', { search_by, query })
      },
    },
  }
</script>

<style lang="sass">
  
</style>