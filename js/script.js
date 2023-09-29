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
            this.newTask = ''
        },

        removeTask(index){
            this.tasks.splice(index, 1)
        }
    }

}).mount('#app');
