export function getRemainingBufferDuration(
  dataAudio: React.MutableRefObject<HTMLAudioElement | null>
) {
  const buffered = dataAudio.current!.buffered;
  const currentTime = dataAudio.current!.currentTime;
  for (let i = 0; i < buffered.length; i++) {
    if (currentTime >= buffered.start(i) && currentTime <= buffered.end(i)) {
      return buffered.end(i) - currentTime;
    }
  }
  return 0;
}
