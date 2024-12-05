import { FocusElement } from "./FocusElement";

function ArrowNavi(
  e: React.KeyboardEvent,
  dataInc: React.MutableRefObject<number>,
  ascendingDr: string,
  descendingDir: string,
  MaxLength: number,
  focusAttribute: string
) {
  if (e.key === ascendingDr || e.key === descendingDir) {
    e.preventDefault();
    e.stopPropagation();
    if (e.key === ascendingDr) {
      dataInc.current = Math.min(dataInc.current + 1, MaxLength);
    } else if (e.key === descendingDir) {
      dataInc.current = Math.max(dataInc.current - 1, 1);
    }
    FocusElement(e.currentTarget as HTMLElement, focusAttribute, dataInc);
  }
}
export default ArrowNavi;
