import {GameData} from '@/types/game/game'
import { computed, toRaw } from "@vue/reactivity";
import { useStore } from "vuex";
import { getGameList } from "@/api";
export default function useGameList() {
  const store = useStore();
  function fetchGameList(){
    getGameList()?.then((res) => {
        store.commit("game/loadGameList", res.data.Data);
      });
  }
  const gameList = computed<GameData[]>(() => {
    return toRaw(store.state.game.gameList);
  });
  return {
    //data
    gameList,
    //methods
    fetchGameList,
  };
}
