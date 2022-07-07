//引入你配置的axios
import req from './http'
import {User,UserAddMoneyData} from '@/types/user/user'

//API-GET

//API-POST
//取得遊戲列表
export const getGameList = () => {
  return req('post',`/GameList`,{})
}

//取得token，0 成功 ； 7 找不到該帳號 ； 5 DB發生錯誤(內容存在message裡面)
export const getUserStatus = (user:User) => {
  return req('post',`/game/getUserStatus`,user)
}

//增加金錢，0 成功 5 DB發生問題 7 找不到該帳號 100 玩家正在遊戲中
export const plusMoney = (userAddMoneyData:UserAddMoneyData)=>{
  return req('post',`/game/addMoneyForWeb`,userAddMoneyData)
}

//清空餘額
export const clearMoney = (user:User) => {
  return req('post',`/game/clearMoney`,user)
}


