const { createApp } = Vue;

createApp({

    data(){

        return{
            tasks: [
                {
                   text: 'Chiavi',
                   done: false
                },
                {
                   text: 'Portafoglio',
                   done: false
                },
                {
                   text: 'Telefono',
                   done: true
                },
            ],
            newTask:'',
            isError: false,
            isDone: true,
            message: ``
        }

    },
    methods:{
        addTask(){

            if(this.newTask.length < 3){
                this.isError = true
                this.message = ``
            }else {
                // this.tasks.unshift(this.newTask)
                this.tasks.unshift({ text: this.newTask, done: false });
                this.newTask = ''
                this.message = ``
                this.isError = false
            }

        },
    
        removeTask(index, isDone){

            if(isDone){
                this.tasks.splice(index, 1)
                this.message = ``
            }else {
                this.message = `Non puoi eliminare un task non svolto`
            }
        }
    }

}).mount('#app');
