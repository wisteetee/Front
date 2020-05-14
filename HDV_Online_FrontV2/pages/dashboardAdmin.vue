<template>
 <h2>Dashboard Admin</h2>
</template>

<script>
    export default {
      middleware:'auth-admin',
        name: "dashboardAdmin",
      data(){
        return{

        }
      }
    }
</script>

<style scoped>

</style>
