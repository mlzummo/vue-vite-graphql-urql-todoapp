import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import urql, { cacheExchange, fetchExchange } from '@urql/vue'

import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';          

const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);

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
