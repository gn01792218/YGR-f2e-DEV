import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/style.css'
createApp(App).use(router).use(store).mount('#app')
router.beforeEach((to,from ,next)=>{
    let userName = sessionStorage.getItem('userName')
    if(userName){
        next()
    }else{
        if(to.path==='/'){
            next()
        }else{
            alert('請重新登入')
            next('/')
        }
    }
})
