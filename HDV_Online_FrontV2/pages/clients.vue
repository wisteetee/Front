<template>
  <!-- Tableau Client -->
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
          <tr v-for="item in items" @click="displayItems(item)">
            <td>{{item.prenomClient}}</td>
            <td>{{item.nomClient}}</td>
            <td>{{item.numeroPortable}}</td>
          </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>

    <!-- Informations et Coordonnées Clients -->

    <v-row justify="center">
      <v-dialog v-model="dialogClient" persistent max-width="900px" v-on:click:outside="dialogClient=false" v-if="clientId!=null">
        <v-card>
          <v-toolbar flat color="amber" dark>
            <v-toolbar-title></v-toolbar-title>
          </v-toolbar>
          <v-tabs vertical flat color="amber">
            <v-tab >
              <v-icon left >mdi-account</v-icon>
              Informations
            </v-tab>
            <v-tab>
              <v-icon left>mdi-at</v-icon>
              Coordonnées
            </v-tab>
            <!-- Informations du Clients -->

            <v-tab-item>
              <v-card flat>
                <v-card-text v-for="coordonnee in clients[clientId].coordonnees" :key="coordonnee.id">
                  <p> {{clients[clientId].nomClient}} {{clients[clientId].prenomClient}}</p>
                  <p> Née le : {{clients[clientId].dateDeNaissance.substr(0, 10)}}</p>
                  <p> Habite à : {{coordonnee.adresse}} à {{coordonnee.ville}} {{coordonnee.code_Postal}}</p>
                  <p> Date de la création du compte : {{clients[clientId].dateCreationCompte.substr(0, 10)}}</p>
                  <p> Nombre de commandes passés : {{clients[clientId].nbCommandesPassees}}</p>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <!--Coordonnées du Client -->

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
                        <v-list-item-title>Portable : {{clients[clientId].numeroPortable}} </v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>

                        <v-icon>mdi-message-text</v-icon>
                      </v-list-item-action>
                    </v-list-item>

                    <v-list-item-title class="text-center mt-2">Adresse</v-list-item-title>

                    <v-list-item @click="" v-for="coordonnee in clients[clientId].coordonnees" :key="coordonnee.id">
                      <v-list-item-action>
                        <v-icon>mdi-map-marker </v-icon>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>{{coordonnee.adresse}} à {{coordonnee.ville}} {{coordonnee.code_Postal}}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item-title class="text-center">Email</v-list-item-title>

                    <v-list-item @click="">
                      <v-list-item-action>
                        <v-icon>mdi-at</v-icon>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Email : {{clients[clientId].emailClient}} </v-list-item-title>
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
    middleware:'auth-admin',

    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Nom',
            align: 'start',
            filterable: false,
            value: 'nomClient',
          },
          { text: 'Prénom du client', value: 'PrenomClient' },
          { text: 'NumeroPortable', value: 'NumeroPortable' },
        ],
        clients: [],
        dialogClient: false,
        clientId: null
      }
    },
    methods:{
      displayItems(items){
        console.log()
        this.clientId=this.clients.indexOf(items)
        this.dialogClient=true
      }
    },
    mounted() {
      this.$axios.$get('https://localhost:44391/api/Clients')
        .then(response => this.clients=response)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }
</script>

<style scoped>

</style>
