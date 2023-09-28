import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({

    // State
    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=8a55e606dd8dc6b2191659c1090f120a',
    filterName: '',
    filmData: '',




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


})


