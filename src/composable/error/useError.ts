import { ref } from 'vue';
//響應式資料
const plusMoneyMsgArr = ref<string []>([])  //加金額時的錯誤顯示
const clearMoneyMsgArr = ref<string[]>([])  //清空餘額的錯誤顯示
export default function useError (){
    //方法
    function pushMsg (targetErrorArray:string[],msg:string){
        targetErrorArray.push(msg)
        setTimeout(()=>{
            targetErrorArray.shift()
        },500)
    }
    return {
        //data
        plusMoneyMsgArr,
        clearMoneyMsgArr,
        //methods
        pushMsg,
    }
}