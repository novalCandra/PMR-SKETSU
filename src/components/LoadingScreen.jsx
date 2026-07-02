import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Animation Variants ---

const overlayVariants = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.8, ease: 'easeInOut', delay: 0.3 },
  },
};

const lineVariants = {
  initial: { y: '100%', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: '-100%', opacity: 0 },
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

const letterVariants = {
  initial: { y: 60, opacity: 0, rotateX: -90 },
  animate: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    y: -40,
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

const barVariants = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
  },
};

const progressVariants = {
  initial: { width: '0%' },
  animate: {
    width: '100%',
    transition: { duration: 1.8, ease: 'easeInOut', delay: 0.2 },
  },
};

// --- Helper: Split text into animated letters ---
const AnimatedText = ({ text, className }) => (
  <motion.span
    className={className}
    variants={containerVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    style={{ display: 'inline-flex', overflow: 'hidden' }}
  >
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        variants={letterVariants}
        style={{ display: 'inline-block', whiteSpace: 'pre' }}
      >
        {char}
      </motion.span>
    ))}
  </motion.span>
);

// --- Main Component ---
export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Auto-dismiss after animation completes
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        onComplete?.();
      }, 900); // wait for exit animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          variants={overlayVariants}
          initial="initial"
          exit="exit"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0d1b2a 0%, #1D3557 60%, #16304f 100%)',
            overflow: 'hidden',
          }}
        >
          {/* Background particle grid */}
          <div style={styles.grid} />

          {/* Glow orbs */}
          <motion.div
            style={{ ...styles.orb, top: '15%', left: '10%', background: 'radial-gradient(circle, rgba(230,57,70,0.28) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            style={{ ...styles.orb, bottom: '20%', right: '8%', background: 'radial-gradient(circle, rgba(69,123,157,0.3) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          <motion.div
            style={{ ...styles.orb, top: '55%', left: '55%', background: 'radial-gradient(circle, rgba(230,57,70,0.15) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />

          {/* Main content */}
          <div style={styles.content}>
            {/* "WELCOME TO" line */}
            <div style={{ overflow: 'hidden', marginBottom: '0.5rem' }}>
              <motion.div
                variants={lineVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                style={styles.welcomeTo}
              >
                WELCOME TO
              </motion.div>
            </div>

            {/* "PMR SKETSU" animated letters */}
            <div style={{ overflow: 'visible', marginBottom: '2rem' }}>
              <AnimatedText text="PMR SKETSU" className="pmr-title" />
            </div>

            {/* Decorative bar */}
            <motion.div style={styles.barWrapper} variants={barVariants} initial="initial" animate="animate">
              {/* Shimmer effect on progress */}
              <motion.div style={styles.progressFill} variants={progressVariants} initial="initial" animate="animate">
                <span style={styles.shimmer} />
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              style={styles.tagline}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6, ease: 'easeOut' }}
            >
              Palang Merah Remaja 
            </motion.p>
          </div>

          {/* Inline styles for animated letter class */}
          <style>{`
            .pmr-title {
              font-family: 'Inter', 'Segoe UI', sans-serif;
              font-size: clamp(3rem, 10vw, 7rem);
              font-weight: 900;
              letter-spacing: 0.08em;
              line-height: 1;
              background: linear-gradient(135deg, #F1FAEE 0%, #E63946 45%, #c0392b 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              filter: drop-shadow(0 0 30px rgba(230,57,70,0.55));
              perspective: 600px;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- Inline Styles ---
const styles = {
  grid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(69,123,157,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(69,123,157,0.08) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    pointerEvents: 'none',
  },
  orb: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    pointerEvents: 'none',
    filter: 'blur(20px)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
    padding: '0 2rem',
  },
  welcomeTo: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    fontSize: 'clamp(0.9rem, 3vw, 1.4rem)',
    fontWeight: 300,
    letterSpacing: '0.5em',
    color: 'rgba(241, 250, 238, 0.65)',
    textTransform: 'uppercase',
  },
  barWrapper: {
    width: 'clamp(200px, 50vw, 420px)',
    height: '3px',
    background: 'rgba(255,255,255,0.08)',
    borderRadius: '99px',
    overflow: 'hidden',
    transformOrigin: 'left center',
    marginBottom: '1.5rem',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #E63946, #c0392b, #457B9D)',
    borderRadius: '99px',
    position: 'relative',
    overflow: 'hidden',
  },
  shimmer: {
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '60%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
    animation: 'shimmer 1.5s infinite',
  },
  tagline: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    fontSize: 'clamp(0.75rem, 2vw, 0.95rem)',
    fontWeight: 400,
    letterSpacing: '0.3em',
    color: 'rgba(241, 250, 238, 0.45)',
    textTransform: 'uppercase',
    margin: 0,
  },
};
