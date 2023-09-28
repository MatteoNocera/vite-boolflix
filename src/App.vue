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
    filterByFilm() {
      console.log('searching...film');
      const url = this.state.film_base_url + `&query=${state.filterName}`;
      this.state.searchFilm(url)
    },
    filterBySeries() {
      console.log('searching...series');
      const url_series = this.state.series_base_url + `&query=${state.filterName}`;
      this.state.searchSeries(url_series)

    }

  }
}
</script>

<template>
  <div class="container my-3">
    <div class="searchbar">
      <input type="search" name="search_film" id="search_film" v-model="state.filterName">
      <button @click="this.filterBySeries(), this.filterByFilm()">Cerca</button>
    </div>

    <div class="row">
      <div class="col-6">
        <h2>Film</h2>
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

            <p>Vote: {{ film.vote_average.toFixed(0) }}</p>

          </li>
        </ol>
      </div>

      <div class="col-6">
        <h2>Serie TV</h2>
        <ol>
          <li v-for="serie in state.seriesData">
            <h3>Title: {{ serie.name }}</h3>
            <h5>Original Title: {{ serie.original_name }}</h5>
            <p>
              Language: {{ serie.original_language.toUpperCase() }}

              <img v-if="serie.original_language == 'en'" :src="url_flags + 'GB/shiny/24.png'" alt="">

              <img v-else-if="serie.original_language == 'ja'" :src="url_flags + 'JP/shiny/24.png'" alt="">

              <img v-else-if="serie.original_language == 'zh'" :src="url_flags + 'CN/shiny/24.png'" alt="">

              <img v-else :src="url_flags + serie.original_language.toUpperCase() + '/shiny/24.png'" alt="">
            </p>

            <p>Vote: {{ serie.vote_average.toFixed(0) }}</p>

          </li>
        </ol>
      </div>

    </div>
  </div>
</template>

<style></style>
