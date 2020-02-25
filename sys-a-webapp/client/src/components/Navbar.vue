<template>
  <div>
    <v-toolbar 
    color = "teal lighten-5"
    height = 60px
    > 
        <v-toolbar-items
        class = "hidden-md-and-down"
        >
            <v-btn
            class = "ma-2"
            outlined
            color = "#546E7A"
            max-height = 40px
            v-for="item in menu"
            :key="item.index"
            flat
            large
            >
                <router-link
                :to=item.link
                tag = "span"
                >
                    {{item.title}}
                </router-link>
            </v-btn>
        </v-toolbar-items>
        <v-menu
        offset-y
        >
            <template v-slot:activator="{ on }">
                <v-btn
                class = "ma-2 hidden-lg-and-up"
                rounded
                max-height = 40px
                v-on = on
                >
                <v-icon>
                    mdi-menu
                </v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="item in menu"
                :key="item.index"
                >
                <router-link
                :to=item.link
                tag="span"
                >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </router-link>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-spacer></v-spacer>
        <v-toolbar-title
        color = "dark"
        >
            <router-link
            to="/"
            tag="span"
            style="cursor: pointer"
            >
                <span
                color = "#546E7A"
                >
                    HL7 Sender
                </span>
            </router-link>
        </v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
    name : "Navbar",
    data :() => ({
        menu : [
            {
                title : "Registar Episódio",
                link : "/episode"
            },
            {
                title : "Efetuar Pedido",
                link : "/request"
            },
            {
                title : "Consultar Pedido",
                link : "/consult"
            },
            {
                title : "Alterar Pedido",
                link : "/change"
            },
            {
                title : "Cancelar Pedido",
                link : "/cancel"
            }
        ]
    }),
}
</script>

<style scoped>

.v-btn {
    width : max;
    height : max;
}


</style>