import { ref, computed } from "vue";
import { useStore } from "vuex";
import { Lang } from "@/types/lang"
export default function useUser() {
    //其他composable
    //ref 響應式data
    const plusMoneyInput = ref<number | null>(null)
    //store
    const store = useStore()
    const userName = computed(() => {
        return store.state.user.userData.userName
    })
    //方法
    function plusMoney(num: number | null) {
        num = Number(num)
        if (num <= 0 || isNaN(num)) {
            alert('請勿輸入小於等於0的數字；或非數字')
            plusMoneyInput.value = null
            return
        }
        //call 增加金額 API
        plusMoneyInput.value = null
        console.log('增加金額', num + 25)
    }
    function setNumberNull() {
        plusMoneyInput.value = null
    }
    return {
        //data
        plusMoneyInput,
        userName,
        //methods
        plusMoney,
        setNumberNull,
    }
}