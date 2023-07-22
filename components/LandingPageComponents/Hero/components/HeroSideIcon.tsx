import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import styles from './HeroSideIcon.module.css';

const HeroSideIcon = () => {
  const imagesRef = useRef<Array<HTMLDivElement | null>>([]);

  const handleParallax = () => {
    const scrollY = window.scrollY;
    imagesRef.current.forEach((image) => {
      if (!image) return;
      const speed = image.classList.contains(styles.imageLg) ? 0.3 : 0.5;
      const movement = -(scrollY * speed);
      image.style.transform = `translate3d(0, ${movement}px, 0)`;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleParallax);
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);
  return (
    <div>
      <div
        className={`${styles.parallaxImage} ${styles.imageSm} md:hidden`}
        ref={(el) => imagesRef.current.push(el)}>
        <Image
          src="/static/images/hero/side-hero-sm.svg"
          alt=""
          width={284}
          height={184}
        />
      </div>
      <div
        className={`${styles.parallaxImage} ${styles.imageMd} hidden md:block xl:hidden`}
        ref={(el) => imagesRef.current.push(el)}>
        <Image
          src="/static/images/hero/side-hero-md.svg"
          alt=""
          width={284}
          height={184}
        />
      </div>
      <div
        className={`${styles.parallaxImage} ${styles.imageLg} hidden xl:block`}
        ref={(el) => imagesRef.current.push(el)}>
        <Image
          src="/static/images/hero/side-hero-lg.svg"
          alt=""
          width={284}
          height={184}
        />
      </div>
    </div>
  );
};
export default HeroSideIcon;
