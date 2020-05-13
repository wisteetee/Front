<template>
  <v-container fluid>

    <v-form ref="form">
        <v-select
          placeholder="Ajoutez vos produits"
          :items="Produits"
          item-text="nomProduit"
          item-value="id"
          v-model="ListeProduit.ProduitId"
        >
        </v-select>
        <v-text-field
          type="number"
          placeholder="add quantité"
          v-model="ListeProduit.QuantiteCommande"
        ></v-text-field>
        <v-btn
        @click="ajouter">Ajouter</v-btn>

        <v-system-bar style="width: 100%" class="mt-5"></v-system-bar>

        <v-data-table
          :headers="headersCommande"
          :items="Commande"
          class="elevation-1 pt-6 mt-6"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Mes commandes</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
          </template>

          <template v-slot:body="{ items }">
            <tbody>
              <tr v-for="item in items">
                <td >{{ item.IdProduit }} </td>
                <td>{{ item.IdProduit }}</td>
                <td>{{ item.QuantiteProduit }}</td>
                <td>{{ item.QuantiteProduit }}</td>
              </tr>
              <span v-if="Commande.length<=0">Panier vide</span>
              <span v-if="Commande.length!=0">Nombre d'articles: {{ Commande.length }}</span>
            </tbody>
          </template>
        </v-data-table>
<!--      Produits:{{ Produits }}
      ListeProduit{{ ListeProduit}}
      Commande{{ Commande}}-->
    </v-form>

  </v-container>
</template>

<script>
    export default {
        name: "commandes",

      data () {
        return {
          alignmentsAvailable: [
            'start',
            'center',
            'end',
            'baseline',
            'stretch',
          ],
          alignment: 'center',
          dense: false,
          justifyAvailable: [
            'start',
            'center',
            'end',
            'space-around',
            'space-between',
          ],
          justify: 'center',

          expanded: [],
          singleExpand: false,
          headersCommande: [
            {
              text: 'Produit',
              align: 'start',
              sortable: false,
              value: 'name',
            },
            { text: 'Id produit', value: 'client' },
            { text: 'Quantité', value: 'date' },
            { text: 'Montant', value: 'montant' },
          ],


          Produits: [],
          ListeProduit:{
            IdLigne:'',
            ProduitId:'',
            QuantiteCommande:'',
            ProduitNom:'',
          },
          Commande:[],
          lastCommande:'',
        }
      },
      methods:{
        ajouter(){
          this.Commande.push({
          IdProduit:this.ListeProduit.ProduitId,
          QuantiteProduit:this.ListeProduit.QuantiteCommande,
          IdCommande:this.lastCommande
          })
         /* this.$refs.form.reset()*/
        },
      },
      mounted() {
        this.$axios.$get('/produits')
          .then(response => this.Produits=response)
          .then(response => console.log(response))
          .catch(error => console.log(error))
        this.$axios.$get('/commandes/last')
          .then(response => this.lastCommande=response)
          .then(response => console.log(response))
          .catch(error => console.log(error))
      },
    }
</script>
