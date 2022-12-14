import React, { useEffect, useRef, useState } from "react";
import scrollXHandler from "../../helpers/scrollXHandler";

function Contacts() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const contactsRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (event) =>
      scrollXHandler(event, contactsRef, setScrollPercent, "revert")
    );
    return () =>
      window.removeEventListener("scroll", (event) =>
        scrollXHandler(event, contactsRef, setScrollPercent, "revert")
      );
  }, [scrollPercent]);
  return (
    <div className="contacts" ref={contactsRef}>
      <div
        className="contacts__title"
        style={{ transform: `translate(${scrollPercent}%)` }}
      >
        CONTACTS
      </div>
      <div className="contacts__description">
        <a
          className="contacts__link"
          href="mailto:klimentmaslennikov@gmail.com"
        >
          <img
            src={`${process.env.PUBLIC_URL}/media/social/mail.svg`}
            alt="E-Mail"
          />
        </a>
        <a className="contacts__link" href="https://github.com/Kmsbismarckx">
          <img
            src={`${process.env.PUBLIC_URL}/media/social/git.svg`}
            alt="Git Hub"
          />
        </a>
        <a className="contacts__link" href="https://t.me/undefinedisnan">
          <img
            src={`${process.env.PUBLIC_URL}/media/social/telegram.svg`}
            alt="Telegram"
          />
        </a>
      </div>
    </div>
  );
}

export default Contacts;
