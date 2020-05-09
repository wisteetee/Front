<template>
  
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
