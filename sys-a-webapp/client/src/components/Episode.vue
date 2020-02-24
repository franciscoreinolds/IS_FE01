<template>
    <div>
        <h1>
            Registar Episódio Médico
        </h1>

        <v-form v-model="isFormValid">
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
                <v-dialog v-model="good_id" persistent max-width="500">
                <v-card>
                    <v-card-title class="headline">Episódio registado.</v-card-title>
                    <v-card-text> Nº de Episódio: {{this.episode_id}} </v-card-text>
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
            v-model="patient_id"
            label="Número de CC do Paciente"
            :rules="[(v) => !!v || 'É necessário inserir o número de CC do paciente.']"
            required
            >
            </v-text-field>
            <v-select
            :items="doctors_array"
            v-model = "doctor_id"
            label="Médico"
            item-text="name"
            item-value = "id"
            outlined
            :rules="[(v) => !!v || 'É necessária a seleção de um médico.']"
            required
            ></v-select>
            <v-select
            :items="episode_types"
            v-model = "type_id"
            label="Tipo de Episódio"
            item-text = "name"
            item-value = "id"
            outlined
            :rules="[(v) => !!v || 'É necessária a seleção de um tipo de episódio.']"
            required            
            ></v-select>
            <v-btn
            class = "mr-4"
            color = "teal lighten-5"
            :disabled="!isFormValid"
            @click="createEpisode"
            >
                Submeter
            </v-btn>
        
        </v-form>
    </div>    
</template>

<script>

import DoctorService from '../db/doctors';
import EpisodeTypeService from '../db/episode_types';
import EpisodeService from '../db/episodes';

export default {
    name : "Episode",
    data: () => ({
        doctors_array : [],
        episode_types : [],
        patient_id : null,
        doctor_id : null,
        type_id : null,
        bad_id : false,
        good_id : false,
        episode_id : null,
        isFormValid : true
    }),
    async created () {
        try {
            this.doctors_array = await DoctorService.getDoctors();
            this.episode_types = await EpisodeTypeService.getTypes();
        } catch (err) {
            console.log(err.message);
        }
    },
    methods : {
        async createEpisode() {
            var res = await EpisodeService.insertEpisode(this.patient_id, this.doctor_id, this.type_id);
            if (res.code == 400) this.bad_id = true;
            else {
                this.episode_id = res.inserted_id;
                this.good_id = true;
            }
        }
    }
}
</script>