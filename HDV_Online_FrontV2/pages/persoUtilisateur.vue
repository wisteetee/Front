<template>
  <v-container>
  <v-container v-if="this.$auth.user.client===null">
    <v-form
    v-model="valid"
    >
      <v-row>
        <v-col cols="4">
      <v-text-field
        v-model="InfoClient.PrenomClient"
        placeholder="Prenom"
        :rules="[required('Prenom')]"
      ></v-text-field>
        </v-col>
        <v-col cols="4">

        <v-text-field
        v-model="InfoClient.NomClient"
        placeholder="Nom"
        :rules="[required('Nom')]"
      ></v-text-field>
        </v-col>
        <v-col cols="4">

        <v-menu
        ref="menu"
        :rules="[required('')]"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="InfoClient.DateDeNaissance"
            label="Date de naissance"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          ref="picker"
          :rules="[required('Date de naissance')]"
          v-model="InfoClient.DateDeNaissance"
          :max="new Date().toISOString().substr(0, 10)"
          min="1950-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
      <v-text-field
        v-model="InfoClient.EmailClient"
        placeholder="Email"
        :rules="[required('Email'), emailFormat()]"
      ></v-text-field>
        </v-col>
        <v-col cols="6">

        <v-text-field
        v-model="InfoClient.NumeroPortable"
        placeholder="Numero de telephone"
        :rules="[required('Numero de telephone')]"
      ></v-text-field>
        </v-col>
      </v-row>
      <!--Coordonnées-->
      <v-text-field
        v-model="CoordoneeClient.Adresse"
        placeholder="Adresse"
        :rules="[required('Adresse')]"
      ></v-text-field>
      <v-row>
        <v-col cols="4">
      <v-text-field
        v-model="CoordoneeClient.Code_Postal"
        placeholder="Code Postal"
        :rules="[required('Code Postal')]"
      ></v-text-field>
        </v-col>
        <v-col cols="4">

        <v-text-field
        v-model="CoordoneeClient.Ville"
        placeholder="Ville"
        :rules="[required('Ville')]"
      ></v-text-field>
        </v-col>
        <v-col cols="4">

        <v-select
        placeholder="Pays"
        :rules="[required('Pays')]"
        :items="Pays"
        item-text="nomPays"
        item-value="id"
        v-model="CoordoneeClient.PaysId"
        ></v-select>
        </v-col>

      </v-row>
      <v-checkbox v-model="CoordoneeClient.Facturation" label="Adresse de facturation"></v-checkbox>
      <v-checkbox v-model="CoordoneeClient.Livraison" label="Adresse de livraison"></v-checkbox>

      <v-btn @click="envoisFormulaire" :disabled="valid">Envoyer</v-btn>
    </v-form>
  </v-container>
  <v-container v-else>
    <h2>Informations :</h2><br>
    <p>Nom : {{this.$auth.user.client.nomClient}}</p>
    <p>Prenom : {{this.$auth.user.client.prenomClient}}</p>
    <p>Date de naissance : {{this.$auth.user.client.dateDeNaissance.substr(0,10)}}</p>
    <p>Email : {{this.$auth.user.client.emailClient}}</p>
    <p>Numero de telephone : {{this.$auth.user.client.numeroPortable}}</p>
    <p>Date de création du compte : {{this.$auth.user.client.dateCreationCompte.substr(0,10)}}</p>

    <v-system-bar style="width: 100%" class="mt-5"></v-system-bar>

    <h2>Coordonnées</h2><br>
    <div v-for="item in DashboardInfo">
      <p>{{item.adresse}}</p>
      <p>{{item.code_Postal}} {{item.ville}}</p>
      <p>{{item.pays.nomPays}}</p>
    </div>

    <v-system-bar style="width: 100%" class="mt-5"></v-system-bar>

    <h2 align-content="center">Mes commandes</h2>
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
  </v-container>
</template>

<script>
  import validations from "../utils/validations";
    export default {
        name: "persoUtilisateur",
      data(){
          return{
            valid:false,
            dateActuelle:new Date().toISOString().substr(0,10),
            menu:false,
            date:null,
            Pays:[],
            InfoClient:{
              PrenomClient:'',
              NomClient:'',
              DateDeNaissance:'',
              EmailClient:'',
              NumeroPortable:'',
              DateCreationCompte:new Date().toISOString().substr(0,10),
              UtilisateurId:this.$auth.user.id,

            },
            CoordoneeClient:{
              ClientId:'',
              Code_Postal:'',
              Ville:'',
              Adresse:'',
              Facturation:true,
              Livraison:true,
              PaysId:''
            },
            Commandes:[],
            DashboardInfo:[],
            ...validations
          }
      },
      watch: {
        menu (val) {
          val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        },
      },
      methods: {
        save (date) {
          this.$refs.menu.save(date)
        },
        envoisFormulaire(){
          this.$axios.$post('/clients', this.InfoClient)
          .then(response => this.CoordoneeClient.ClientId=response.id)
          .then(this.$axios.$post('/coordonnees', this.CoordoneeClient))
        }
      },
      mounted() {
          this.$axios.$get('/pays')
        .then(response => this.Pays=response)
        if (this.$auth.user.client!=null){
          this.$axios.$get('/coordonnees/client/'+this.$auth.user.client.id)
            .then(response => this.DashboardInfo=response)
          this.$axios.$get('/commandes/client/'+this.$auth.user.client.id)
            .then(response => this.Commandes=response)
        }

      }
    }
</script>

<style scoped>

</style>
