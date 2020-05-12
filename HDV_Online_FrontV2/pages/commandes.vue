<template>
  <v-container fluid>




    <v-data-table
      :headers="headersCommande"
      :items="ListeCommande"
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
        <tr v-for="item in ListeCommande" @click="displayItem(item)">
          <td>{{item.nomProduit}} </td>
          <td>{{item.prix}}</td>
          <td>{{item.date}}</td>
          <td>{{item.montant}}</td>
          <td>{{item.etat}}</td>
        </tr>
        </tbody>
      </template>
    </v-data-table>


    <v-data-table
      :headers="headersProduits"
      :items="ListeProduit"
      class="elevation-1 pt-6 mt-6"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>liste des produits</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>

      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in ListeProduit" @click="displayItem(item)">
            <td>{{item.nomProduit}} </td>
            <td>{{item.prix}} €</td>
            <td>{{item.quantiteProd}}</td>
            <td>{{item.descriptionProduit}}</td>
            <td><v-model ><v-btn v-on:click="decrement" rounded small><v-icon>mdi-minus</v-icon></v-btn> {{ ListeProduit.indexOf(item) }} <v-btn rounded small v-on:click="increment"><v-icon>mdi-plus</v-icon></v-btn></v-model></td>
          </tr>
        </tbody>
      </template>
    </v-data-table>


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
              text: 'Identifiant de commande',
              align: 'start',
              sortable: false,
              value: 'name',
            },
            { text: 'Client', value: 'client' },
            { text: 'Date', value: 'date' },
            { text: 'Montant', value: 'montant' },
            { text: 'Etat', value: 'etat' },
          ],

          headersProduits: [
            {
              text: 'liste des produits',
              align: 'start',
              sortable: false,
              value: 'nomProduit',
            },
            { text: 'tarif', value: 'prix' },
            { text: 'stock', value: 'montant' },
            { text: 'description produit', value: 'etat' },
            { text: 'ajout', value: 'etat' },
          ],
          ListeCommande: [],
          ListeProduit: [],
          CommandeId:null,
          BtnValue:[
            {index: 0, value: 0},
            {index: 1, value: 1},
            {index: 2, value: 2}
          ],
        }
      },
      methods:{
        displayItem (item) {
          console.log(item),
            this.CommandeId = this.ListeCommande.indexOf(item)
        },
        addItemInShoppingList(){

        },
        increment() {
          this.BtnValue++;

        },
        decrement() {
          if(this.BtnValue>=1)
          this.BtnValue--;
        }
      },
      mounted() {
        this.$axios.$get('https://localhost:44391/api/commandes')
          .then(response => this.ListeCommande=response)
          .then(response => console.log(response))
          .catch(error => console.log(error))

        this.$axios.$get('https://localhost:44391/api/produits')
          .then(response => this.ListeProduit=response)
          .then(response => console.log(response))
          .catch(error => console.log(error))
      },
    }
</script>
