import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({

    // State
    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=8a55e606dd8dc6b2191659c1090f120a',
    filterName: '',




    // Actions
    searchFilm(url) {
        axios
            .get(url)
            .then(response => {
                console.log(response);

            })
            .catch(error => {
                console.error(error)
            })
    }
})



/* 
Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo
scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il
bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni
film trovato:
1. Titolo
2. Titolo Originale
3. Lingua
4. Voto
*/