<template>
    <v-container>
      <h1 class="text-center">Connexion</h1>
      <UserAuthForm button-text="Connexion" :submitForm="loginUser"/>
      <v-snackbar
      :timeout="timeout"
      :color="snakbar.color"
      v-model="snakbar.display"
      >
        {{snakbar.text}}
      </v-snackbar>
    </v-container>
</template>

<script>
  import UserAuthForm from "../components/UserAuthForm";
    export default {
        name: "login",
      components:{
          UserAuthForm
      },
      data(){
          return{
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
            this.snakbar.display=true
            this.snakbar.text='Connexion réussie !'
            //await this.$router.push('/')
          }catch(error){
            this.snakbar.display=true,
            this.snakbar.text='Mauvais mail ou mot de passe ! Veuillez réessayer',
            this.snakbar.color='error'
          }

          //alert('Vous essayez de vous connecter')

        }
      }
    }
</script>

<style scoped>

</style>
