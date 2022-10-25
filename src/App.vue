<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script>

  import NavBar from "./components/NavBar.vue";

  export default {
    name : 'App',
    components : {
      'NavBar' : NavBar
    }
  }
</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
