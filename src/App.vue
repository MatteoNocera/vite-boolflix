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
  <div id="app_main">
    <div class="container mb-3">

      <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="./assets/img/logo.png" alt="">
          </a>
          <div class="d-flex">

            <input class="form-control me-2" type="search" name="search_film" id="search_film" v-model="state.filterName"
              placeholder="Search a title">
            <button class="btn btn-danger" @click="this.filterByFilm(), this.filterBySeries()">Cerca</button>


          </div>
        </div>
      </nav>


      <h1>Boolflix</h1>
      <div class="searchbar">


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

                Voto: <svg v-for="star in Number((film.vote_average / 2).toFixed(0))" xmlns="http://www.w3.org/2000/svg"
                  height="0.75em"
                  viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>

                <!-- <i v-for="star in Number((film.vote_average / 2).toFixed(0))" class="fa fa-star"> </i>-->



                <span>
                  <svg v-for="emptyStar in (5 - (Number((film.vote_average / 2).toFixed(0))))"
                    xmlns="http://www.w3.org/2000/svg" height="0.75em"
                    viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                  </svg>

                  <!-- <i v-for="emptyStar in (5 - (Number((film.vote_average / 2).toFixed(0))))" class="fa fa-star-o"></i> -->
                </span>

              </p>
              <p v-else>
                Voto: Ancora nessun voto
              </p>

              <img v-if="film.poster_path != null" :src="url_img + film.poster_path" alt="">
              <img v-else src="./assets/img/404.jpg" width="342" alt="">

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
                Voto: <svg v-for="serieStar in Number((serie.vote_average / 2).toFixed(0))"
                  xmlns="http://www.w3.org/2000/svg" height="0.75em"
                  viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <!-- <i v-for="serieStar in Number((serie.vote_average / 2).toFixed(0))" class="fa fa-star"> </i>-->

                <span>

                  <svg v-for="emptySerieStar in (5 - (Number((serie.vote_average / 2).toFixed(0))))"
                    xmlns="http://www.w3.org/2000/svg" height="0.75em"
                    viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                  </svg>

                  <!-- <i v-for="emptySerieStar in (5 - (Number((serie.vote_average / 2).toFixed(0))))"
                    class="fa fa-star-o"></i> -->
                </span>

              </p>
              <p v-else>
                Voto: Ancora nessun voto
              </p>

              <img v-if="serie.poster_path != null" :src="url_img + serie.poster_path" alt="">
              <img v-else src="./assets/img/404.jpg" width="342" alt="">

            </li>
          </ol>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
