export const scrollXHandler = (event, ref, setPercentState, revert) => {
  const { clientHeight } = event.srcElement.documentElement;
  if (ref.current) {
    const aboutY = ref.current.getBoundingClientRect().y;
    setPercentState(
      revert
        ? Math.round((aboutY * 100) / clientHeight)
        : 100 - Math.round((aboutY * 100) / clientHeight)
    );
  }
};
