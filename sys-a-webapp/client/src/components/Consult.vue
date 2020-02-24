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
                <p v-if="item.status == 0">
                    Estado do pedido: Exame por realizar.
                </p>
                <p v-else>
                    Estado do pedido: Exame realizado. Relatório por escrever.
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
        requests : []
    }),
    methods : {
        async getRequests() {
            var res = await RequestService.getRequests(this.req, this.req_number);
            switch(res.code) {
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
                break;
            }
        }
    }
}
</script>

<style scoped>

h1 {
  padding-top : 25px;
  margin : auto;
  text-align : center;
}

</style>