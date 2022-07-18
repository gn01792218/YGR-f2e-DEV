import { ref } from 'vue';
import { Msg, MsgType } from '@/types/msg/msgBox'
//響應式資料
const plusMoneyMsgArr = ref<Msg[]>([])  //加金額時的錯誤顯示
const clearMoneyMsgArr = ref<Msg[]>([])  //清空餘額的錯誤顯示
//控制資料
const msgShiftTime = 2000  //控制訊息顯示多久(單位:毫秒)
export default function useError() {
    //方法
    function pushMsg(targetErrorArray: Msg[], msg: string, type: MsgType) {
        targetErrorArray.push({
            type: type,
            content: msg,
        })
        setTimeout(() => {
            targetErrorArray.shift()
        }, msgShiftTime)
    }
    return {
        //data
        plusMoneyMsgArr,
        clearMoneyMsgArr,
        //methods
        pushMsg,
    }
}