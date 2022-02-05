<template>
  <div class="login">
      <div class="loginHeader">
          User Login
      </div>
      <div class="loginContainer">
          <table>
              <tr>
                  <td>Username</td>
                  <td>:</td>
                  <td><input type="text" placeholder="Username" v-model="user.username"></td>
              </tr>
              <tr>
                  <td>Password</td>
                  <td>:</td>
                  <td><input type="password" placeholder="Password" v-model="user.password"></td>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td><a href="http://localhost:8081/admin"><button class="addBtn">Login</button></a></td>
              </tr>
             
          </table>

      </div>
    
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user:{
        username:"",
        password:""
      }
    }
  },

  methods: {
    loginNow(){
      console.log(this.user);
      this.$eventBus.$emit("loadingStatus", true);

      this.$axios.post("",this.user)
       .then(res=>{
         this.$eventBus.$emit("loadingStatus",false);
         console.log(res);

      });
      
    }
  },
}

</script>

