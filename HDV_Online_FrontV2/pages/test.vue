<template>
  <v-container fluid>

    <v-form ref="form">
      <v-row>
        <v-col cols="3">
          <v-select
            placeholder="Catégorie"
            :items="CategorieProduit"
            item-text="nomCategorieProduit"
            item-value="produit"
            v-model="Produits"
          >
          </v-select>
        </v-col>
        <v-col cols="3">
          <v-select
            @change="produitSelectionneRequete"
            placeholder="Produits"
            :items="Produits"
            item-text="nomProduit"
            item-value="id"
            v-model="IdProduitSelectionne"
          >
          </v-select>
        </v-col>
        <v-col cols="2">

          <v-text-field readonly suffix="€/u"  :value="ProduitSelectionne.prix"></v-text-field>
        </v-col>
        <v-col cols="2">

          <v-text-field
            min="0"
            type="number"
            placeholder="add quantité"
            v-model="ListeProduit.QuantiteCommande"
            :rules="[v => !!v && v>0 || 'Veillez entrer un quantité suppérieure a 0']"
          ></v-text-field>
        </v-col>
        <v-col cols="2">

          <v-btn
            @click="ajouter">Ajouter
          </v-btn>
        </v-col>
      </v-row>

      <v-system-bar style="width: 100%" class="mt-5"></v-system-bar>

      <v-data-table
        min-height="1000px"
        :headers="headersCommande"
        :items="Commande"
        class="elevation-1 pt-6 mt-6"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Ma commandes</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn right @click="envoisCommande">Valider la commande</v-btn>
          </v-toolbar>
        </template>

        <template v-slot:body="{ items }">
          <tbody>
          <tr v-for="item in items">
            <td>{{ item.nomProduit }} </td>
            <td>{{ item.IdProduit }}</td>
            <td>{{ item.QuantiteProduit }}</td>
            <td>{{ item.Prix }}€/u </td>
            <td>{{ item.Total }}€ </td>
          </tr>
          <span v-if="Commande.length<=0">Panier vide</span>
          <span v-if="Commande.length!=0">Nombre d'articles: {{ Commande.length }}</span>
          <v-spacer></v-spacer>
          <span>Prix total :{{TotalCommande}} €</span>
          </tbody>
        </template>
      </v-data-table>
    </v-form>
    {{this.$auth.user.client.id}}
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
          { text: 'Total', value: 'montant' }

        ],
        CategorieProduit:[],
        Produits: [],
        IdProduitSelectionne:[],
        ProduitSelectionne:[],
        ListeProduit:{
          QuantiteCommande:0,
          PrixTotal:0
        },
        Commande:[],
        CommandeBdd:[],
        TotalCommande:0,
        lastCommande:0,
        dateActuelle:new Date().toISOString().substr(0,10)
      }
    },
    methods:{
      ajouter(){
        this.$axios.$get('/commandes/last')
          .then(response => this.lastCommande=response)
          .then(response => console.log(response))
          .catch(error => console.log(error))
        this.Commande.push({
          nomProduit:this.ProduitSelectionne.nomProduit,
          IdProduit:this.ProduitSelectionne.id,
          QuantiteProduit:parseInt(this.ListeProduit.QuantiteCommande),
          Prix:this.ProduitSelectionne.prix,
          Total:this.ProduitSelectionne.prix*this.ListeProduit.QuantiteCommande
        })
        this.CommandeBdd.push({
          IdProduit:this.ProduitSelectionne.id,
          Quantite:parseInt(this.ListeProduit.QuantiteCommande),
          IdCommande:this.lastCommande+1,
          PrixTotalLigne:this.ProduitSelectionne.prix*this.ListeProduit.QuantiteCommande
        })
        this.TotalCommande=0,
        this.Commande.forEach(element => this.TotalCommande+=element.Total)
        /* this.$refs.form.reset()*/
      },
      produitSelectionneRequete(){
        var url= '/produits/'+this.IdProduitSelectionne
        this.$axios.$get(url)
        .then(response => this.ProduitSelectionne=response)
      },
      envoisCommande(){
        this.$axios.$post('/commandes',{
          DateCommande:this.dateActuelle,
          ClientId:this.$auth.user.client.id,
          PrixTotalCommande:this.TotalCommande
        })
        .then(this.CommandeBdd.forEach(element =>
          this.$axios.$post('/produitscommandes', element)
        ))
      },

    },
    mounted() {
/*      this.$axios.$get('/produits')
        .then(response => this.Produits=response)
        .then(response => console.log(response))
        .catch(error => console.log(error))*/

      this.$axios.$get('/categorieproduits')
        .then(response => this.CategorieProduit=response)
        .then(response => console.log(response))
        .catch(error => console.log(error))

      this.$axios.$get('/commandes/last')
        .then(response => this.lastCommande=response)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    },
  }
</script>
