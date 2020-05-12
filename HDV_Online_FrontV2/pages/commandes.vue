<template>
  <v-container fluid>




    <v-data-table
      :headers="headers"
      :items="ListeCommande"
      :search="search"
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
          <td>{{item.nomPays}} </td>
          <td>{{item.client}}</td>
          <td>{{item.date}}</td>
          <td>{{item.montant}}</td>
          <td>{{item.etat}}</td>
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
          headers: [
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
          ListeCommande: [],
          CommandeId:null,
        }
      },
      methods:{
        displayItem (item) {
          console.log(item),
            this.CommandeId = this.ListeCommande.indexOf(item)
        },
      },
      mounted() {
        this.$axios.$get('https://localhost:5001/api/Pays')
          .then(response => this.ListeCommande=response)
          .then(response => console.log(response))
          .catch(error => console.log(error))
      },
    }
</script>
