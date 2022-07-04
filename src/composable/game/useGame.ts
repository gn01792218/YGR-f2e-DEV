import { computed } from "vue";
import { useStore } from "vuex";
import {Lang} from '@/types/lang'
import useGameList from "./useGameList";

export default function useGame(){
    const store = useStore()
    const {gameList} = useGameList()
    const gameLang = computed<Lang>(()=>{
        return store.state.game.lang
    })

    return {
        //data
        gameList,
        gameLang,
        //methods
       
    }
}