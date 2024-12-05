"use client";
import { currentSongPlaylistAction, useCurrentPlayList } from "@/lib/zustand";
import { ReactNode, useEffect } from "react";
import { urlProp } from "./Album";

function SongContainer({
  children,
  url,
}: {
  children: ReactNode;
  url: urlProp[];
}) {
  const setPlayListArray = useCurrentPlayList(
    (state: currentSongPlaylistAction) => state.setPlayListArray
  );
  useEffect(() => {
    setPlayListArray(url);
  }, [setPlayListArray, url]);
  return (
    <div>
      {children}
      <button onClick={() => fetch("/api/test")}>go</button>
    </div>
  );
}

export default SongContainer;
