<template>
    <div>
    <v-footer
      app
      color = "teal lighten-5"
      class="footer white--text"
    >
        <span>
            EC - Interoperabilidade Semântica
        </span>
        <v-spacer />
        <span>
            &copy;
            2020
        </span>
    </v-footer>
    </div>
</template>

<script>
export default {
    name : "Footer"
}
</script>

<style scoped>

.footer {
    margin-top: 50px;
}

span {
    color:black
}

</style>