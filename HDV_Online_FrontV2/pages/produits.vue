<template>
  <v-container>

    <p>{{ titre }}</p>

    <div class="float-center" id="listeCategorieProduits">
      <!--      <p v-if="IdCategorieProduit!=null">{{ Categoriesproduits[IdCategorieProduit].produit }}</p>-->
      <v-btn v-for="item in Categoriesproduits" @click="displayItem(item)" class="orange mr-2" :key="item.nomCategorieProduit"
             @mouseover="hover = true" @mouseleave="hover = false">
        {{ item.nomCategorieProduit }}
        <p v-if="hover" class="overline mt-2">
          {{ item.descriptionCategorieProduit }}
        </p>
      </v-btn>
    </div>

    <v-row>
      <v-col cols=4>
        <div v-if="IdCategorieProduit!=null">
          <v-card
            class="mx-auto"
            max-width="344"
            outlined

            v-for="Produit in Categoriesproduits[IdCategorieProduit].produit" :key="Produit.Id" >

            <v-col cols="auto">
              <v-img v-if= "Produit.img !=null"
                     height="100"
                     width="100"
                     :src="require('@/assets/ressources/' + listeProduits.img)"
              ></v-img>
              {{ Produit.NomProduit }}

            </v-col>

            <v-list-item three-line>
              <v-list-item-content>
                <div class="headline mb-4">{{ Produit.NomProduit }}</div>
                <div class="overline mb-4">{{ Produit.QuantiteProd }} /u disponible</div>
                <v-list-item-title class="headline mb-1">{{ Produit.Prix }} € le lot de {{ Produit.unitesParLot }} /u</v-list-item-title>
                <v-list-item-subtitle>{{ Produit.DescriptionProduit }}</v-list-item-subtitle>
                <div class="overline mb-4">cat:{{ Produit.IdCategorieProduit }}</div>
              </v-list-item-content>

            </v-list-item>

            <v-card-actions>
              <v-btn class="green float-right" text>Commander</v-btn>
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
