import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                background: '#282a36',
                selection: '#44475a',
                foreground: '#f8f8f2',
                comment: '#6272a4',
                cyan: '#8be9fd',
                green: '#50fa7b',
                orange: '#ffb86c',
                pink: '#ff79c6',
                purple: '#bd93f9',
                red: '#ff5555',
                yellow: '#f1fa8c',
            },
        },
    },
});
