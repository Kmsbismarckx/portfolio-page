import { useLayoutEffect } from "react";
import "./Introduction.scss";
import { isMobileOnly } from "react-device-detect";
import { gsap } from "gsap";

export function Introduction() {
  const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });
  useLayoutEffect(() => {
    if (!isMobileOnly) {
      timeline.to(".introduction__name", { y: "0%", duration: 0.7, delay: 1 });
      timeline.to(".introduction__info", { y: "0%", duration: 0.5 }, "+=0.3");
    }
  }, [isMobileOnly]);

  return (
    <div className="introduction">
      <div className="introduction__item">
        <div className="hide">
          <span className="introduction__name hide-text">
            Kliment Maslennikov
          </span>
        </div>
      </div>
      <div className="introduction__item">
        <div className="hide">
          <span className="introduction__info hide-text">
            FRONT-END DEVELOPER
          </span>
        </div>
      </div>
    </div>
  );
}
