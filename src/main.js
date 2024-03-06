import { createApp } from 'vue'
import App from './App.vue'
import todo from "./components/todo.vue"


const app = createApp(App)
app.component("todo-item",todo)
app.mount('#app')
