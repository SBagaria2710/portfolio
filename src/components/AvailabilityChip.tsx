import { useEffect, useState } from 'react';

export default function AvailabilityChip() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('.hero');

    const heroIO = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (hero) heroIO.observe(hero);
    return () => heroIO.disconnect();
  }, []);

  return (
    <a
      className={`avail-chip${visible ? ' avail-chip--in' : ''}`}
      href="https://calendly.com/sbagaria2710/discovery-call-shashwat"
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      data-cta="floating_chip_calendly"
    >
      <span className="avail-chip__dot" aria-hidden="true" />
      <span>book a 15-min call →</span>
    </a>
  );
}
