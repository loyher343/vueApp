<template>
  <div id="app">
    <img src="./assets/logo.png">
    <test msg="hello"></test>
    <router-view/>
  </div>
</template>

<script>
import Test from './components/test'
import users from './componets/users'
export default {
  name: 'App',
 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
