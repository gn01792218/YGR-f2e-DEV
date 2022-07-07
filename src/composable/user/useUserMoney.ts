import { ref } from "vue";
import { plusMoney , clearMoney } from "@/api"
export default function useAddMoney(){
    //ref 響應式data
    const plusMoneyInput = ref<number | null>(null)
    //方法
    function addMoney(userName:string , num: number | null) {
        num = Number(num)
        if (num <= 0 || isNaN(num)) {
            alert('請勿輸入小於等於0的數字；或非數字')
            plusMoneyInput.value = null
            return
        }
        //call 增加金額 API
        plusMoney({userId:userName,money:num})?.then(res=>{
            switch(res.data.ErrorCode){
                case 0:
                    console.log(res.data)
                    break;
                case 5:
                    alert("DB發生錯誤 : "+res.data.Message)
                    break;
                case 7:
                    alert("找不到該帳號")
                    break;
                case 100:
                    alert(`玩家正在進行遊戲中(${res.data.Message})`)
                    break;
            }
        })
        plusMoneyInput.value = null
    }
    function clearUserMoney(userName:string){
        alert('確定要清空使用者餘額?')
        clearMoney({userId:userName})?.then(res=>{
            switch(res.data.ErrorCode){
                case 0:
                    console.log(res.data)
                    break;
                case 5:
                    alert("DB發生錯誤 : "+res.data.Message)
                    break;
                case 7:
                    alert("找不到該帳號")
                    break;
                case 100:
                    alert(`玩家正在進行遊戲中(${res.data.Message})`)
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