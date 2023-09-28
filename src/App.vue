<script>
import { state } from './state.js'
export default {
  name: 'App',
  data() {
    return {
      state
    }
  },
  methods: {
    filterByName() {
      console.log('searching...');
      const url = this.state.base_url + `&query=${state.filterName}`;
      this.state.searchFilm(url)
    }
  }
}
</script>

<template>
  <div class="container my-3">
    <div class="searchbar">
      <input type="search" name="search_film" id="search_film" v-model="state.filterName">
      <button @click="this.filterByName()">Cerca</button>
    </div>
  </div>
</template>

<style></style>
