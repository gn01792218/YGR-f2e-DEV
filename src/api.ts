//引入你配置的axios
import req from './http'

//API-POST
export const getGameList = () => {
  return req('post',`/GameList`,{})
}



