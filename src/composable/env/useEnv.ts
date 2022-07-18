import { ref, computed } from "vue"
import { Env } from '@/types/env'
//共用響應式資料
let sessionEnv = JSON.parse(sessionStorage.getItem('env') as string)
const env = ref<Env>(sessionEnv ? sessionEnv : Env.DEV)
export default function useEnv() {
    //響應式資料
    const envStr = computed<string>(()=>{
        return Env[env.value]
    })
    return {
        //data
        env,
        envStr,
    }
}