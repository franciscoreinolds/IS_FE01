<template>
  <v-app id="inspire">
    <Navbar />
      <v-container>
        <router-view></router-view>
      </v-container>
    <Footer />
  </v-app>
</template>

<script>
  import Navbar from "./components/Navbar"
  import Home from "./components/Home"
  import Footer from "./components/Footer"
  
  import Request from "./components/Request"

  export default {
    components : {
      Navbar, Home, Footer, Request
    },
    data: () => ({
      
    }),
  }
</script>

<style lang="scss">

</style>