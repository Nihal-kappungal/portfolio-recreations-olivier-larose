import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <motion.section
      style={{ opacity }}
      className="sticky top-0 z-10 pointer-events-none w-full min-h-screen flex flex-col items-center justify-center uppercase"
    >
      <p className="font-editorial text-[clamp(1.5rem,3.8vw,3.8rem)] leading-[clamp(2rem,4.8vw,4.8rem)]  ">
        <span className="font-vibes text-[1.5em] mr-2.5">o</span>
        livier <span className="font-vibes text-[1.5em] mr-2.5">L</span>
        arose
      </p>
      <p className="font-editorial text-[clamp(1.5rem,3.8vw,3.8rem)] leading-[clamp(2rem,4.8vw,4.8rem)]">
        Independent Front End
      </p>
      <p className="font-mondwest text-[clamp(2rem,5vw,5rem)] leading-[clamp(2.25rem,4.8vw,4.8rem)]">
        ☼Developer☀
      </p>
      <p className="font-editorial text-[clamp(1.5rem,3.8vw,3.8rem)] leading-[clamp(2rem,4.8vw,4.8rem)]">
        Having a <span className="font-vibes text-[1.5em] mr-2.5">G</span>
        ood Time
      </p>
      <p className="font-editorial text-[clamp(1.5rem,3.8vw,3.8rem)] leading-[clamp(2rem,4.8vw,4.8rem)]">
        Based In Montreal
      </p>
      <p className="font-editorial text-[clamp(1.5rem,3.8vw,3.8rem)] leading-[clamp(2rem,4.8vw,4.8rem)]">
        Folio
        <span className=" font-mondwest text-[1.5em]">©</span>
        2026
        <span className="font-mondwest text-[1.5em]">⚗✨</span>
      </p>
    </motion.section>
  );
};

export default Hero;
