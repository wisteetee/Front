<template>
  <v-form v-model="valid" style="background-color: white">

    <v-text-field v-model="userInfo.Email"
                  label="Email"
                  :rules="[required('email'), emailFormat()]"/>

    <v-text-field v-model="userInfo.Password"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  counter=true
                  :rules="[required('mot de passe'), minLength('mot de passe', 8)]"
    />

    <v-text-field v-model="userInfo.name"
                  label="Confirm Password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  counter=true
                  :rules="[required('password'), minLength('password', 8)]"
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
