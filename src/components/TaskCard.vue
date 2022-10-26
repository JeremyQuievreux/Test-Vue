<template>
    <div class="task-card">
        <p>{{task}}</p><br>
        <button class="close-btn" @click="deleteTask(index)">X</button>
    </div>
</template>

<script>
    export default {
        name : "TaskCard",
        props : ["task", "index", "deleteTask"]
    }
</script>

<style lang="scss" scoped>
    @import '../style/colors.scss';
    @import "../style/mixin.scss";

    .task-card{
        width: 75%;
        height: 80px;
        border: 3px solid $primary;
        border-radius: 5px;
        position: relative;
        margin: 10px;
        @include d-flex-row-c-c;
        .close-btn{
            width: 40px;
            height: 40px;
            border-radius: 5px;
            background-color: $primary;
            border: 2px solid $primary;
            position: absolute;
            top: 20px;
            right: 10px;
            &:hover{
                background-color: $white;
            }
        }
    }
</style>