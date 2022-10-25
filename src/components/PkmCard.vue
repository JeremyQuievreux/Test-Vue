<template>
    <div class="card-container">
            <div class="card-header">
                <p>N°{{pokemon.id}}</p>
                <p>{{ pokemon.name }}</p>
            </div>
            <div class="card-footer" >
                <p v-for="(type, index) in pokemon.apiTypes" :key="index" class="type-chips">{{ type.name }}</p>
            </div>
            <div class="card-body">
                <img :src="pokemon.image" alt="">
            </div>
            <div class="card-stats-block">
                <p>PV : {{ pokemon.stats.HP }}</p>
                <p>Attaque : {{ pokemon.stats.attack }}</p>
                <p>Defence : {{ pokemon.stats.defense }}</p>
                <p>Attaque Spec : {{ pokemon.stats.special_attack }}</p>
                <p>Defence Spec : {{ pokemon.stats.Special_defense }}</p>
                <p>Vitesse : {{ pokemon.stats.speed }}</p>
            </div>
    </div>
    
</template>

<script>

    export default {
        name : 'pkmCard',
        data(){
            return {
            }
        },
        props : ["pokemon"],
    }
</script>

<style lang="scss">
    .card-container{
        border: 2px solid black;
        border-radius: 5px;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 20px;
        .card-header{
            height: 40px;
            border: 2px solid black;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
        }
        .card-body{
            height: 300px;
            border: 2px solid black;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .card-footer{
            height: 40px;
            border: 2px solid black;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 10px;
            .type-chips{
                margin: 20px;
                width: 30%;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 22px;
                border: 2px solid black;
            }
        }
        .card-stats-block{
            display: flex;
            flex-wrap: wrap;
            border: 2px solid black;
            border-radius: 0 0 3px 3px;
            p{
                width: 50%;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>