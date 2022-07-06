//引入你配置的axios
import req from './http'

//API-POST
export const getGameList = () => {
  return req('post',`/GameList`,{})
}
export const getUserStatus = (userAccount:string) => {
  return req('post',`/game/getUserStatus`,{userId:userAccount})
}


