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
    .task-card{
        width: 75%;
        height: 80px;
        border: 3px solid #41B883;
        border-radius: 5px;
        position: relative;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        .close-btn{
            width: 40px;
            height: 40px;
            border-radius: 5px;
            background-color: #41B883;
            border: 2px solid #41B883;
            position: absolute;
            top: 20px;
            right: 10px;
            &:hover{
                background-color: white;
            }
        }
    }
</style>