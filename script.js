const app = Vue.createApp({
    data() {
        return {
            message: "Hello Vue!"
        }
    },
    methods: {
        testMethod() {
            return this.message + "!";
        }
    }
})
app.mount('#app')
