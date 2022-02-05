var app = Vue.createApp({
    data() {
        return {
            msg: "welcome to vue JS",
            personalInfo: {
                name: "AKIB",
                githublink: "https://github.com/Akib116",

            },
        
             htmlcode:
                '<a href="https://www.w3schools.com/html/html_examples.asp">html</a>'
               

        };
    }
});

app.mount("#app");