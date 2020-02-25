<template>
  <div>
    <h1>
      O que deseja fazer?
    </h1>
    <v-container>
      <v-row-dense>
        <v-col
        cols = "12"
        >
          <v-card
          class = "v-card"
            color = "teal lighten-5"
            height = 100
            max-height = 150
            dark
            v-for="item in menu"
            :key="item.index"
          >
            <v-card-actions
            class="justify-center"
            >
              <v-btn
              outlined
              color = "#546E7A"
              large
              >
              <router-link
              :to = item.link
              tag = "span"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </router-link>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row-dense>
    </v-container>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'

export default {
  name: 'Home',
  components: {
    Navbar, Footer
  },
  data :() => ({
        menu : [
            {
                title : "Registar Episódio",
                link : "/episode"
            },
            {
                title : "Efetuar Pedido",
                link : "/request"
            },
            {
                title : "Consultar Pedido",
                link : "/consult"
            },
            {
                title : "Alterar Pedido",
                link : "/change"
            },
            {
                title : "Cancelar Pedido",
                link : "/cancel"
            }
        ]
    }),
}
</script>

<style scoped>

h1 {
  padding-top : 25px;
  padding-bottom : 25px;
  margin : auto;
  text-align : center;
}

.v-card {
  padding : 25px;
  margin : 2px 2px;
}

</style>
