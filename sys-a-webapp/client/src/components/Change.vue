<template>
    <div>
        <h1>
            Alterar pedido
        </h1>
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
                        <v-card-title class="headline">Pedido alterado.</v-card-title>
                        <v-card-text> O pedido foi alterado. O novo nº do pedido é: {{this.inserted_id}} </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="reload">Voltar atrás</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-row>
            </template>
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
        <v-form
        v-model = "validForm"
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
                            Data do Pedido : {{item.date}}
                        </p>
                        <p>
                            Descrição antiga : {{item.clinical_info}}
                        </p>
                        <v-text-field
                        label = "Descrição atualizada"
                        v-model = "description"
                        :rules="[v => (v || '').length > 0 || 'É necessário adicionar uma descrição ao pedido.', v => (v || '').length <= 300 || 'É permitido um máximo de 300 carateres']"
                        required
                        >
                        </v-text-field>
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
                    :disabled = "!validForm"
                    @click="updateRequest"
                    >
                        Submeter
                    </v-btn>
                </v-card>
            </v-container>
        </v-form>
    </div>
</template>

<script>

import WLRequestsService from "../db/wl_requests";

export default {
    name : "Change",
    data: () => ({
        isFormValid : true,
        validForm : true,
        req_number : null,
        bad_id : false,
        good_id : false,
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
                break;
            }
        },
        async updateRequest() {
            var res = await WLRequestsService.updateRequest(this.requests[0].id, this.description, this.requests[0].medical_act_id, this.requests[0].episode_id, this.requests[0].patient_id);
            if (res.code == 200) {
                console.log("Sucessful insert");
                this.inserted_id = res.inserted_id;
                this.good_id = true;
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

<style scoped>

h1 {
  padding-top : 25px;
  padding-bottom : 25px;
  margin : auto;
  text-align : center;
}

</style>