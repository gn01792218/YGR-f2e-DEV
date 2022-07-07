import {User} from '../types/user/user'
interface State{
  userData:Partial<User>,
  loginPending:boolean,
}
export const state:State = {
    userData: {
    },
    loginPending:false,
  };
  export const actions = {}
  
  export const mutations = {
    getUser(state:State, payload:string) {
      state.userData.userName=payload
      // console.log("取得user相關資訊",state.userData)
    },
    setLoginPending(state:State,payload:boolean){
      state.loginPending = payload
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