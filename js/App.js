// ============================================================
// PRELOADER COMPONENT
// ============================================================
const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let startTime = null;
    const duration = 3000; // 3 seconds ka loading time

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(Math.floor(currentProgress));

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        // 100% hone ke baad thoda sa delay dekar page show karein
        setTimeout(onComplete, 400); 
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-text">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Ankit</span>
          <span className="logo-dot">.</span>
          <span className="logo-dev">dev</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <div className="preloader-counter">{progress}%</div>
        <div className="preloader-bar-container">
          <div className="preloader-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// APP.JS – Main App Component & Mount
// ============================================================
const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  // Lenis smooth scroll tabhi chalega jab loading complete ho jaye
  React.useEffect(() => {
    if (!isLoading && typeof window.Lenis !== 'undefined') {
      const lenis = new window.Lenis({
        lerp: 0.15,
        wheelMultiplier: 1,
        smoothWheel: true,
        // normalizeWheel: true,
        autoResize: true,
        syncTouch: false,
        smoothTouch: false
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      
      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [isLoading]);

  return (
    <React.Fragment>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="fade-in-page">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            {/* Agar Experience component file hai toh use yahan rakhein */}
            {typeof Experience !== 'undefined' && <Experience />} 
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </React.Fragment>
  );
};

// Mount React App
const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);
root.render(<App />);