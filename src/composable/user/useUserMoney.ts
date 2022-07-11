import { ref } from "vue";
import { plusMoney , clearMoney } from "@/api"
import { MsgType } from '@/types/msg/msgBox'
import useError from "@/composable/error/useError"
export default function useAddMoney(){
    //其他compasoable
    const { plusMoneyMsgArr,clearMoneyMsgArr,pushMsg } = useError()
    //ref 響應式data
    const plusMoneyInput = ref<number | null>(null)
    //方法
    function addMoney(userName:string , num: number | null) {
        num = Number(num)
        if (num <= 0 || isNaN(num)) {
            // console.log('錯誤')
            pushMsg(plusMoneyMsgArr.value,'請勿輸入小於等於0的數字；或非數字')
            // alert('請勿輸入小於等於0的數字；或非數字')
            plusMoneyInput.value = null
            return
        }
        //call 增加金額 API
        plusMoney({userId:userName,money:num})?.then(res=>{
            switch(res.data.ErrorCode){
                case 0:
                    console.log(res.data)
                    pushMsg(plusMoneyMsgArr.value,`增加金額 :${num}，當前餘額 :${res.data.Data.money}`,MsgType.SUCCESS)
                    break;
                case 5:
                    pushMsg(plusMoneyMsgArr.value,`DB發生錯誤 : ${res.data.Message}`,MsgType.ERROR)
                    // alert("DB發生錯誤 : "+res.data.Message)
                    break;
                case 7:
                    pushMsg(plusMoneyMsgArr.value,"找不到該帳號",MsgType.ERROR)
                    // alert("找不到該帳號")
                    break;
                case 100:
                    pushMsg(plusMoneyMsgArr.value,`玩家正在進行遊戲中(${res.data.Message})`,MsgType.ERROR)
                    // alert(`玩家正在進行遊戲中(${res.data.Message})`)
                    break;
            }
        })
        plusMoneyInput.value = null
    }
    function clearUserMoney(userName:string){
        let clear = confirm('確定要清空使用者餘額?')
        if(!clear) return
        clearMoney({userId:userName})?.then(res=>{
            switch(res.data.ErrorCode){
                case 0:
                    console.log(res.data)
                    pushMsg(clearMoneyMsgArr.value,"餘額清零成功!",MsgType.SUCCESS)
                    break;
                case 5:
                    pushMsg(clearMoneyMsgArr.value,`DB發生錯誤 : ${res.data.Message}`,MsgType.ERROR)
                    break;
                case 7:
                    pushMsg(clearMoneyMsgArr.value,"找不到該帳號",MsgType.ERROR)
                    break;
                case 100:
                    pushMsg(clearMoneyMsgArr.value,`玩家正在進行遊戲中(${res.data.Message})`,MsgType.ERROR)
                    break;
            }
        })
    }
    return {
        //data
        plusMoneyInput,
        //methods
        addMoney,
        clearUserMoney,
    }
}