<template>
  <div id="nav">
    <router-link to="/home">Home</router-link>|
    <router-link to="/gettoken">User Info</router-link>|
    <router-link to="/puttoken">Update User</router-link>|
    <router-link to="/getparams">Company List</router-link>|
  </div>
  <router-view/>

</template>
<script>
export default{
  name: 'App',
  mounted(){
      console.log(process.env.VUE_APP_BASE_URL)
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  color: red;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;

}


</style>
