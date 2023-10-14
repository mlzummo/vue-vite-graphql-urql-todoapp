import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";
import "./style.css";
// import "./flags.css";


import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import urql, { cacheExchange, fetchExchange } from '@urql/vue'

import Ripple from 'primevue/ripple';
import ConfirmationService from 'primevue/confirmationservice';
import DialogService from 'primevue/dialogservice';
import { router } from "./router";
// import './assets/main.css'
// import 'primevue/resources/themes/saga-blue/theme.css';
// import 'primevue/resources/primevue.min.css';
// import 'primeicons/primeicons.css';          
// import 'primevue/resources/themes/lara-dark-teal/theme.css'

const app = createApp(App);
app.use(PrimeVue, {ripple: true});
app.use(ToastService);

app.use(DialogService);
app.use(ConfirmationService)
app.use(router);


app.use(urql, {
    url: 'https://aware-donkey-56.hasura.app/v1/graphql',
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
        // const token = getToken();
        const token = 'ViR8RukbTpJAIfgMUFgUXfOUAJt0EA4mymD8hYWzUTNByJ6LGhu5N12XXFr3sQIv'
        return {
             headers: { 
                // authorization: token ? `Bearer ${token}` : '',
                // 'x-hasura-admin-secret' : 'ViR8RukbTpJAIfgMUFgUXfOUAJt0EA4mymD8hYWzUTNByJ6LGhu5N12XXFr3sQIv'
            },
            
        };
    }
});

app.component('Button', Button);
app.component('Toast', Toast);

app.mount('#app');
