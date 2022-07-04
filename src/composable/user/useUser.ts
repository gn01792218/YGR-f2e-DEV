import { computed } from "vue";
import { useStore } from "vuex";

export default function useUser(){
    const store = useStore()
    const userName = computed(()=>{
        return store.state.user.userData.userName
    })
    return {
        //data
        userName,
        //methods
        
    }
}