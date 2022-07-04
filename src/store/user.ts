import {User} from '../types/user/user'
interface State{
  userData:User
}
export const state = {
    userData: {
    },
  };
  export const actions = {}
  
  export const mutations = {
    getUser(state:State, payload:string) {
      state.userData.userName=payload
      // console.log("取得user相關資訊",state.userData)
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