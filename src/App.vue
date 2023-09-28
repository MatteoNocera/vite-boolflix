<script>
import { state } from './state.js'
import { hasFlag } from 'country-flag-icons'
export default {
  name: 'App',
  data() {
    return {
      state,

    }
  },
  methods: {
    filterByName() {
      console.log('searching...');
      const url = this.state.base_url + `&query=${state.filterName}`;
      this.state.searchFilm(url)
    },

  }
}
</script>

<template>
  <div class="container my-3">
    <div class="searchbar">
      <input type="search" name="search_film" id="search_film" v-model="state.filterName">
      <button @click="this.filterByName()">Cerca</button>
    </div>
    <img src=http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg height="20" alt="">
    <ol>
      <li v-for="film in state.filmData">
        <h3>Title: {{ film.title }}</h3>
        <h5>Original Title: {{ film.original_title }}</h5>
        <p>Language: {{ film.original_language }}</p>

        <p>Vote: {{ film.vote_average }}</p>

      </li>
    </ol>
  </div>
</template>

<style></style>
