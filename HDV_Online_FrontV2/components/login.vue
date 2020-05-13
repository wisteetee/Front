<template>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px" @click:outside="dialog=false" >
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">Connexion</v-btn>
          </template>
          <div style="background-color: white" class="px-2 py-2">
          <h1 class="text-center">Connexion</h1>
      <UserAuthForm button-text="Connexion" :submitForm="loginUser"/>
      <v-snackbar
      :timeout="timeout"
      :color="snakbar.color"
      v-model="snakbar.display"
      >
        {{snakbar.text}}
      </v-snackbar>
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
            timeout:2000,
            snakbar:{
              display:false,
              text:'',
              color:'success'
            }
          }
      },
      methods: {
        async loginUser(logininfo) {
          try{
            console.log(logininfo)
             await this.$auth.loginWith('local',{
              data:logininfo
            })
            this.$store.dispatch('snackbar/setSnackbar', {color:'success' ,text:'Connexion réussie'})
            this.$router.push('/')
          }catch(error){
            this.$store.dispatch('snackbar/setSnackbar', {color: 'error', text: 'Il y a eu un probleme lors de votre tentative de connexion, veuillez réessayer'})
          }
        }
      }
    }
</script>

<style scoped>

</style>
