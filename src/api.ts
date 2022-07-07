//引入你配置的axios
import req from './http'

//API-POST
export const getGameList = () => {
  return req('post',`/GameList`,{})
}


//回應狀態碼0表示成功 ； 7表示找不到該帳號 ； 5表示DB發生錯誤(內容存在message裡面)
export const getUserStatus = (userAccount:string) => {
  return req('post',`/game/getUserStatus`,{userId:userAccount})
}


