<template>
    <div class="api-main-container">
        <h2>Call API avec Vue</h2>
        <div class="api-sub-container">

            <form class="form-pkm">
                <label for="idPkm">Entrez le N° du Pokemon : </label>
                <input type="number" id="idPkm" name="idPkm" min="1" max="898" v-model="selectedId" required>
                <div class="btn-line">
                    <button @click.prevent="getSpecificPokemon">Chercher</button>
                    <button @click.prevent="getRandomPokemon">Get Random One</button>
                </div>
            </form>
            <div class="layout-card">
                <pkmCard :pokemon="this.pokemon" v-if="pokemon"></pkmCard>
                <P v-else>Entrez l'ID d'un pokémon ou cliquez sur "Get Random One"</P>
            </div>
        </div>
    </div>
</template>

<script>
    import PokemonService from '../service/PokemonService'
    import PkmCard from "../components/PkmCard.vue"

    export default {
        name : "ApiView",
        data(){
            return {
                selectedId : "",
                pokemon : undefined
            }
        },
        methods:{
            getSpecificPokemon(){
                if (this.selectedId) {
                    PokemonService.getSpecificPokemon(this.selectedId)
                    .then(response => {
                        this.pokemon = response.data;
                        this.selectedId = "";
                    })
                } else {
                    this.pokemon = "";
                }
            },
            getRandomPokemon(){
                PokemonService.getRandomPokemon()
                .then(response => {
                    this.pokemon = response.data;
                    this.selectedId = "";
                })
            }
        },
        components: {
            "pkmCard" : PkmCard
        }
    }
</script>

<style lang="scss" scoped>
    @import '../style/colors.scss';
    @import '../style/mixin.scss';
    .api-main-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: calc(100vh - 90px);
        h2{
            margin: 10px;
        }
        .api-sub-container{
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: space-around;
            align-items: start;
            margin-top: 50px;
            .layout-card{
                border: 2px solid $primary;
                border-radius: 5px;
                height: 600px;
                width: 30%;
                @include d-flex-row-c-c;
                margin-bottom: 20px;
            }
            form{
                width: 50%;
                height: 200px;
                border: 3px solid $primary;
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                background-color: $white;
                label {
                    font-size: 20px;
                }
                input{
                   width:  50%;
                   height: 40px;
                   text-align: center;
                   font-size: 25px;
                }
                .btn-line{
                    display: flex;
                    justify-content: space-between;
                    width: 75%;
                    button {
                        background-color: $primary;
                        width: 40%;
                        height: 40px;
                        border-radius: 5px;
                        border-style: initial;
                        font-size: 20px;
                        &:hover{
                            background-color: $white;
                            border: 2px solid $primary;
                        }
                    }
                }
            }
            
        }
    }
</style>