<template>
    <div class="topBar">
        <img src="../assets/logo.png" alt="">
        <nav class="test">
            <div v-for="(item, index) in navItems" :key="index" >
                <router-link exact :to="{path:item.url}">{{ item.name }}</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        data() {
            return {
                navItems : [
                    {name : "Home", url : "/"},
                    {name : "API", url : "/api"},
                    {name : "Todo-List", url : "/todo"},
                ]
            };
        },
};

</script>

<style lang="scss">
    @import '../style/colors.scss';

    .topBar{
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: $black;
        padding: 0 10px;
        border-bottom: 10px solid $secondary;
        img{
            height: 50px;
        }
        nav{
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 50%;
            a{
                text-decoration: none;
                font-size: 25px;
                font-weight: bold;
                color: $primary;
                line-height: 3;
                &:hover{
                    color: $white;
                }
            }
            .router-link-active{
                border-bottom: 3px solid $white;
            }
        }
    }
</style>