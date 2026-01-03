import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [particles, setParticles] = useState([]);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const magneticX = useSpring(0, { damping: 20, stiffness: 150 });
  const magneticY = useSpring(0, { damping: 20, stiffness: 150 });

  const springConfig = { damping: 25, stiffness: 250 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);

      // --- PARTICLE GENERATION ---
      // Only generate particles if the mouse is moving significantly
      const id = Math.random().toString(36).substring(2, 9);
      setParticles((prev) => [...prev.slice(-10), { id, x: clientX, y: clientY }]);

      // --- MAGNETIC LOGIC ---
      const magneticTargets = document.querySelectorAll('.magnetic');
      let isNearAny = false;

      magneticTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(clientX - centerX, clientY - centerY);

        if (distance < 100) {
          isNearAny = true;
          magneticX.set((clientX - centerX) * 0.35);
          magneticY.set((clientY - centerY) * 0.35);
        }
      });

      if (!isNearAny) {
        magneticX.set(0);
        magneticY.set(0);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseOver = (e) => setIsHovered(!!e.target.closest('a, button, .magnetic'));

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, magneticX, magneticY]);

  // Clean up particles
  useEffect(() => {
    const timeout = setTimeout(() => {
      setParticles((prev) => prev.slice(1));
    }, 500);
    return () => clearTimeout(timeout);
  }, [particles]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* 1. Particle Trail */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            className="absolute w-1.5 h-1.5 bg-orange-400 dark:bg-orange-500 rotate-45"
            style={{ left: p.x, top: p.y, x: "-50%", y: "-50%" }}
          />
        ))}
      </AnimatePresence>

      {/* 2. Outer "Target" Frame (Diamond-Hex Hybrid) */}
      <motion.div
        className="absolute w-10 h-10 border-2 border-orange-500 dark:border-orange-400"
        style={{
          x, y,
          left: magneticX, top: magneticY,
          translateX: '-50%', translateY: '-50%',
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Hexagon Shape
        }}
        animate={{
          rotate: isHovered ? 180 : 0,
          scale: isClicked ? 0.8 : isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(251, 146, 60, 0.2)" : "rgba(251, 146, 60, 0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* 3. Inner Core */}
      <motion.div
        className="absolute w-2 h-2 bg-orange-600 dark:bg-orange-300"
        style={{
          x, y,
          left: magneticX, top: magneticY,
          translateX: '-50%', translateY: '-50%',
          rotate: 45
        }}
        animate={{
          scale: isClicked ? 2.5 : 1,
          rotate: isHovered ? -135 : 45,
        }}
      />
    </div>
  );
};

export default CustomCursor;