import {GameData} from '@/types/game/game'
interface State{
    gameList:GameData[]
}
export const state = {
    gameList: null,
};
  export const actions = {}
  
  export const mutations = {
    loadGameList(state:State, payload:GameData[]) {
      state.gameList=payload
    },
  };
  export const getters = {}
  
  export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
  };