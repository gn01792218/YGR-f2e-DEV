export const state = {
    LobbyInfo: {
    },
  };
  export const actions = {}
  
  export const mutations = {
    LobbyInfo(state:any, payload:any) { //接收wbSocket的訊息
      state.LobbyInfo=payload
      console.log("vuex-lobby資料更新",state.LobbyInfo)
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