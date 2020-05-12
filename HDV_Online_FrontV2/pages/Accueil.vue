<template>
    <v-container class="pr-6">
      <v-carousel :show-arrows="false">
        <v-carousel-item
          v-for="(item,i) in itemsCarousel"
          :key="i"
          :src="require('@/assets/ressources/' + item.src)"
        ></v-carousel-item>
      </v-carousel>
      <v-container fluid>
        <tbody>
        <v-system-bar style="width: 100%">Top Fournitures</v-system-bar>


          <v-layout row>
            <v-flex md3 v-for="(produit) in itemsVente" :key="produit.title">
              <v-card
                style="height: 350px;"
                class="ml-5 mx-auto my-8"
                max-width="400"

              >
                <v-img
                  height="200px"
                  contain
                  :src="require('@/assets/ressources/' + produit.src)"
                ></v-img>

                <v-card-title>
                  {{ produit.titre }}
                </v-card-title>

                <v-card-subtitle>
                  {{ produit.description}}
                </v-card-subtitle>
                <v-card-text>PRIX: {{produit.prix}}€</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>

        <v-system-bar style="width: 1725px">Produits à bas prix</v-system-bar>


          <v-layout row class="my-5">
            <v-flex md4 v-for="(produit) in itemsVentePromo" :key="produit.title">
              <v-card
                style="height: 350px;"
                class="ml-5 mt-3 mx-auto"
                max-width="500"
              >
                <v-img
                  height="200px"
                  contain
                  :src="require('@/assets/ressources/' + produit.src)"
                >

                </v-img>

                <v-card-title>
                  {{ produit.titre }}
                </v-card-title>

                <v-card-subtitle>
                  {{ produit.description}}
                </v-card-subtitle>
                <v-card-text>PRIX: {{produit.prix}}€</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>


        <v-row style="height: 1000px;">

        </v-row>

        </tbody>
      </v-container>
      <v-footer
        dark
        padless
      >
        <v-card
          flat
          tile
          class="orange lighten-1 white--text text-center"
        >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            © 2020 CesiCorp. Tous droits réservés.En vous inscrivant sur DOFUS, vous vous engagez à respecter un certain nombre de règles. Celles-ci sont là pour maintenir une ambiance conviviale et optimiser le confort de jeu de chaque joueur. Dans le cas où un joueur choisit de contrevenir à ces règles, il doit savoir qu'il s'expose à des sanctions.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>DofusSHOP</strong>
          </v-card-text>
        </v-card>
      </v-footer>
  </v-container>
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
      itemsCarousel: [
        {

          src: 'wallpaper/carrousel1.jpg',
        },
        {
          src: 'wallpaper/carrousel2.jpg',
        },
        {
          src: 'wallpaper/carrousel3.jpg',
        },
        {
          src: 'wallpaper/carrousel4.jpg',
        },
      ],
      itemsVente: [
        {titre:'Top vente de bois Dofus', description:'1000 unités de bois', prix:'10',src:'bucherons/chataigner.png'},
        {titre:'Top vente de minerais Dofus', description:'1000 unités de minerais', prix:'15',src:'mineur/argent.png'},
        {titre:'Top vente de fer Dofus', description:'1000 unités de fer', prix:'20',src:'mineur/fer.png'},
        {titre:'Top vente d\'or Dofus', description:"1000 unités d\'or", prix:'25',src:'mineur/or.png'},
        ],
      itemsVentePromo: [
        {titre:'Pack bois + ressources', description:'1000 unités de bois + 1000 unités de minerais + 1000 kamas', prix:'50',src:'pack_bois_1.png'},
        {titre:'Top vente de bois Dofus', description:'100 unités de bois', prix:'10',src:'bucherons/chene.png'},
        {titre:'Top vente de bois Dofus', description:'100 unités de fer', prix:'20',src:'bucherons/noyer.png'},
      ],

      show: false,
    }),
  }
</script>
