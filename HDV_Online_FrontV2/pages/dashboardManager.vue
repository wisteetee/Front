<template>
  <v-container>
    <h2 align-content="center">Dashboard Manager</h2>
    <v-row>
      <v-col v-for="commande in Commandes" cols="4">
        <v-card class="mt-2">
          <v-card-title>Commande n° {{commande.id}}</v-card-title>
          <v-card-subtitle>Faite le {{commande.dateCommande.substr(0,10)}}</v-card-subtitle>
          <v-row>
            <v-col v-for="produit in commande.produitsCommandes" cols="6">
              <v-card-text >
                <p v-for="infoProduit in produit" v-if="infoProduit.id==produit.idProduit">{{infoProduit.nomProduit}} {{infoProduit.prix}}€/u Qté : {{produit.quantite}} Prix : {{produit.prixTotalLigne}}€</p>
              </v-card-text>
            </v-col>
          </v-row>
          <v-card-text>
            Total : {{commande.prixTotalCommande}}€
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
    export default {
        name: "dashboardManager",
      middleware:'auth-manager',
      data(){
          return{
            Commandes:[]
          }
      },
      mounted() {
          this.$axios.$get('/commandes')
        .then(response => this.Commandes=response)
      }
    }
</script>

<style scoped>

</style>
