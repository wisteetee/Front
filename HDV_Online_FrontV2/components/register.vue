<template>

  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px" @click:outside="dialog=false">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">Inscription</v-btn>
      </template>
      <div style="background-color: white" class="px-2 py-2">
        <h1 class="text-center">Inscription</h1>
        <UserAuthForm button-text="Inscription" :submitForm="registerUser" has-password-confirm="true"/>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
  import UserAuthForm from "./UserAuthForm";
  export default {
    name: "login",
    components:{
      UserAuthForm
    },
    data(){
      return{
        dialog:false,
      }
    },
    methods:{
      async registerUser(registrationinfo){
        await this.$axios.post('/utilisateurs', registrationinfo)
        await this.$auth.loginWith('local',{
          data:registrationinfo
        })
      }
    }
  }
</script>

<style scoped>
</style>
