import { GameData, GameCategory } from '@/types/game/game'
import { Lang } from '@/types/lang'
interface State {
  gameList: GameData[],
  lang: Lang,
  gameCategory: GameCategory,
}
export const state = {
  gameList: null,
  lang: Lang['zh-CN'],
  gameCategory: GameCategory.ALLGAME
};
export const actions = {}

export const mutations = {
  loadGameList(state: State, payload: GameData[]) {
    state.gameList = payload
  },
  setLang(state: State, payload: Lang) {
    state.lang = payload
    // console.log('選擇語系',state.lang)
  },
  sethGameCategory(state: State, payload: GameCategory) {
    state.gameCategory = payload
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