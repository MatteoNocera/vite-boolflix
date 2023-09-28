<script>
import { state } from './state.js'
import LanguageItem from './components/LanguageItem.vue';
export default {
  name: 'App',
  data() {
    return {
      state,
      url_flags: 'https://flagsapi.com/',
    };
  },
  methods: {
    filterByFilm() {
      console.log('searching...film');
      const url = this.state.film_base_url + `&query=${state.filterName}`;
      this.state.searchFilm(url);
    },
    filterBySeries() {
      console.log('searching...series');
      const url_series = this.state.series_base_url + `&query=${state.filterName}`;
      this.state.searchSeries(url_series);
    }
  },
  components: {
    LanguageItem,
  }
}
</script>

<template>
  <div class="container my-3">
    <div class="searchbar">
      <input type="search" name="search_film" id="search_film" v-model="state.filterName">
      <button @click="this.filterByFilm(), this.filterBySeries()">Cerca</button>
    </div>

    <div class="row">
      <div class="col-6">
        <h2>Film</h2>
        <ol>
          <li v-for="film in state.filmData">
            <h3>Titolo: {{ film.title }}</h3>
            <h5>Titolo Originale: {{ film.original_title }}</h5>

            <LanguageItem :position="film.original_language.toUpperCase()" :url="url_flags"></LanguageItem>

            <p>Voto: {{ film.vote_average.toFixed(0) }}</p>



          </li>
        </ol>
      </div>

      <div class="col-6">
        <h2>Serie TV</h2>
        <ol>
          <li v-for="serie in state.seriesData">
            <h3>Titolo: {{ serie.name }}</h3>
            <h5>Titolo Originale: {{ serie.original_name }}</h5>

            <LanguageItem :position="serie.original_language.toUpperCase()" :url="url_flags"></LanguageItem>

            <p>Voto: {{ serie.vote_average.toFixed(0) }}</p>

          </li>
        </ol>
      </div>

    </div>
  </div>
</template>

<style></style>
