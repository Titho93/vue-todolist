const { createApp } = Vue;

createApp({

    data(){

        return{
            tasks: [
                'Chiavi',
                'Portafoglio',
                'Telefono'
            ]
        }

    }

}).mount('#app');
