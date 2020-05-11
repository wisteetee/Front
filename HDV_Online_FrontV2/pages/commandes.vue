<template>
  <v-container fluid>

    <v-data-table
      :headers="headers"
      :items="ListeCommande"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="name"
      show-expand
      class="elevation-1 pt-6 mt-6"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Commandes</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">More info about {{ item.name }}</td>
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

          desserts: [
            {
              name: '1',
              client: "1",
              date: 6.0,
              montant: 24,
              etat: 4.0,
            },
            {
              name: '2',
              client: 159,
              date: 6.0,
              montant: 24,
              etat: 4.0,
            },
            ],
          ListeCommande: [],
        }
      },
      mounted() {
        this.$axios.$get('https://localhost:5001/api/Pays')
          .then(response => this.ListeCommande=response)
          .then(response => console.log(response))
          .catch(error => console.log(error))
      }
    }
</script>
