import { useEffect, useRef, useState } from 'react';
import { scrollXHandler } from '@/helpers';
import { useScrollTitle } from '@/hooks';
import './Contacts.scss';

export function Contacts() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [scrollStyle, setScrollStyle] = useState({
    transform: `translate(${scrollPercent}%)`,
  });
  const contactsRef = useRef(null);

  useScrollTitle(scrollStyle, setScrollStyle, scrollPercent);

  useEffect(() => {
    window.addEventListener('scroll', event =>
      scrollXHandler(event, contactsRef, setScrollPercent, 'revert')
    );
    return () =>
      window.removeEventListener('scroll', event =>
        scrollXHandler(event, contactsRef, setScrollPercent, 'revert')
      );
  }, [scrollPercent]);
  return (
    <div className="contacts" ref={contactsRef}>
      <div className="contacts__title" style={scrollStyle}>
        CONTACTS
      </div>
      <div className="contacts__description">
        <a className="contacts__link" href="mailto:klimentmaslennikov@gmail.com">
          <img src={`./media/social/mail.svg`} alt="E-Mail" />
        </a>
        <a className="contacts__link" href="https://github.com/Kmsbismarckx">
          <img src={`./media/social/git.svg`} alt="Git Hub" />
        </a>
        <a className="contacts__link" href="https://t.me/undefinedisnan">
          <img src={`./media/social/telegram.svg`} alt="Telegram" />
        </a>
      </div>
    </div>
  );
}
