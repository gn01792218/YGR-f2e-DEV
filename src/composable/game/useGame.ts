import { computed } from "vue";
import { useStore } from "vuex";
import {Lang} from '@/types/lang';
import { GameCategory } from "@/types/game/game";
import useGameList from "./useGameList";

export default function useGame(){
    const store = useStore()
    const {gameList} = useGameList()
    const gameLang = computed<Lang>(()=>{
        return store.state.game.lang
    })
    const gameCategory = computed(()=>{
        return store.state.game.gameCategory
    })

    function switchGameCategory(category:GameCategory){
        store.commit("game/sethGameCategory",category)
    }
    return {
        //data
        gameList,
        gameLang,
        gameCategory,
        //methods
        switchGameCategory,
       
    }
}