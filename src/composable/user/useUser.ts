import { computed } from "vue";
import { useStore } from "vuex";
import useUserMoney from "./useUserMoney";
export default function useUser() {
    //其他composable
    const { plusMoneyInput , addMoney , clearUserMoney } = useUserMoney()
    //store
    const store = useStore()
    const userName = sessionStorage.getItem('userName')
    // const userName = computed<string>(() => {
    //     return store.state.user.userData.userId
    // })
    const isPending = computed<boolean>(()=>{
        return store.state.user.loginPending
    })
    return {
        //data
        plusMoneyInput,
        userName,
        isPending,
        //methods
        addMoney,
        clearUserMoney,
    }
}