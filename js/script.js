const { createApp } = Vue;

createApp({

    data(){

        return{
            tasks: [
                'Chiavi',
                'Portafoglio',
                'Telefono'
            ],
            newTask:'',
            isError: false
        }

    },
    methods:{
        addTask(){
            if(this.newTask.length < 3){
                this.isError = true
            }else {
                this.tasks.unshift(this.newTask)
                this.newTask = ''
                this.isError = false
            }
        },

        removeTask(index){
            this.tasks.splice(index, 1)
        }
    }

}).mount('#app');
