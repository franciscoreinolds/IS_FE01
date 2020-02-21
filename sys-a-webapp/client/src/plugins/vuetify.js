import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify, {
    icons : {
        iconfont: 'mdi',
    }
});

export default new Vuetify({
});
