<script>
import { state } from './state.js'
import LanguageItem from './components/LanguageItem.vue';
export default {
  name: 'App',
  data() {
    return {
      state,
      url_flags: 'https://flagsapi.com/',
      url_img: 'https://image.tmdb.org/t/p/w342',
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
    },
    /* stampStars() {
      if ((film.vote_average / 2).toFixed(0) = 1) {

      }
    } */

  },
  components: {
    LanguageItem,
  }
}

</script>

<template>
  <div class="container my-3">
    <h1>Boolflix</h1>
    <div class="searchbar">
      <input type="search" name="search_film" id="search_film" v-model="state.filterName">
      <button @click="this.filterByFilm(), this.filterBySeries()">Cerca</button>

    </div>

    <div class="row">
      <div class="col-6">
        <h2>Film</h2>
        <ol>
          <li class="mb-4" v-for="film in state.filmData">
            <h3>Titolo: {{ film.title }}</h3>
            <h5>Titolo Originale: {{ film.original_title }}</h5>

            <LanguageItem :position="film.original_language.toUpperCase()" :url="url_flags"></LanguageItem>

            <p v-if="film.vote_count != 0">
              Voto: <i v-for="star in Number((film.vote_average / 2).toFixed(0))" class="fa fa-star">

              </i><span>
                <i v-for="emptyStar in (5 - (Number((film.vote_average / 2).toFixed(0))))" class="fa fa-star-o"></i>
              </span>

            </p>
            <p v-else>
              Voto: Ancora nessun voto
            </p>

            <img v-if="film.poster_path != null" :src="url_img + film.poster_path" alt="">
            <img v-else
              src="https://thumbs.dreamstime.com/z/pagina-di-progettazione-errore-non-trovato-libro-senza-pagina-libro-aperto-una-vista-superiore-illustrazione-di-vettore-85777589.jpg?w=342"
              alt="">

          </li>
        </ol>
      </div>

      <div class="col-6">
        <h2>Serie TV</h2>
        <ol>
          <li class="mb-4" v-for="serie in state.seriesData">
            <h3>Titolo: {{ serie.name }}</h3>
            <h5>Titolo Originale: {{ serie.original_name }}</h5>

            <LanguageItem :position="serie.original_language.toUpperCase()" :url="url_flags"></LanguageItem>

            <p v-if="serie.vote_count != 0">
              Voto: <i v-for="serieStar in Number((serie.vote_average / 2).toFixed(0))" class="fa fa-star">

              </i><span>
                <i v-for="emptySerieStar in (5 - (Number((serie.vote_average / 2).toFixed(0))))" class="fa fa-star-o"></i>
              </span>

            </p>
            <p v-else>
              Voto: Ancora nessun voto
            </p>

            <img v-if="serie.poster_path != null" :src="url_img + serie.poster_path" alt="">
            <img v-else
              src="https://thumbs.dreamstime.com/z/pagina-di-progettazione-errore-non-trovato-libro-senza-pagina-libro-aperto-una-vista-superiore-illustrazione-di-vettore-85777589.jpg?w=342"
              alt="">

          </li>
        </ol>
      </div>

    </div>
  </div>
</template>

<style></style>
