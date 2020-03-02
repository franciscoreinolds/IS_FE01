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
  import List from "./components/List"
  import Footer from "./components/Footer"

  export default {
    components : {
      Navbar, List, Footer
    },
    data: () => ({
      
    }),
  }
</script>

<style lang="scss">

.router { 
  margin : 50px;
}

</style>