export const FocusElement = (
  targeElement: HTMLElement,
  selector: string,
  number: React.MutableRefObject<number>
) => {
  const target = targeElement.querySelector(
    `[role="${selector}${number.current}"]`
  ) as HTMLElement;
  target!.focus();

  target!.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
};
