import { computed } from "vue";
import { useStore } from "vuex";
import {Lang} from '@/types/lang';
import { GameCategory } from "@/types/game/game";
import useGameList from "./useGameList";
import useUtil from '@/composable/util/useUtil'
export default function useGame(){
    const store = useStore()
    const { getAssetsFileURL } = useUtil()
    const {gameList} = useGameList()
    const gameLang = computed<Lang>(()=>{
        return store.state.game.lang
    })
    const gameCategory = computed(()=>{
        return store.state.game.gameCategory
    })
    function getGameImgUrl(gameid:string){
        if(gameLang.value ===Lang["zh-CN"]){
            return getAssetsFileURL(`images/gameIcon/${gameid}_cn.png`)
        }else{
           return  getAssetsFileURL(`images/gameIcon/${gameid}_en.png`)
        }
    }
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
        getGameImgUrl,
       
    }
}