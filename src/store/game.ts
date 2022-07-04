import {GameData} from '@/types/game/game'
import {Lang} from '@/types/lang'
interface State{
    gameList:GameData[],
    lang:Lang
}
export const state = {
    gameList: null,
    lang:Lang['zh-CN']
};
  export const actions = {}
  
  export const mutations = {
    loadGameList(state:State, payload:GameData[]) {
      state.gameList=payload
    },
    setLang(state:State,payload:Lang){
      state.lang = payload
      // console.log('選擇語系',state.lang)
    }
  };
  export const getters = {}
  
  export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
  };