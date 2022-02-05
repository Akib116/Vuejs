var app = Vue.createApp({
    data() {
        return {
            activeClass:""
        };
    },
    methods: {
        setClass(classname){
            this.activeClass=classname;
        }
    }
});

app.mount("#app");