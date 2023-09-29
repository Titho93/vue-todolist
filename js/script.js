const { createApp } = Vue;

createApp({

    data(){

        return{
            tasks: [
                'Chiavi',
                'Portafoglio',
                'Telefono'
            ],
            newTask:''
        }

    },
    methods:{
        addTask(){
            this.tasks.unshift(this.newTask)
        }
    }

}).mount('#app');
