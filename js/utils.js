// ============================================================
// UTILS.JS – Custom Hooks & Utility Functions
// ============================================================

// ------ useInView Hook (Intersection Observer) ------
const useInView = (options = {}) => {
  const [ref, setRef] = React.useState(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(ref); // Once visible, stop observing
      }
    }, { threshold: 0.15, ...options });

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return [setRef, inView];
};

// ------ useTypingEffect Hook ------
const useTypingEffect = (words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [text, setText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);

  React.useEffect(() => {
    let timer;
    // Current word find karne ke liye modulo operator (ye infinite loop banata hai)
    const i = loopNum % words.length;
    const fullText = words[i];

    if (isDeleting) {
      // Deleting mode
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      // Typing mode
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, typingSpeed);
    }

    // Jab word poora type ho jaye, thodi der ruko aur delete karna shuru karo
    if (!isDeleting && text === fullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } 
    // Jab word poora delete ho jaye, agle word par move karo
    else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      // Naya word start hone se pehle halka sa pause
      timer = setTimeout(() => {}, 300); 
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

// ------ useScrollProgress Hook ------
const useScrollProgress = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

// ------ useActiveSection Hook ------
const useActiveSection = (sectionIds) => {
  const [active, setActive] = React.useState('');

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      let current = '';
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      });
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return active;
};

// ------ AnimatedSection Wrapper ------
const AnimatedSection = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const [ref, inView] = useInView();
  
  const directionMap = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
  };

  return (
    <div
      ref={ref}
      className={`animated-section ${inView ? 'is-visible' : ''} anim-${direction} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
