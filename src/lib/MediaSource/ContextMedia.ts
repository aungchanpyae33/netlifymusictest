import React, { createContext, RefObject } from "react";
export interface prop {
  dataAudio: React.MutableRefObject<HTMLAudioElement | null>;
  duration: number;
  abortController: React.MutableRefObject<AbortController | null>;
  fetching: React.MutableRefObject<boolean>;
  loadNextSegment: () => void;
  segNum: React.MutableRefObject<number>;
  sege: number | undefined;
}

const DataContext = createContext<prop>({
  dataAudio: { current: null },
  duration: 0,
  abortController: { current: null },
  fetching: { current: false },
  segNum: { current: 1 },
  loadNextSegment: () => {},
  sege: undefined,
});
export default DataContext;
