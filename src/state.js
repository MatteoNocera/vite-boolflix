import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({

    // TODO Divide link and API_KEY
    // State

    base_url: 'https://api.themoviedb.org/3',

    action_search_url: '/search',

    film_url: '/movie',

    serie_url: '/tv',

    apy_key: '8a55e606dd8dc6b2191659c1090f120a',

    url_flags: 'https://flagsapi.com/',
    url_img: 'https://image.tmdb.org/t/p/w342',

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




})


