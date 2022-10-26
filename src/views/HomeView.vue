<template>
  <div class="home">
    <h2>Mise en pratique de la formation Vue.JS</h2>
    <div class="home-card">
      <h3>Page Api : </h3>
      <ul>
        <li>Création et utilisation de states.</li>
        <li>Création de methodes faisant des appels à une API via un fichier service (merci Aldric).</li>
        <li>Création d'un formulaire avec 1 seul input, utilisation du v-model pour le lier a un state.</li>
        <li>Sauvegarde des données dans un state à la réception de ces dernieres.</li>
        <li>Utilisation de l'affichage conditionnel.</li>
        <li>Consommation des données par le front.</li>
      </ul>
    </div>
    <div class="home-card">
      <h3>Page TodoList : </h3>
      <ul>
        <li>Création et utilisation de states.</li>
        <li>Création de methodes modifiant un state (toogle de la modale, ajout/suppression de taches).</li>
        <li>Utilisation d'un watcher sur un state.</li>
        <li>Création d'une modale.</li>
        <li>Utilisation de l'affichage conditionnel.</li>
        <li>Création d'un formulaire avec 1 seul input, utilisation du v-model pour le lier a un state.</li>
        <li>Passage de states et methodes en props a un composant enfant.</li>
        <li>Sauvegarde de la liste de taches dans le localStorage.</li>
        <li>Utilisation d'un LifeCycle Hook (mounted) pour récupérer des données dans le localStorage.</li>
      </ul>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style lang="scss" scoped>
    @import '../style/colors.scss';
  .home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
      margin-top: 10px;
    }
    .home-card{
      width: 50%;
      border: 3px solid $primary;
      border-radius: 5px;
      margin: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
