<template>
  <v-container>
    <h1 class="text-center">Inscription</h1>
    <UserAuthForm button-text="Inscription" :submitForm="registerUser"/>
  </v-container>
</template>

<script>
  import UserAuthForm from "../components/UserAuthForm";
  export default {
    name: "login",
    components:{
      UserAuthForm
    },
    methods:{
      async registerUser(registrationinfo){
        await this.$axios.post('/users', registrationinfo)
        await this.$auth.loginWith('local',{
          data:registrationinfo
        })
      }
    }

  }
</script>

<style scoped>

</style>
