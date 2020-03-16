<template>
<div>
<div class="container">
  <h4 class="absolute-center">Login </h4>

  <input type="email" placeholder="Email" v-model="acount.email"  class="form-control"/>
  <input type="password" placeholder="Password" v-model="acount.password"  class="form-control "/>
 
    
    <button type="submit" class="btn btn-primary" @click="LogInUser()">Login</button>
    <button type="submit" class="btn btn-primary" @click="redirecttoSignup()">Signup</button>
   <h5>{{this.LogInstatus}}</h5>
</div>
</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      acount:{
        email:"",
        password:""
      }
    }
  },
  computed: {
    ...mapGetters(['LogInstatus']),
  },
  methods: {
    ...mapActions(['LogIn']),
    redirecttoSignup(){
      this.$router.push({ path: `signup` });
    },
    async LogInUser(){
       await this.LogIn(this.acount)
       if(this.LogInstatus==='success'){
          this.$router.push({ path: `dashboard` });
       }

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
