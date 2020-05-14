<template>
  <v-container>

    <h2 align="center">{{ titre }}</h2>

    <div align="center" id="listeCategorieProduits">
      <!--      <p v-if="IdCategorieProduit!=null">{{ Categoriesproduits[IdCategorieProduit].produit }}</p>-->
      <v-btn height="130" width="110" v-for="item in Categoriesproduits" @click="displayItem(item)" color="amber" class="mx-2" :key="item.nomCategorieProduit"
             @mouseover="hover = true" @mouseleave="hover = false">
        <div>
          <v-img
            height="100"
            width="100"
            :src="require('@/assets/ressources/'+item.sourceImg)"
          >
          </v-img>
          {{ item.nomCategorieProduit }}
        </div>

      </v-btn>
    </div>

    <v-row v-if="IdCategorieProduit!=null">
      <v-col cols=4 v-for="Produit in Categoriesproduits[IdCategorieProduit].produit" :key="Produit.Id">
        <div>
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
            height="550px"
            v-scroll
             >
            <v-col cols="auto">
              <v-img v-if= "Produit.sourceImg !=null"
                     height="100"
                     width="100"
                     :src="require('@/assets/ressources/'+Produit.sourceImg)"
              ></v-img>
              {{ Produit.NomProduit }}

            </v-col>

                <v-card-title class="headline mb-4">{{ Produit.nomProduit }}</v-card-title>
                <v-card-subtitle class="overline mb-4">{{ Produit.quantiteProd }} /u disponible</v-card-subtitle>
                <v-card-subtitle class="headline mb-1">{{ Produit.prix }} € le lot de {{ Produit.unitesParLot }} /u</v-card-subtitle>
                <v-card-text>{{ Produit.descriptionProduit }}</v-card-text>

            <v-card-actions align="center">
              <v-btn class="green float-right" text to="/commandes">Commander</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        titre: 'Catégories de produits',
        hover: false,
        Categoriesproduits: [],
        IdCategorieProduit: null,
        active: false
      }
    },
    methods:{
      displayItem (item) {
        console.log(item)
        this.IdCategorieProduit = this.Categoriesproduits.indexOf(item)
      },
    },
    mounted() {
      this.$axios.$get('https://localhost:44391/api/CategorieProduits')
        .then(response => this.Categoriesproduits=response)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }
</script>

