const app = Vue.createApp({
    data() {
        return {
            message: "Template"
        }
    },
    methods: {
        testMethod() {
            return this.message + "!";
        }
    }
})
app.mount('#app')
