export const state = {
    userInfo: {
    },
  };
  export const actions = {}
  
  export const mutations = {
    getUserInfo(state:any, payload:any) {
      state.userInfo=payload
      console.log("取得user相關資訊",state.userInfo)
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