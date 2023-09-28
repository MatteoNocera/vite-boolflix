<script>
import { state } from './state.js'
export default {
  name: 'App',
  data() {
    return {
      state,
      url_flags: 'https://flagsapi.com/',

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
    <img height="20" alt="">
    <ol>
      <li v-for="film in state.filmData">
        <h3>Title: {{ film.title }}</h3>
        <h5>Original Title: {{ film.original_title }}</h5>
        <p>
          Language: {{ film.original_language.toUpperCase() }}

          <img v-if="film.original_language == 'en'" :src="url_flags + 'GB/shiny/24.png'" alt="">

          <img v-else-if="film.original_language == 'ja'" :src="url_flags + 'JP/shiny/24.png'" alt="">

          <img v-else-if="film.original_language == 'zh'" :src="url_flags + 'CN/shiny/24.png'" alt="">

          <img v-else :src="url_flags + film.original_language.toUpperCase() + '/shiny/24.png'" alt="">
        </p>



        <p>Vote: {{ film.vote_average }}</p>

      </li>
    </ol>
  </div>
</template>

<style></style>
