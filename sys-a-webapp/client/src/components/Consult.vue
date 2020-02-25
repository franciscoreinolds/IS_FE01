<template>
    <div>
        <h1>
            Consultar Pedido
        </h1>
        <v-container
        class = "pa-5"
        >
            <v-form
            v-model = "isFormValid"
            >
                <!-- Cards -->
                <template>
                    <v-row justify="center">
                        <v-dialog v-model="bad_id" persistent max-width="500">
                        <v-card>
                            <v-card-title class="headline">Número de CC inválido.</v-card-title>
                            <v-card-text>O número de CC inserido não é válido, por favor verifique-o e insira-o de novo.</v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" text @click="bad_id = false">Voltar atrás</v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </v-row>
                    <v-row justify="center">
                        <v-dialog v-model="bad_data" persistent max-width="500">
                        <v-card>
                            <v-card-title class="headline">Número de pedido inválido.</v-card-title>
                            <v-card-text>O número de pedido inserido não é válido, por favor verifique-o e insira-o de novo.</v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" text @click="bad_data = false">Voltar atrás</v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </v-row>
                    <v-row justify="center">
                        <v-dialog v-model="no_requests" persistent max-width="500">
                        <v-card>
                            <v-card-title class="headline">Pedido(s) não encontrado(s).</v-card-title>
                            <v-card-text>Não foram encontrados pedidos associados à informação fornecida.</v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" text @click="no_requests = false">Voltar atrás</v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </v-row>
                </template>

                <!-- Form boxes -->
                <v-select
                :items = "requirements"
                item-text = "name"
                item-value = "value"
                v-model = "req"
                label = "Requisito a filtrar por (Nº de CC / Pedido)"
                :rules="[(v) => !!v || 'É necessário selecionar um requisito.']"
                required
                outlined
                >
                </v-select>

                <v-text-field
                v-model = "req_number"
                label = "Número"
                :rules="[v => (v || '').length > 0 || 'É necessário inserir um número.']"
                required
                outlined
                >

                </v-text-field>

                <v-btn
                class = "mr-4"
                color = "teal lighten-5"
                :disabled = "!isFormValid"
                @click = "getRequests"
                >
                Consultar
                </v-btn>
            </v-form>
        </v-container>

        <!-- Results -->

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
                </p>
                <p v-if="item.in_worklist == 1 && item.status == 1">
                    Estado do pedido: Exame por analisar.
                </p>
                <p v-if="item.in_worklist == 0 && item.status == 0">
                    Relatório : {{item.report}}
                </p>
            </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>

import RequestService from '../db/requests';

export default {
    name : "Consult",
    data: () => ({
        isFormValid : true,
        requirements : [
            {
                name : "CC",
                value : 1
            },
            {
                name : "Pedido",
                value : 2
            }
        ],
        req : null,
        req_number : null,
        bad_id : false,
        bad_data : false,
        no_requests : false,
        requests : []
    }),
    methods : {
        async getRequests() {
            var res = await RequestService.getRequests(this.req, this.req_number);
            switch(res.code) {
                case 201:
                    this.no_requests = true;
                break;
                case 400:
                    // Bad Request
                    this.bad_data = true;
                break;
                case 401:
                    // Bad ID
                    this.bad_id  = true;
                break;
                default:
                    // It worked
                    console.log(res.results[0]);
                    this.requests = [... res.results];
                    // in_worklist : 0 status : 0 => cancelled -> 0
                    // in_worklist : 0 status : 1 => written_report -> 1
                    // in_worklist : 1 status : 0 => to_examine -> 2
                    // in_worklist : 1 status : 1 => to_analyze -> 3

                break;
            }
        }
    }
}
</script>

<style scoped>

h1 {
  padding-top : 25px;
  padding-bottom : 25px;
  margin : auto;
  text-align : center;
}

</style>