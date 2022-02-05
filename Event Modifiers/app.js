var app = Vue.createApp({
    data() {
        return {
            name:""
        };
    },
    methods: {
        handleKeyup(e){
            this.name= e.target.value;
        },
        handleFormSubmit(e){

        }
    }
});

app.mount("#app");