import {  ref , computed } from "vue"
import { useStore } from "vuex"
import { getUserStatus } from '@/api'
import { Env } from '@/types/env'
import useRouterUtil from '@/composable/util/useRouter'
export default function useLogin(){
    //其他composable
    const { routerPush } = useRouterUtil()
    //響應式資料
    const userNameInput = ref('')
    const env = ref<Env>(Env.DEV)
    //store
    const store = useStore()
    const isPending = computed(()=>{
        return store.state.user.loginPending
    })
    
    //方法
    function loginRequest(userAccount:string,env:Env){
        sessionStorage.setItem('env',JSON.stringify(env))
        store.commit('user/setLoginPending',true)
        getUserStatus({userId:userAccount})?.then(res => {
            let {ErrorCode , Message} = res.data
            switch(ErrorCode){
                case 0: //登入成功
                // console.log(res.data)
                sessionStorage.setItem('userName',userAccount)
                store.commit("user/getUser",userAccount)
                routerPush("/Home")
                    break;
                case 5: //DB錯誤
                alert(Message)
                    break;
                case 7: //找不到該筆資料
                alert("查無該帳號")
                    break;
            }
            store.commit('user/setLoginPending',false)
          })
          .catch(e=>{
            alert('oops~!發生錯誤了')
            store.commit('user/setLoginPending',false)
          })
    }
    function logout(){
        sessionStorage.removeItem('userName')
        routerPush("/")
    }
    function switchEnv(envType:Env){
        env.value = envType
    }
    return {
        //data
        userNameInput,
        isPending,
        env,
        //methods
        loginRequest,
        logout,
        switchEnv,
    }
}