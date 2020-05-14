<template>
  <v-form v-model="valid" style="background-color: white">

    <v-text-field v-model="userInfo.Email"
                  label="Email"
                  :rules="[required('email'), emailFormat()]"/>

    <v-text-field v-model="userInfo.Password"
                  label="Mot de passe"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  counter=true
                  :rules="[required('mot de passe'), minLength('mot de passe', 4)]"
    />

    <v-text-field v-model="userInfo.name"
                  label="Confirmez le mot de passe"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  counter=true
                  :rules="[required('password'), minLength('password', 4), v => v===this.userInfo.Password || 'Correspondance incorrect avec le mot de passe saisis']"
                  v-if="hasPasswordConfirm" />

    <v-btn @click="submitForm(userInfo)" :disabled="!valid">{{buttonText}}</v-btn>
  </v-form>
</template>

<script>
  import validations from "@/utils/validations";
  export default {
    data() {
      return {
        valid: false,
        showPassword: false,
        userInfo: {
          Email: '',
          Password: ''
        },
        ...validations
      }
    },
    props: ["submitForm", "buttonText", "hasPasswordConfirm"]
  }
</script>

<style lang="scss" scoped>
</style>
