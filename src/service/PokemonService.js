import axios from 'axios';

export default {
    getSpecificPokemon(id){
       return axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
    },
    getRandomPokemon(){
        const randomId = Math.floor(Math.random() * (898 - 1 + 1)) + 1
        return axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${randomId}`)
    }
}