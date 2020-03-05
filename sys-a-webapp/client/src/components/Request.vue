<template>
    <div>
        <h1>
            Efetuar Pedido
        </h1>
        <v-container
        >
            <v-form
            ref = "form"
            v-model="isFormValid"
            >
             <template>
                <v-row justify="center">
                    <v-dialog v-model="bad_id" persistent max-width="500">
                    <v-card>
                        <v-card-title class="headline">Dados inválidos.</v-card-title>
                        <v-card-text>Os dados fornecidos são inválidos. Por favor verifique-os e volte a tentar de novo.</v-card-text>
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
                        <v-card-title class="headline">Pedido registado.</v-card-title>
                        <v-card-text> O Pedido foi registado com o nº {{this.inserted_id}} </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="good_id = false">Voltar atrás</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-row>
            </template>
                <v-text-field
                outlined
                v-model="episode_id"
                label="Número do Episódio Médico"
                :rules="[(v) => !!v || 'É necessário inserir o número do episódio.']"
                required
                >
                </v-text-field>
                <v-select
                v-model="type_id"
                :items="medical_acts"
                item-value="id"
                item-text="name"
                label="Tipo de Ato Médico"
                outlined
                :rules="[(v) => !!v || 'É necessário selecionar o tipo de ato médico.']"
                required
                ></v-select>
                <v-textarea
                v-model="description"
                outlined
                label="Descrição do Pedido"
                :rules="[v => (v || '').length > 0 || 'É necessário adicionar uma descrição ao pedido.', v => (v || '').length <= 300 || 'É permitido um máximo de 300 carateres']"
                required
                >
                </v-textarea>
                <v-row>
                    <v-btn
                    class = "mr-4"
                    color = "teal lighten-5"
                    :disabled="!isFormValid"
                    @click="createRequest"
                    >
                        Submeter
                    </v-btn>
                    <v-btn
                    color = "teal lighten-5"
                    @click = "reset"
                    >
                        Recomeçar
                    </v-btn>    
                </v-row>
            </v-form>
        </v-container>
    </div>
</template>

<script>

import MedicalActs from '../db/medical_acts';
import WLRequests from '../db/wl_requests';
import Requests from '../db/requests';

export default {
    name : "Request",
    data: () => ({
        isFormValid : true,
        medical_acts : [],
        episode_id : null,
        type_id : null,
        description : '',
        bad_id : false,
        good_id : false,
        inserted_id : null
    }),
    async created () {
        try {
            this.medical_acts = await MedicalActs.getActs();
        } catch (err) {
            console.log(err.message);
        }
    },
    methods : {
      reset () {
        this.$refs.form.reset()
      },
        async createRequest() {
            var res = await WLRequests.insertRequest(this.episode_id, this.type_id, this.description);
            if (res.code == 400) this.bad_id = true;
            else {
                this.inserted_id = res.inserted_id;
                this.good_id = true;
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