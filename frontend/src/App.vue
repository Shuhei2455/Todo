<template>
  <v-app>
    <h1>vue</h1>
    <router-view/>
    <Task />
  </v-app>
</template>

<script>
import Task from "./components/Task.vue";
//import Test from "./views/Test.vue";
//import Test1 from "./views/Test1.vue";
export default {
  name: "App",
  components: {
    Task,
}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
