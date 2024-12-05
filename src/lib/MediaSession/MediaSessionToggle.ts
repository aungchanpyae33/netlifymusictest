import { useEffect } from "react";
import { useSongFunction } from "../zustand";
import type { SongFunctionActions, SongFunctionState } from "../zustand";
const MediaSessionToggle = () => {
  const setPlay = useSongFunction(
    (state: SongFunctionActions) => state.setPlay
  );
  const [firstKey] = useSongFunction(
    (state: SongFunctionState) => Object.entries(state.Isplay)[0] || []
  );
  useEffect(() => {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.setActionHandler("play", () => {
        setPlay(firstKey, undefined);
      });
      navigator.mediaSession.setActionHandler("pause", () => {
        setPlay(firstKey, undefined);
      });
    }
  }, [setPlay, firstKey]);
};
export default MediaSessionToggle;
