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
            const url = this.state.film_base_url + `&query=${state.filterName}`;
            this.state.searchFilm(url);
        },
        filterBySeries() {
            console.log('searching...series');
            const url_series = this.state.series_base_url + `&query=${state.filterName}`;
            this.state.searchSeries(url_series);
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