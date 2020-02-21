<template>
    <div>
        <h1>
            Efetuar Pedido
        </h1>
        <v-container>
            <v-form
                ref = "form"
                >
                <v-text-field
                outlined
                v-model="name"
                label="Número de CC do Paciente"
                >
                </v-text-field>
            </v-form>
            <v-select
            :items="items"
            label="Tipo de Ato Médico"
            outlined
            ></v-select>
            <v-textarea
            outlined
            value="Descrição do Pedido"
            >
            </v-textarea>
            <v-row>
                <v-btn
                class = "mr-4"
                color = "teal lighten-5">
                    Submeter
                </v-btn>
                <v-btn
                color = "teal lighten-5">
                    Recomeçar
                </v-btn>    
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name : "Request",
    data: () => ({
        items : [
            'asdasd',
            'adasdas',
            'adasdasdas'
        ]
    })
}
</script>

<style scoped>

h1 {
  padding-top : 25px;
  margin : auto;
  text-align : center;
}

</style>