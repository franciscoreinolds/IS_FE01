<template>
    <div>
        <h1>List</h1>
        <v-container>
            <v-col
            cols = "12"
            >
                <v-card
                v-for="item in users"
                :key="item.index"
                >
                    {{item.name}}
                </v-card>
            </v-col>
        </v-container>
    </div>
</template>

<script>
import RequestService from '../db/requests'

export default {
    name : "List",
    data: () => ({
        users : [],
        error : '',
    }),
    async created () {
        try {
            this.users = await RequestService.getRequests();
        } catch( err) {
            this.error = err.mssage
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