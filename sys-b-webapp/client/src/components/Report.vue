<template>
    <v-form
      ref="form"
    >
        <v-col cols="12" md="12">
            <v-textarea
                v-model="newReport"
                solo
                name="report"
                label="Insira o relatório aqui"
                :counter="200"
                auto-grow
            ></v-textarea>
      </v-col>
      <v-btn
        v-bind:disabled="newReport === ''"
        color="teal lighten-5"
        class="mr-4"
        @click="sendRequest"
      >
        Submeter
      </v-btn>
    </v-form>
</template>

<script>
import WLRequests from '../db/wl_requests'

export default {
    data: () => ({
        newReport: ""
    }),
    methods : {
        async sendRequest() {
            await WLRequests.getWLRequests();
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