import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({

    // TODO Divide link and API_KEY
    // State

    base_url: 'https://api.themoviedb.org/3',

    action_search_url: '/search',

    film_url: '/movie',

    serie_url: '/tv',


    /* film_base_url: 'https://api.themoviedb.org/3/search/movie',

    series_base_url: 'https://api.themoviedb.org/3/search/tv', */

    apy_key: '8a55e606dd8dc6b2191659c1090f120a',

    filterName: '',
    filmData: '',
    seriesData: '',
    cast: '',





    // Actions
    searchFilm(url) {
        axios
            .get(url)
            .then(response => {
                console.log(response);
                this.filmData = response.data.results;
                //console.log(this.filmData[0].original_title);


            })
            .catch(error => {
                console.error(error)
            })
    },

    searchSeries(url_series) {
        axios
            .get(url_series)
            .then(response => {
                console.log(response);
                this.seriesData = response.data.results;

            })
            .catch(error => {
                console.error(error)
            })

    },
    fetchCast(url_cast) {
        axios
            .get(url_cast)
            .then(response => {
                console.log(response);
                this.cast = response.data.cast;
                console.log(this.cast);
            })
            .catch(error => {
                console.error(error)
            })
    },



})


