import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { Lang } from '@/types/lang';
import { Env } from "@/types/env";
import { GameCategory } from "@/types/game/game";
import useGameList from "./useGameList";
import useUtil from '@/composable/util/useUtil'
export default function useGame() {
    //其他composable
    const { getAssetsFileURL } = useUtil()
    const { gameList } = useGameList()
    //store
    const store = useStore()
    const gameLang = computed<Lang>(() => {
        return store.state.game.lang
    })
    const gameCategory = computed(() => {
        return store.state.game.gameCategory
    })
    //ref 響應式data
    const currentLang = ref<Lang>(gameLang.value)
    //方法
    function getGameImgUrl(gameid: string) {
        if (gameLang.value === Lang["zh-CN"]) {
            return getAssetsFileURL(`images/gameIcon/${gameid}_200x200_cn.png`)
        } else {
            return getAssetsFileURL(`images/gameIcon/${gameid}_200x200_en.png`)
        }
    }
    function switchGameCategory(category: GameCategory) {
        store.commit("game/sethGameCategory", category)
    }
    function selectLang(lang: Lang) {
        store.commit("game/setLang", lang)
    }
    function resetGameLang(){
        store.commit('game/setLang', Lang["zh-CN"])
        currentLang.value = Lang["zh-CN"]
        console.log('重設語系',gameLang.value,currentLang.value)
    }
    function gotoGame(account: string, gameID: string, lang: Lang) {
        let env = JSON.parse(sessionStorage.getItem('env') as string)
        let gameUrl = ""
        switch (env) {
            case Env.DEV:
                gameUrl = `${import.meta.env.VITE_APP_API_BASE_URL_DEV}/Login?Account=${account}&GameId=${gameID}&Lang=${lang}`
                break;
            case Env.QA:
                gameUrl = `${import.meta.env.VITE_APP_API_BASE_URL_QA}/Login?Account=${account}&GameId=${gameID}&Lang=${lang}`
                break;
        }
        console.log(gameUrl)
        window.open(gameUrl)
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
        resetGameLang,
        selectLang,
        gotoGame,
    }
}