<template>
    <div>
        <h1>Lista de pedidos</h1>
        <template>
                <v-row justify="center">
                    <v-dialog v-model="updated" persistent max-width="500">
                    <v-card>
                        <v-card-title class="headline">Exame realizado.</v-card-title>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="reload">Voltar atrás</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-row>
        </template>
        <template>
                <v-row justify="center">
                    <v-dialog v-model="updated_report" persistent max-width="500">
                    <v-card>
                        <v-card-title class="headline">Relatório realizado.</v-card-title>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="reload">Voltar atrás</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-row>
        </template>
        <v-container>
            <v-col
                cols = "12"
            >
                <v-select
                    v-model="currItem"
                    :items = "types"
                    item-text = "name"
                    item-value = "value"
                    label="Filtrar por:"
                ></v-select>
                <v-btn
                    color = "teal lighten-5"
                    class = "mr-4"
                    @click = "getRequests"
                    >
                    Filtrar
                </v-btn>
                <v-form
                >
                <v-container>
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
                        <br>
                        <br>
                        <v-btn
                            :new_id = "item.id"
                            :pat_id = "item.patient_id"
                            color="teal lighten-5"
                            @click="executeExam(item.id, item.patient_id)"
                        >
                        Efetuar Exame
                        </v-btn>
                    </p>
                    <p v-if="item.in_worklist == 1 && item.status == 1">
                        <v-textarea
                            v-model="newReport"
                            auto-grow
                            height="150"
                            label="Insira o relatório aqui"
                            :rules="[v => (v || '').length <= 500 || 'É permitido um máximo de 500 carateres']"
                        >
                        </v-textarea>
                        <v-btn
                            color="teal lighten-5"
                            class="mr-4"
                            @click="send_report(item.id)"
                        >
                        Submeter Relatório
                        </v-btn>
                    </p>
                    </v-card-text>
                </v-card>
                </v-container>
                </v-form>
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
        types : [
            { name: "Todos", value: 0 },
            { name: "Relatório por realizar", value: 1 },
            { name: "Exame por realizar", value: 2 }
        ],
        error : '',
        currItem : null,
        updated : false,
        updated_report : false,
        newReport : ""
    }),
    methods: {
        async getRequests() {
            console.log(this.currItem)
            this.requests = await RequestService.getRequests(this.currItem);
        },
        async executeExam(new_id,pat_id) {
            console.log(new_id)
            console.log(pat_id)
            var res = await RequestService.executeExam(new_id,pat_id);
            if (res.code == 200) {
                console.log("Sucessful update");
                this.updated = true;
                // this.$router.go()
            }
            else { 
                console.error("Oops");
            }
        },
        async send_report(new_id) {
            console.log(new_id)
            var res = await RequestService.send_report(new_id, this.newReport);
            if (res.code == 200) {
                console.log("Sucessful report written");
                this.updated_report = true;
                // this.$router.go()
            }
            else { 
                console.error("Oops");
            }
        },
        reload() {
            this.$router.go();
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