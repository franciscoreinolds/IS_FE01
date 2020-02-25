
<template>
    <div>

        <!-- HEADER -->

        <h1>
            Cancelar Pedido
        </h1>

        <!-- POPUPS -->

        <template>
            <v-row justify="center">
                <v-dialog v-model="bad_id" persistent max-width="500">
                <v-card>
                    <v-card-title class="headline">Dados inválidos.</v-card-title>
                    <v-card-text>Não existe nenhum pedido alterável com esse número de identificação.</v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="bad_id = false">Voltar atrás</v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-row>
            <v-row justify="center">
                <v-dialog v-model="good_id" persistent max-width="500">
                <v-card>
                    <v-card-title class="headline">Pedido cancelado.</v-card-title>
                    <v-card-text> O pedido foi cancelado.</v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="reload">Voltar atrás</v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-row>
            <v-row justify="center">
                <v-dialog v-model="bad_cancellation" persistent max-width="500">
                <v-card>
                    <v-card-title class="headline">Cancelamento falhou.</v-card-title>
                    <v-card-text> O cancelamento do pedido falhou. Verificar cancelamento do pedido.</v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="reload">Voltar atrás</v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-row>
        </template>

        <!-- FORM -->

        <v-form
        v-model="isFormValid"
        class = "pa-5"
        >
            <v-text-field
            label = "Nº do Pedido"
            v-model = "req_number"
            :rules="[v => (v || '').length > 0 || 'É necessário inserir um número.']"
            required
            outlined
            >
            </v-text-field>
            <v-btn
            :disabled = "!isFormValid"
            color = "teal lighten-5"
            @click = "getWLRequests"
            >
            Procurar
            </v-btn>
        </v-form>

        <!-- Cancel Form -->

        <v-form>
            <!-- Card -->
            <v-container>
                <v-card
                class = "ma-1"
                text-align = "center"
                v-for="item in requests"
                :key="item.index"
                >
                    <v-card-title
                    v-model = "cancel_req"
                    >
                        Pedido nº: {{item.id}}
                    </v-card-title>
                    <v-card-text>
                        <p>
                            Data do Pedido : {{item.date}}
                        </p>
                        <p>
                            Descrição antiga : {{item.clinical_info}}
                        </p>
                        <p v-if="item.status == 0">
                            Estado do pedido: Exame por realizar.
                        </p>
                        <p v-else>
                            Estado do pedido: Exame realizado. Relatório por escrever.
                        </p>
                    </v-card-text>
                    <v-btn
                    class = "mb-2 ml-2"
                    color = "teal lighten-5"
                    @click="cancelRequest"
                    >
                        Cancelar Pedido
                    </v-btn>
                </v-card>
            </v-container>
        </v-form>
    </div>
</template>

<script>

import WLRequestsService from "../db/wl_requests";

export default {
    name : "Cancel",
    data: () => ({
        isFormValid : true,
        req_number : null,
        cancel_req : null,
        bad_id : false,
        good_id : false,
        bad_cancellation : false,
        inserted_id : null,
        requests : [],
        description : ""
    }),
    methods : {
        async getWLRequests() {
            var res = await WLRequestsService.getWLRequests(this.req_number);
            switch(res.code) {
                case 401:
                    // Bad ID
                    console.log("hey");
                    this.bad_id  = true;
                break;
                default:
                    // It worked
                    this.requests = [... res];
                    this.cancel_req = this.requests[0].id;
                break;
            }
        },
        async cancelRequest() {
            console.log("Cancelar pedido n: " + this.cancel_req);
            var res = await WLRequestsService.cancelRequest(this.cancel_req);
            if (res.code == 200) {
                console.log("Sucessful cancellation");
                this.good_id = true;
            }
            else {
                this.bad_cancellation = true;
                console.error("Oops");
            }
        },
        reload() {
            this.$router.go();
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