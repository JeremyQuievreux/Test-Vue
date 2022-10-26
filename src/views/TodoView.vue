<template>
    <div class="todo-page-container">
        <h1>Todo List</h1>
        <button class="add-btn" @click="toggleModal">Ajouter Tache !</button>

        <TaskCard v-for="(task, index) in taskList" :key="index" :task="task" :index="index" :deleteTask="deleteTask" ></TaskCard>

        <TodoModal v-if="showModal" :toggleModal="toggleModal" :addTask="addTask"></TodoModal>

    </div>
</template>

<script>
import TodoModal from "../components/TodoModal.vue"
import TaskCard from "../components/TaskCard.vue"
    export default {
        name : "TodoView",
        data(){
            return {
                showModal : false,
                taskList : []
            }
        },
        methods : {
            toggleModal(){
                this.showModal = !this.showModal;
            },
            deleteTask(index){
                this.taskList.splice(index,1);
            },
            addTask(newTask){
                this.taskList.push(newTask);
            }
        },
        components:{
            "TodoModal" : TodoModal,
            "TaskCard" : TaskCard
        },
        watch: {
            taskList(newTaskList, oldTaskList){
                localStorage.setItem('TodoJeremy', JSON.stringify(newTaskList));
            }
        },
        mounted(){
            const localTask = JSON.parse(localStorage.getItem("TodoJeremy"))
            if (localTask) {
                this.taskList = localTask
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../style/colors.scss';
    .todo-page-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            margin: 20px;
        }
        .add-btn{
            height: 40px;
            width: 200px;
            background-color: $primary;
            border-radius: 5px;
            border-color: $secondary;
            border-style: solid;
            font-size: 20px;
            margin: 20px;
            &:hover{
                border-color: $primary;
                background-color: $white;
            }
        }
    }
</style>