import useOverflowCheck from "@/lib/CustomHooks/OverFlowCheck";
import clsx from "clsx";
import { RefObject } from "react";
function AudioInfoOverFlow({
  ofcheckDiv,
  name,
}: {
  ofcheckDiv: RefObject<HTMLDivElement | null>;
  name: string;
}) {
  const [isOverFlow, animate, setanimatie, setIsOverFlow] = useOverflowCheck(
    ofcheckDiv
  ) as [
    number,
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
    React.Dispatch<React.SetStateAction<number>>
  ];
  console.log("render");
  return (
    /* w-fit is needed to be get full width when animate */
    <div
      className={clsx("w-fit hover:ease-linear truncate hover:text-clip px-3", {
        "animate-showtextoverflow": animate && isOverFlow > 0,
      })}
      style={isOverFlow > 0 ? { animationDuration: `${isOverFlow}ms` } : {}}
      // key={name}
      onAnimationEnd={() => {
        isOverFlow > 0 && setanimatie(false);
      }}
      onMouseEnter={() => {
        //even same anitmate value would make still twice render even though prop is not change
        // first call is change from false to true ,seconde call is change from true to true , may be this is the reaseon to prevent it use check ===

        const fullWidth = ofcheckDiv.current!.scrollWidth;
        const showWidth = ofcheckDiv.current!.clientWidth;
        if (fullWidth > showWidth) {
          const overFlowWidth = (fullWidth - showWidth) * 150;
          console.log(overFlowWidth);
          if (isOverFlow !== overFlowWidth) {
            setIsOverFlow(overFlowWidth);
          }
          if (!animate) {
            console.log(animate);
            setanimatie(true);
          }
        }
      }}
    >
      {name}
    </div>
  );
}

export default AudioInfoOverFlow;
