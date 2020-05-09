<template>
  <v-app id="keep">
    <v-app-bar
      app
      clipped-left
      color="amber"
    >

      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <span link to="/">
      <span class="title ml-3 mr-5">Dofus&nbsp;<span class="font-weight-light">Shop</span></span>
      </span>
      <v-btn icon fab mx-2>
        <v-icon>mdi-account</v-icon>
      </v-btn>
        <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        class="mr-5"
      />

      <v-btn text to="/" v-if="this.$auth.loggedIn && this.$auth.user.role==='Utilisateur'">Utilisateur</v-btn>
      <v-btn text to="/" v-if="this.$auth.loggedIn && this.$auth.user.role==='Admin'">Admin</v-btn>
      <v-btn text to="/" v-if="this.$auth.loggedIn && this.$auth.user.role==='Commercial'">Commercial</v-btn>
      <v-btn text to="/" v-if="this.$auth.loggedIn && this.$auth.user.role==='Editeur'">Editeur</v-btn>

      <div v-if="this.$auth.loggedIn">
        Vous êtes connecté {{this.$auth.user.email}}
        <v-btn text @click="logout">Deconnexion</v-btn>
      </div>
      <div v-if="!this.$auth.loggedIn">
        Vous n'etes pas connecté
        <v-btn text to="/login">Connexion</v-btn>
        <v-btn text to="/register">Inscription</v-btn>
      </div>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="amber darken-2"
    >
      <v-list
        dense
        class="amber darken-2"
      >

        <template v-for="(item, i) in items">
          <v-list-item
            :key="i"
            link
            :to="item.route"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="black--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>


<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: [
        { icon:'mdi-home', text: 'Accueil', route:'/' },
        { icon: 'mdi-cart-arrow-down', text: 'Commandes', route:'/commandes' },
        { icon: 'mdi-account', text: 'Clients', route:'/clients' },
        { icon: 'mdi-folder-search-outline', text: 'Produits', route:'/produits' },
      ],
    }),
    methods:{
      async logout(){
        await this.$auth.logout()
      }
    }
  }
</script>
