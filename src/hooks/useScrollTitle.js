import { useEffect } from "react";
import { isMobile } from "react-device-detect";

const useScrollTitle = (scrollStyle, setScrollStyle, scrollPercent) => {
  useEffect(() => {
    if (isMobile) {
      setScrollStyle({ ...scrollStyle, transform: "unset" });
    } else {
      setScrollStyle({
        ...scrollStyle,
        transform: `translate(${scrollPercent}%)`,
      });
    }
  }, [isMobile, scrollPercent]);
};

export default useScrollTitle;
