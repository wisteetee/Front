<template>
  <v-app id="keep">
    <v-app-bar
      app
      clipped-left
      color="amber"
    >

      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <span class="title ml-3 mr-5">Dofus&nbsp;<span class="font-weight-light">Shop</span></span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        class="mr-5"
      />

      <v-container>
        <v-layout row>
          <v-flex xs12 md6>
            <v-list-item two-line :class="miniVariant && 'px-0'">
              <v-list-item-avatar>
                <img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/13466152_1194024830637592_6664884706672312489_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=Ny3B59OkCMMAX9Iyr8X&_nc_ht=scontent-cdg2-1.xx&oh=33bedacfa3557c6d81a05422e0139346&oe=5ED92E4A">
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Application</v-list-item-title>
                <v-list-item-subtitle>Subtext</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-flex>
        </v-layout>
      </v-container>

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
          <v-row
            v-if="item.heading"
            :key="i"
            align="center"
          >


            <v-icon
              small
              class="mr-2"
              @click="displayItem(item)"
            >
              mdi-eye
            </v-icon>
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-right"
            >
              <v-btn
                small
                text
              >edit</v-btn>
            </v-col>
          </v-row>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-4"
          />
          <v-list-item
            v-else
            :key="i"
            link
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
      <v-container
        fluid
        class="grey lighten-4 fill-height"
      >
        <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1"
        >
          <template v-slot:item.calories="{ item }">
            <v-chip :color="getColor(item.calories)" dark>{{ item.calories }}</v-chip>
          </template>
        </v-data-table>z

      </v-container>
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
        { icon:'mdi-home', text: 'Tableau de bord', route:'/Accueil' },
        { icon: 'mdi-cart-arrow-down', text: 'Commandes', route:'/commandes' },
        { icon: 'mdi-account', text: 'Clients', route:'/clients' },
        { icon: 'mdi-folder-search-outline', text: 'Produits', route:'/produits' },
      ],
    }),
  }
</script>
