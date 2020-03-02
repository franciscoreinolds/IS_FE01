<template>
    <div>
        <h1>Lista de pedidos</h1>
        <v-container>
            <v-col
                cols = "12"
            >
                <v-flex xs12 sm6 d-flex>
                    <v-select
                        :items="types"
                        label="Filtrar por:"
                    ></v-select>
                </v-flex>
                <v-card
                    class = "ma-1"
                    text-align = "center"
                    v-for="item in requests"
                    :key="item.index"
                >
                <v-card-title>
                    Pedido nº: {{item.id}}
                </v-card-title>
                <v-card-text>
                <p>
                    Nº CC do Paciente : {{item.patient_id}}
                </p>
                <p>
                    Data do Pedido : {{item.date}}
                </p>
                <p>
                    Descrição do pedido: {{item.clinical_info}}
                </p>
                <p v-if="item.in_worklist == 0 && item.status == 0">
                    Estado do pedido: Relatório disponível.
                </p>
                <p v-if="item.in_worklist == 0 && item.status == 1">
                    Estado do pedido: Pedido cancelado.
                </p>
                <p v-if="item.in_worklist == 1 && item.status == 0">
                    Estado do pedido: Exame por realizar.
                </p>
                <p v-if="item.in_worklist == 1 && item.status == 1">
                    Estado do pedido: Relatório por realizar.
                </p>
            </v-card-text>
            </v-card>
            </v-col>
        </v-container>
    </div>
</template>

<script>
import RequestService from '../db/requests'
import Navbar from './Navbar'
import Footer from './Footer'

export default {
    name : "List",
    components: {
        Navbar, Footer
    },
    data: () => ({
        requests : [],
        types : ['Todos','Relatório por realizar','Exame por realizar'],
        error : '',
    }),
    async created () {
        try {
            this.requests = await RequestService.getRequests();
        } catch( err) {
            this.error = err.mssage
        }
    }
}
</script>

<style lang="scss">

h1 {
  padding-top : 25px;
  margin : auto;
  text-align : center;
}

</style>