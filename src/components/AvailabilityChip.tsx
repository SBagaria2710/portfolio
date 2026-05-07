import { useEffect, useState } from 'react';

export default function AvailabilityChip() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('.hero');
    const footer = document.querySelector('footer');

    let heroOut = false;
    let footerIn = false;
    const update = () => setVisible(heroOut && !footerIn);

    const heroIO = new IntersectionObserver(
      ([entry]) => { heroOut = !entry.isIntersecting; update(); },
      { threshold: 0.1 }
    );
    const footerIO = new IntersectionObserver(
      ([entry]) => { footerIn = entry.isIntersecting; update(); },
      { threshold: 0.05 }
    );

    if (hero) heroIO.observe(hero);
    if (footer) footerIO.observe(footer);
    return () => { heroIO.disconnect(); footerIO.disconnect(); };
  }, []);

  return (
    <a
      className={`avail-chip${visible ? ' avail-chip--in' : ''}`}
      href="https://calendly.com/sbagaria2710/discovery-call-shashwat"
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <span className="avail-chip__dot" aria-hidden="true" />
      <span>book a 15-min call →</span>
    </a>
  );
}
