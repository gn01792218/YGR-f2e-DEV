import {GameData} from '@/types/game/game'
import { computed, toRaw } from "@vue/reactivity";
import { useStore } from "vuex";
import { getGameList } from "@/api";
export default function useGameList() {
  //其他composable
  //ref 響應式data
  //store
  const store = useStore();
  const gameList = computed<GameData[]>(() => {
    return toRaw(store.state.game.gameList);
  });
  //方法
  function fetchGameList(){
    getGameList()?.then((res) => {
        store.commit("game/loadGameList", res.data.Data);
      });
  }
  return {
    //data
    gameList,
    //methods
    fetchGameList,
  };
}
