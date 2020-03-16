<template>
<div>
<div class="container">
  <h4 class="absolute-center">Signup </h4>

  <input type="text" placeholder="Username" v-model="acount.username" class="form-control"/>
  <input type="email" placeholder="Email"  v-model="acount.email" class="form-control"/>
  <input type="password" placeholder="Password" v-model="acount.password"  class="form-control "/>
 
    <button type="submit" class="btn btn-primary" @click="SignUpUser()">Signup</button>
    <button type="submit" class="btn btn-primary" @click="redirecttoLogin()">Login</button>
    <h5>{{ this.SignUpstatus}}</h5>
</div>
</div>
</template>

<script>
import {mapActions,mapGetters} from "vuex"
export default {
  name: 'HelloWorld',
  data () {
    return {
     acount:{
       email:"",
       username:"",
       password:""
     }
    }
  },
  computed:{
    ...mapGetters(['SignUpstatus'])
  },
  methods: {
    ...mapActions(['SignUp']),
    redirecttoLogin(){
      this.$router.push({ path: `login`});
    },
    async SignUpUser(){
      let data = await this.SignUp(this.acount)  
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  margin-bottom: 20px;
}
button{
  margin-left: 50px;
}
</style>
