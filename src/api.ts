//引入你配置的axios
import req from './http'

//API-GET
export const getIntoGame = (account:string,gameID:string,lang:string)=>{
    return req('get',`Login?Account=${account}&GameId=${gameID}&Lang=${lang}`)
}

//API-POST
export const getGameList = () => {
  return req('post',`/GameList`,{})
}



