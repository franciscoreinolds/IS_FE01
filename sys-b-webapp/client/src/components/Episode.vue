<template>
    <div>
        <h1>
            Registar Episódio Médico
        </h1>
        <v-container>
            <v-form
                ref = "form"
                >
                <v-text-field
                outlined
                v-model="patient_id"
                label="Número de CC do Paciente"
                >
                </v-text-field>
            </v-form>
            <v-select
            :items="doctors_array"
            v-model = "doctor_id"
            label="Médico"
            item-text="name"
            item-value = "id"
            outlined
            ></v-select>
            <v-select
            :items="episode_types"
            v-model = "type_id"
            label="Tipo de Episódio"
            item-text = "name"
            item-value = "id"
            outlined
            ></v-select>
            <v-btn
            class = "mr-4"
            color = "teal lighten-5"
            @click="createEpisode"
            >
                Submeter
            </v-btn>
        </v-container>
    </div>    
</template>

<script>

import DoctorService from '../db/doctors';
import EpysodeTypeService from '../db/episode_types';

export default {
    name : "Episode",
    data: () => ({
        doctors_array : [],
        episode_types : [],
        patient_id : null,
        doctor_id : null,
        type_id : null
    }),
    async created () {
        try {
            this.doctors_array = await DoctorService.getDoctors();
            this.episode_types = await EpysodeTypeService.getTypes();
        } catch (err) {
            console.log(err.message);
        }
    },
    methods : {
        async createEpisode() {
            console.log("CC: " + this.patient_id + ", Doc_Id: " + this.doctor_id + ", Type_id: " + this.type_id);
        }
    }
}
</script>