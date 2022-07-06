import { ref, computed } from "vue";
import { useStore } from "vuex";
import { Lang } from '@/types/lang';
import { GameCategory } from "@/types/game/game";
import useGameList from "./useGameList";
import useUtil from '@/composable/util/useUtil'
export default function useGame() {
    //其他composable
    const { getAssetsFileURL } = useUtil()
    const { gameList } = useGameList()
    //ref 響應式data
    const currentLang = ref(Lang['zh-CN'])
    //store
    const store = useStore()
    const gameLang = computed<Lang>(() => {
        return store.state.game.lang
    })
    const gameCategory = computed(() => {
        return store.state.game.gameCategory
    })
    //方法
    function getGameImgUrl(gameid: string) {
        if (gameLang.value === Lang["zh-CN"]) {
            return getAssetsFileURL(`images/gameIcon/${gameid}_cn.png`)
        } else {
            return getAssetsFileURL(`images/gameIcon/${gameid}_en.png`)
        }
    }
    function switchGameCategory(category: GameCategory) {
        store.commit("game/sethGameCategory", category)
    }
    function selectLang(lang: Lang) {
        store.commit("game/setLang", lang)
    }
    return {
        //data
        currentLang,
        gameList,
        gameLang,
        gameCategory,
        //methods
        switchGameCategory,
        getGameImgUrl,
        selectLang,
    }
}