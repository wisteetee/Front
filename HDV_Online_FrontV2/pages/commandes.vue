<template>
  <v-container fluid>
    <v-row>

    </v-row>
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
        }
      },
    }
</script>
