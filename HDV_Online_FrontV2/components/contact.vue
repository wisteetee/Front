<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px" @click:outside="dialog=false">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">Nous contacter</v-btn>
      </template>
    <v-form v-model="valid" ref="form" class="px-2 py-2" style="background-color: white">
      <v-select
      placeholder="Type de contact"
      v-model="contactForm.TypeContactId"
      :items="typeContact"
      item-text="TitreTypeContact"
      item-value="Id"
      >
      </v-select>

      <v-text-field
        v-if="!this.$auth.loggedIn"
        placeholder="Nom"
        v-model="contactForm.NomContact"
        :rules="[required('nom')]"
      ></v-text-field>

      <v-text-field
        v-if="!this.$auth.loggedIn"
        placeholder="Prenom"
        v-model="contactForm.PrenomContact"
        :rules="[required('prenom')]"
      ></v-text-field>

      <v-text-field
        v-if="!this.$auth.loggedIn"
        placeholder="Email"
        v-model="contactForm.EmailContact"
        :rules="[required('email'), emailFormat()]"
      ></v-text-field>

      <v-text-field
        placeholder="Telephone"
        v-model="contactForm.TelephoneContact"
      ></v-text-field>

      <v-textarea
        placeholder="Message"
        v-model="contactForm.Message"
        :rules="[required('message')]"
      ></v-textarea>

      <v-btn @click="submit" justify="center" :disabled="!valid">Envoyer</v-btn>
      <v-btn @click="vider">Vider le formulaire</v-btn>
    </v-form>
    </v-dialog>

  </v-row>
</template>

<script>

  import validations from "../utils/validations";
  export default {
        name: "contact",
      data(){
          return{
            dialog:false,
            valid:false,
            contactForm:{
              TypeContactId:'',
              NomContact:'',
              PrenomContact:'',
              EmailContact:'',
              TelephoneContact:'',
              Message:'',
              UtilisateurId:''
            },
            typeContact:[],
            typeContactObjet:{},
            typeContactId:[],
            typeContactTitre:[],
            ...validations
          }
      },
      methods:{
        async submit(){
          try {
            if (!this.$auth.loggedIn) {
              await this.$axios.$post('/contacts',
                this.contactForm
              ).then(response => console.log(response))
                .catch(error => console.log(error)),
                await this.$refs.form.reset()
            } else {
              this.contactForm.UtilisateurId = this.$auth.user.id
              this.contactForm.NomContact = this.$auth.user.client.nomClient
              this.contactForm.PrenomContact = this.$auth.user.client.prenomClient
              this.contactForm.EmailContact = this.$auth.user.email
              await this.$axios.$post('/contacts',
                this.contactForm
              ).then(response => console.log(response))
                .catch(error => console.log(error)),
                await this.$refs.form.reset()
            }
             this.dialog = false
             this.$store.dispatch('snackbar/setSnackbar', {color: 'success', text: 'Formulaire envoyé'})
          }catch{
            this.$store.dispatch('snackbar/setSnackbar', {color: 'error', text: 'Erreur de formulaire, veuillez réessayer'})
          }


        },
        async vider(){
          await this.$refs.form.reset()
        }
      },
      mounted() {
          this.$axios.$get('/typecontacts')
          .then(response => response.forEach(element => {
              this.typeContact.push(element)
          }))
          .then(response => response.forEach(element => {
          for (const item in element){
            if(item ==="Id"){
              this.typeContactId.push(element[item])
            }
            if(item ==="TitreTypeContact"){
              this.typeContactTitre.push(element[item])
            }}
        }))
        .catch(error => console.log(error))
      }
    }
</script>

<style scoped>

</style>
