import { useEffect, useState } from 'react';
import Image from 'next/image';
import ControlPanel from './components/ControlPanel';
import NavItems from './components/NavItems';
import SocialMediaIcons from './components/SocialMediaIcons';
import Link from 'next/link';
import { motion } from 'framer-motion';
function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`sticky h-[88px] px-[20px] py-[18px] xl:px-[152px] flex justify-between items-center bg-black  transition-all duration-300 ${
          isSticky ? 'fixed top-0 z-50 right-0 left-0' : ''
        }`}>
        <div className="relative w-[107px] h-[52px] md:w-[102px]">
          <Image src="/static/webp/logo.webp" fill objectFit="cover" alt="" />
        </div>

        <div className="flex gap-[32px] items-center md:gap-[71px]">
          <div className="flex gap-[12px] items-center md:gap-[22px]">
            <div className="hidden cursor-pointer uppercase xl:block text-magenta text-base   font-Bitcrusher  tracking-[0.095em]">
              play
            </div>
            <ControlPanel />
            <NavItems />
            <SocialMediaIcons />
          </div>

          <div className="flex-grow-0 flex-shrink-0 flex-basis-[25px] xl:hidden cursor-pointer">
            <Image
              className="cursor-pointer"
              src="/static/icons/menu.svg"
              width="25"
              height="22"
              alt=""
              onClick={handleMenuClick}
            />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`flex ml-auto w-[294px] flex-col h-full  px-8 py-10  transition-all duration-300 ease-in-out  bg-[#560E58] $`}>
            <div className="flex justify-end mb-6">
              <button
                className="text-lg font-bold text-black"
                onClick={handleMenuClick}>
                <Image
                  src="/static/icons/cross.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </button>
            </div>
            <div className="space-y-[22px] text-2xl font-bold text-white font-Bitcrusher text-[30px] tracking-[0.095em] leading-[36px]">
              <div className="text-[#FF00C7]">PLAY</div>
              <div className="text-[#FF8A00]">CONTROL PANEL</div>
              <div>PLAY/DEV AND EARN</div>
              <div>TEAM</div>
              <div>ROADMAP</div>
              <div>WHITEPAPER</div>
              <div>PARTNERS</div>
              <div className="pt-[56px]">
                <SocialMediaIcons />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-75 -z-40"
            onClick={handleMenuClick}
          />
        </div>
      )}
    </>
  );
}

export default Header;
