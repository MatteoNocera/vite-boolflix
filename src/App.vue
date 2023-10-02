<script>
import { state } from './state.js';
import AppNavbar from './components/AppNavbar.vue';
import AppFilmCard from './components/AppFilmCard.vue';
import LanguageItem from './components/LanguageItem.vue';
import AppSerieCard from './components/AppSerieCard.vue';

export default {
  name: 'App',
  data() {
    return {
      state,

    };
  },

  components: {
    LanguageItem,
    AppNavbar,
    AppFilmCard,
    AppSerieCard
  },
  /* methods: {
    castFilm(id) {
      const url_cast = this.state.base_url + state.film_url + `/${id}/credits` + `?api_key=${state.apy_key}`;
      state.fetchCast(url_cast);
      state.cast = '';
    }
  } */
}

</script>

<template>
  <div id="app_main">

    <AppNavbar></AppNavbar>

    <div class="container mb-3 pt-3">

      <div v-show="state.filmData == ''">
        <h2 class="text-white fw-bold text-center fs-1">Inizia la tua ricerca</h2>

      </div>

      <h2 v-show="state.filmData != ''" class="text-white fw-bold mb-5">Film</h2>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-between d-flex px-0 g-4">


        <AppFilmCard v-for="film in state.filmData" :film="film" :path="state.url_img + film.poster_path">
        </AppFilmCard>


      </div>


      <h2 v-show="state.seriesData != ''" class="text-white fw-bold my-5">Serie Tv</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-between d-flex px-0 g-4">


        <AppSerieCard v-for="serie in state.seriesData" :serie="serie" :path="state.url_img + serie.poster_path">
        </AppSerieCard>






      </div>

    </div>
  </div>
</template>

