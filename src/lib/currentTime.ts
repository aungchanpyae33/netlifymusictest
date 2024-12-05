import React, { RefObject } from "react";

interface props {
  settimeprogress: React.Dispatch<React.SetStateAction<string>>;
  data: RefObject<HTMLAudioElement>;
}
let df = "0";

export const currenttime = ({ settimeprogress, data }: props) => {
  const current = data.current?.currentTime;
  if (current) {
    const minute = Math.floor(current / 60);
    const seconds = (current % 60).toFixed();
    const includeZero = seconds.toString().padStart(2, "0");

    if (df !== includeZero) {
      settimeprogress(`${minute} : ${includeZero}`);
      df = includeZero;
    }
  }
};
