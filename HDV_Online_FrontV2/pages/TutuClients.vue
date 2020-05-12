<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          label="Recherche"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="clients"
        :search="search"
        v-on:click:row="dialogClient = !dialogClient"
      >
        <template v-slot:body="{ items }">
          <tbody>
          <tr v-for="item in items" :key="item.id" @click="clientId=(item.id-1), dialogClient=!dialogClient">
            <td>{{item.nomClient}}</td>
            <td>{{item.prenomClient}}</td>
            <td>{{item.prenomClient}}</td>
          </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>

    <v-row justify="center">
      <v-dialog v-model="dialogClient" persistent max-width="900px" v-on:click:outside="dialogClient=false" v-if="clientId!=null">
        <v-card>
          <v-toolbar flat color="primary" dark>
            <v-toolbar-title>{{civils}}</v-toolbar-title>
          </v-toolbar>
          <v-tabs vertical>
            <v-tab>
              <v-icon left>mdi-account</v-icon>
              Informations
            </v-tab>
            <v-tab>
              <v-icon left>mdi-at</v-icon>
              Coordonnées
            </v-tab>
            <v-tab>
              <v-icon left>mdi-access-point</v-icon>
              Incidents
            </v-tab>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>{{clients}}</p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-list>
                    <v-list-item-title class="text-center">Telephone</v-list-item-title>

                    <v-list-item @click="">
                      <v-list-item-action>
                        <v-icon>mdi-phone</v-icon>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Portable : </v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>

                        <v-icon>mdi-message-text</v-icon>
                      </v-list-item-action>
                    </v-list-item>

                    <v-list-item @click="" >
                      <v-list-item-action>
                        <v-icon>mdi-phone</v-icon>
                      </v-list-item-action>

                      <v-list-item-content >
                        <v-list-item-title>Fixe : {{coordonnee}} </v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-icon>mdi-message-text</v-icon>
                      </v-list-item-action>
                    </v-list-item>





                  </v-list>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>

                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-dialog>
    </v-row>

  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        listeClients:[],
        Coordonnees:'',
        Ville:'',
        search: '',
        headers: [
          {
            text: 'Ville',
            align: 'start',
            filterable: false,
            value: 'ville',
          },
          { text: 'Nom', value: 'nomClient' },
          { text: 'Prenom', value: 'prenomClient' }
        ],
        clients: [],
        dialogClient: false,
        clientId: null
      }
    },
    methods:{
      dialog(){
        console.log()
      }
    },
    mounted() {
      this.$axios.$get('https://localhost:5001/api/Clients')
        .then(response => this.clients=response)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }
</script>

<style scoped>

</style>
