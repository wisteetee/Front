<template>
    <v-container class="pr-6">
      <v-carousel :show-arrows="false">
        <v-carousel-item
          v-for="(item,i) in itemsCarousel"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>

      <v-container fluid>
        <tbody>
        <v-system-bar style="width: 1725px">Top Fournitures</v-system-bar>


          <v-layout row>
            <v-flex md3 v-for="(produit) in itemsVente" :key="produit.title">
              <v-card
                style="height: 350px;"
                class="ml-5 mx-auto my-8"
                max-width="400"

              >
                <v-img
                  height="200px"
                  src="require('produit.img')"
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
                  src="require('produit.img')"
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
          © 2020 CesiCorp. Tous droits réservés.Conditions d'utilisation - Politique de confidentialité - Conditions Générales de Vente - Mentions Légales - Gestion des cookies contenucontenucontenucontenucontenucontenucontenucontenucontenucontenucontenucontenucontenucontenucontenucontenucontenu
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
          src: 'https://static.ankama.com/ankama/cms/images/23/2019/02/27/978522.jpg',
        },
        {
          src: 'https://wallpapercave.com/wp/wp3076909.jpg',
        },
        {
          src: 'https://pbs.twimg.com/media/D9bJiu5WwAE92u1.jpg',
        },
        {
          src: 'https://i.goopics.net/K93l3.jpg',
        },
      ],
      itemsVente: [
        {titre:'Top vente de bois Dofus', description:'1000 unités de bois', prix:'10',img:'https://static.ankama.com/ankama/cms/images/23/2019/02/27/978522.jpg'},
        {titre:'Top vente de minerais Dofus', description:'1000 unités de minerais', prix:'15',img:'https://static.ankama.com/dofus/www/game/items/200/38017.png'},
        {titre:'Top vente de fer Dofus', description:'1000 unités de fer', prix:'20',img:'data:image/jpeg;base64,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'},
        {titre:'Top vente de bière Dofus', description:'1000 unités de bière', prix:'25',img:'https://static.ankama.com/dofus/www/game/items/200/38017.png'},
        ],
      itemsVentePromo: [
        {titre:'Pack argent + ressources', description:'1000 unités de bois + 1000 unités de minerais + 1000 kamas', prix:'50',img:'HDV_Online_FrontV2/ressources/bucherons/chene.png'},
        {titre:'Top vente de minerais Dofus', description:'1000 unités de minerais', prix:'15',img:'https://static.ankama.com/dofus/www/game/items/200/38017.png'},
        {titre:'Top vente de fer Dofus', description:'1000 unités de fer', prix:'20',img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEBUQEhIQFRISDxUQFRIVFQ8SERIVFRUXFhURFhoYHSkgGBolGxUWITEhJSkrLi4uFx8zODUtNygtLisBCgoKDQ0NFRANGisdFhkrKystNzcrKys3NywrNysrNzgrKystLSs3OCsrKysrKysrKystKysrKy0rKzcrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADsQAAICAAMEBggFBAEFAAAAAAABAgMEESEFEjFBBiJRYXGBEzJCUpGhscEUNHLR8AcVM4LxI2KSsuH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAAhEf/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqtobepqludac+cYJya8ciJ/fMRL/HhLMvel1V88gOgBzU8Xj5c6K/B77+Sf1NE8NiJevirPCC3V82wOqnZFatpeLSId218PD1rYeTz+hRUbDqb3puyf6pyyfkiXXsvDx4VV+O6m/mBnZ0rwq4SlLvik19S2wWMrtgp1yUovs5dzKvcjwSWWXDJZFf/bnXKV2HluSScnB/4ppatNcgOrBUbF29Xf1X1LVxg9H5FuAAAAAAAAAAAAAAAAAAAArNu7S9DDKOtk3uwiuOb5ljZNRTk3kks2+5HH4KyWIvniZeqm4VruXGX2+IFjs+lUQ0ylbLWyfHNvku5G2Um+LbPYxM4wA17h7Gptm9QN8a8gNW7loa5M3yRosXIDWn+55F668OHk9GJo1tgUV+B3pcXGcXpNcVl9fAtNm7fnW1Vieekblwfj3/AM1Pb691zfvSrkv9ozb+aZosrjJOMkmnxTA62Ek1mmmnqmtUz04rC4q7CvOOdlPFweblDvXb/OJ1WztoV3Q365Z9q5rxAlgAAAAAAAAAAAAABoxuJjXXKyXCKz8exAUPS3Gt7uFrfXsfWfux/mvwNmEw6hFQjwiskit2PCVkpYqfrWvq90OXxLiMewDbBG1Qz0PKot8iVCGQGNUMvEyaPZdoA0yRofab7WRrJpAa5mndb4JvwTYsmZ4e2xtRUnkBZWYKMq1FrXJa96Ty+r+JRW4acPWSXnHXv4lhtbblVdc8ppyjJ1vJ+rLdzy8cmfLIbVu9JKaslrJvJve595Nqu/RDszon+Iq0aa34+zJNpN+JTYbpDP2oxffqmXNdkLqLZRmt6NMpejaaku/saKjtMPbvQjP3oqXxWZsIWxZ54et/9iXw0+xNAAAAAAAAAAAAcxt+3098cLF9SPXta7Pd+3xOixNyhCU37MW/hyKLoxg86ndJ9a6bm3zcc8o/zvAyUMtFwWiX2RNw9DfHTu5k2NMVql58zyQBJLRDMweZjvAZuRqnZl4P6mN1yis2V9t7YG+2/N9yI87DTKbRq9Jm8gN2ebyRXdKekEcDRnHJ4i1ONUeOXJ2vuXLtfmS9oY+rC0TxFr6kFm8ss5N6RhHvb0+Z8U2lti3FXyxFr6031Y67sIL1YR7kv5qBaV4mXoUnJtyunOTbercYavt5m2mRV0T0S7H/AD6E+mQFpTIuNlYjdlPsnRZB+cW180ijw7Jc5tRbXFLMD6x0f/LV/p+7LAr+j/5av9P3ZYAAAAAAAAAAABhdWpRcXwkmn5nM9HsbKEJ4dpZ02NLPlF6peTzR1Jye0oeixyl7N8cv9uK+al8QOhoxalo9H8mbZIqDz+6KGj63dzQFnJmidumfz5Gyq2M1mnn3dhHxsc+r5gQLrs3n8DTOZveHXazxURXL4gRUpPw7SRVFcI6t6d5lKJzvT/bn4PBtxeWIxGdVWTycI5de5eCeS75ID5//AFL6SficT+FqlnRh5ZNrhZbwnPvS1ivN8ygoRAwVOrZa0wAl0FhhyFTEn0ICfQSrf8b8CPQiTd6j8APrPR/8tX+n7ssCv6P/AJav9P3ZYAAAAAAAAAAAAKHpfhJSpVkF16pKa8M0/ql8S+AHI/3KEoZwebfFcNx80+8iMn7d6PtN34fSXtQ5Nft9CowuJU8+Ulxi+Kf7d4Flh7msmnk0WNGLhPSb3Zdvsv8AYoZYlQcc+EpbmfY3w/bzJckBb4iG7xa+5Flcu8014nOKhL2fVfd7rPWgM/xWXCKz7Xr8j53/AFn69uGl24eX/sd+4nA/1Oi3OjsVc0v/ACT+4HCYWnTzJ1VZnRToiTXUApgTaIGFVZNpgBtoibsT6j8D2uB5iPUl4AfWOj/5av8AT92WBX9H/wAtX+n7ssAAAAAAAAAAAAAAAc70g6P+k/61PVtWunCXb/wdEAPmmMs36rITW7ZBJtf7xW9H4+RM2PjfSVre9aPVl4r7Pj5nUbb6P1YjV5xl7y5+ORw+KwFuCvW+86Z9Xf7Neq35vLPvAvZRNtNnJ+RohbyfxNriBIcTmOn2C3sPGznXZ8paP57p0tM+TNW18L6Siyv3oPLxWq+aQHyqqnRG+NRIqp0N0aQNNdZLqrPYV6GbmktfDLm32IDJGWHwll79HVFyb0cvZXb4lvsToxdiMpWZwq7Pal4/svid/s7Z1VMdyuKSyyz5sD3ZeHddMK3xjHJ+PElAAAAAAAAAAAAAAAAAACHtXZ8L6pVTSakmlnyZMAHzzcnRJUXZ6JKE37S5Jvt7+ZLhY1odbtHZ1d0NyxZrt0zXgc/d0Py1punHubeX3+gGiF68CXh8Qnpnr9Stu2Rjq9coWLu0b+H7ER45xeVldkGu7eS+GqAqtqYD0Vsocm96P6Xw/byIqR0O0rKsRUpqytSrerbyzi+5a55rs5kbZHRu3ESzbcafeyacvuBU4Wiy2e5VFylnlnrurx7fA7jo/wBEYVZWXdezsfBd3/z6l5szZdVEd2uKWmr5smgeJcj0AAAAAAAAAAAAAAAAAAAAAAAAAAYW0xkspRjJdjSZmAKuXR/Cuan6KOa155FnGKSySyS5LgegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k='},
      ],

      show: false,
    }),
  }
</script>
