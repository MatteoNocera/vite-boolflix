<script>

import { state } from '../state.js';
import LanguageItem from './LanguageItem.vue';


export default {
    name: 'AppSerieCard',

    data() {
        return {
            state,
        }
    },
    props: {
        serie: Object,
        path: String

    },
    components: {
        LanguageItem,
    },
    methods: {
        castSerie(id) {
            const url_cast = state.base_url + state.serie_url + `/${id}/credits` + `?api_key=${state.apy_key}`;
            state.fetchCast(url_cast);
            /* this.cast = ''; */
        },
        /* fetchCast(url_cast) {
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
        }, */
    }
}
</script>

<template>
    <div class="col">

        <div class="mb-4 card" @click="this.castSerie(serie.id)" @mouseout="state.cast = ''">

            <img class="card-img-top" v-if="path.toString() != 'https://image.tmdb.org/t/p/w342null'" :src="path"
                alt="Title">
            <img v-else class="card-img-top" src="../assets/img/404.jpg" width="342" alt="Title">

            <div class="card-body">

                <div class="content">
                    <h4 class="card-title">Titolo: {{ serie.name }}</h4>
                    <h6 v-if="serie.name != serie.original_name">Titolo Originale: {{ serie.original_name }}</h6>

                    <LanguageItem :position="serie.original_language.toUpperCase()" :url="state.url_flags"></LanguageItem>

                    <p class="card-text" v-if="serie.vote_count != 0">

                        Voto:
                        <span>


                            <svg v-for="serieStar in Number((serie.vote_average / 2).toFixed(0))"
                                xmlns="http://www.w3.org/2000/svg" height="0.75em"
                                viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>

                            <svg v-for="emptySerieStar in (5 - (Number((serie.vote_average / 2).toFixed(0))))"
                                xmlns="http://www.w3.org/2000/svg" height="0.75em"
                                viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->

                                <path
                                    d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                            </svg>

                        </span>

                    </p>

                    <p v-else>
                        Voto: Ancora nessun voto
                    </p>

                    <p>
                        {{ serie.overview }}
                    </p>

                    <h6>click me for cast info</h6>
                    <p v-for="person in state.cast">

                        Attore: {{ person.name }}
                    </p>

                </div>

            </div>
        </div>

    </div>
</template>



