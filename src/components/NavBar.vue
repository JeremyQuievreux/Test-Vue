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
                    {
                        name : "Home",
                        url : "/"
                    },
                    {
                        name : "API",
                        url : "/api"
                    },
                    {
                        name : "ToDo-List",
                        url : "/todo"
                    }
                ]
            };
        },
};

</script>

<style lang="scss">
    .topBar{
        height: 80px;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        border-bottom: 10px solid #364A60;
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
                color: #41B883;
                line-height: 3;
                &:hover{
                    color: white;
                }
            }
            .router-link-active{
                border-bottom: 3px solid white;
            }
        }
    }
</style>