<template>
    <div class="modal-container">

        <div class="modal-overlay" @click="toggleModal"></div>

        <div class="modal-content">
            <h1>Ajouter tache</h1>
            <input type="text" name="newTask" id="newTask" v-model="newTask" @keypress.enter="addTaskAndCloseModal">

            <div class="btn-container">
                <button class="my-btn" @click="addTaskAndCloseModal">Ajouter</button>
                <button class="my-btn" @click="toggleModal">Annuler</button>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name : "TodoModal",
        props : ["toggleModal", "addTask"],
        data(){
            return {
                newTask :""
            }
        },
        methods : {
            addTaskAndCloseModal(){
                this.addTask(this.newTask);
                this.toggleModal();
            }
        }
    }

</script>

<style lang="scss" scoped>
        @import '../style/colors.scss';
        @import '../style/mixin.scss';
    .modal-container{
        @include pos-fixed-0-0-0-0;
        width: 100%;
        height: 100%;
        @include d-flex-row-c-c;
        .modal-overlay{
            background-color: rgba(0, 0, 0, 0.500);
            @include pos-fixed-0-0-0-0;
        }
        .modal-content{
            padding: 20px;
            background-color: $white;
            position: fixed;
            width: 50%;
            height: 50%;
            border: 3px solid $primary;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            input{
                height: 40px;
                width: 75%;
                font-size: 20px;
            }
            .my-btn{
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
    }
</style>