<script>
import { state } from '../state.js';

export default {
    name: 'AppNavbar',
    data() {
        return {
            state
        }
    },
    methods: {
        filterByFilm() {
            console.log('searching...film');
            const url_film = state.base_url + state.action_search_url + state.film_url + `?api_key=${state.apy_key}` + `&query=${state.filterName}`;
            this.state.searchFilm(url_film);
        },
        filterBySeries() {
            console.log('searching...series');
            const url_series = state.base_url + state.action_search_url + state.serie_url + `?api_key=${state.apy_key}` + `&query=${state.filterName}`;
            this.state.searchSeries(url_series);
            state.filterName = '';
        },



    }
}
</script>
<template>
    <nav class="navbar bg-dark shadow px-5">
        <div class="container-fluid">
            <a class="navbar-brand">
                <img src="../assets/img/logo.png" alt="">
            </a>
            <div class="d-flex">

                <input class="form-control me-2" type="search" name="search_film" id="search_film"
                    v-model="state.filterName" placeholder="Search a title">
                <button class="btn btn-danger" @click="this.filterByFilm(), this.filterBySeries()">Cerca</button>


            </div>
        </div>
    </nav>
</template>

<style lang="scss"></style>