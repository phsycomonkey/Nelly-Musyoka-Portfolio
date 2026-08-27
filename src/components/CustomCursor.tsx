import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer (desktop)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'IMG' ||
          target.closest('button') ||
          target.closest('a') ||
          target.closest('.cursor-pointer') ||
          target.closest('.cursor-zoom-in'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden hidden md:block">
      {/* Outer Magnetic Ring */}
      <motion.div
        className="fixed rounded-full border pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? 'rgba(197, 155, 39, 0.12)' : 'rgba(0,0,0,0)',
          borderColor: isHovered ? 'rgba(197, 155, 39, 0.8)' : 'rgba(197, 155, 39, 0.4)',
        }}
        transition={{
          type: 'spring',
          stiffness: 350,
          damping: 25,
          mass: 0.5,
        }}
      />

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed rounded-full bg-secondary pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 4 : 3),
          y: mousePosition.y - (isHovered ? 4 : 3),
          width: isHovered ? 8 : 6,
          height: isHovered ? 8 : 6,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 35,
        }}
      />
    </div>
  );
}
