import { useState, useEffect, useCallback } from 'react';
import { slides } from './data/slides';
import { ChevronLeft, ChevronRight, Maximize2, AlertTriangle, BookOpen, AlertCircle, Grid, X, Download, Loader2 } from 'lucide-react';
import { cn } from './lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import PptxGenJS from 'pptxgenjs';
import { toPng } from 'html-to-image';

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [direction, setDirection] = useState(0);
  const [showOverview, setShowOverview] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  const currentSlide = slides[currentSlideIndex];

  const handleNext = useCallback(() => {
    if (showOverview) return;
    if (currentSlideIndex < slides.length - 1) {
      setDirection(1);
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex, showOverview]);

  const handlePrev = useCallback(() => {
    if (showOverview) return;
    if (currentSlideIndex > 0) {
      setDirection(-1);
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex, showOverview]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
         if (showOverview) setShowOverview(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, showOverview]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const jumpToSlide = (index: number) => {
    setDirection(index > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(index);
    setShowOverview(false);
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = clickX / rect.width;
    const targetIndex = Math.max(0, Math.min(slides.length - 1, Math.floor(ratio * slides.length)));
    jumpToSlide(targetIndex);
  };

  const exportToPPTX = async () => {
    setIsExporting(true);
    setExportProgress(0);

    // wait for React to mount the hidden container
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      const pptx = new PptxGenJS();
      pptx.layout = 'LAYOUT_16x9';

      for (let i = 0; i < slides.length; i++) {
        const slideElement = document.getElementById(`export-slide-${i}`);
        if (slideElement) {
          const dataUrl = await toPng(slideElement, {
            pixelRatio: 2,
          });

          const pptxSlide = pptx.addSlide();
          pptxSlide.addImage({ data: dataUrl, x: 0, y: 0, w: '100%', h: '100%' });
        }
        setExportProgress(Math.round(((i + 1) / slides.length) * 100));
      }

      await pptx.writeFile({ fileName: 'Power_Sharing_Class10.pptx' });
    } catch (error) {
      console.error("Export failed", error);
      alert("Failed to export to PPTX. Please try again.");
    } finally {
      setIsExporting(false);
      setExportProgress(0);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : direction < 0 ? -40 : 0,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 40 : direction > 0 ? -40 : 0,
      opacity: 0,
      scale: 0.98,
    })
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      {/* Presentation Container */}
      <div 
        className={cn(
          "bg-[#f8fafc] text-[#1e293b] font-sans flex flex-col overflow-hidden select-none border-8 border-[#1e3a8a]",
          "w-full max-w-6xl aspect-[16/9] shadow-2xl relative transition-all duration-300",
          isFullscreen ? "max-w-none w-screen h-screen border-none" : ""
        )}
      >
        {/* Invisible Click Areas for Navigation */}
        {!showOverview && (
          <>
            <div 
              className="absolute inset-y-0 left-0 w-24 z-40 cursor-pointer flex items-center justify-start pl-6 text-[#1e3a8a]/0 hover:text-[#1e3a8a]/40 bg-gradient-to-r from-black/5 to-transparent opacity-0 hover:opacity-100 transition-all duration-300"
              onClick={handlePrev}
            >
               <ChevronLeft size={64} />
            </div>
            <div 
              className="absolute inset-y-0 right-0 w-24 z-40 cursor-pointer flex items-center justify-end pr-6 text-[#1e3a8a]/0 hover:text-[#1e3a8a]/40 bg-gradient-to-l from-black/5 to-transparent opacity-0 hover:opacity-100 transition-all duration-300"
              onClick={handleNext}
            >
               <ChevronRight size={64} />
            </div>
          </>
        )}

        {/* Header */}
        {!showOverview && currentSlide.type !== 'title' && (
          <header className="bg-[#1e3a8a] text-white p-6 flex justify-between items-center shadow-md z-10 shrink-0">
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-widest text-[#fbbf24] uppercase">NCERT Chapter 01: Power Sharing</span>
              <h1 className="text-3xl font-black uppercase tracking-tight leading-none mt-1 flex items-center">
                <BookOpen className="text-[#fbbf24] w-6 h-6 mr-3" />
                {currentSlide.title}
              </h1>
            </div>
            <div className="text-right flex flex-col items-end">
              <div className="bg-white text-[#1e3a8a] px-3 py-1 rounded font-bold text-sm mb-1 shadow-sm">
                Slide {currentSlideIndex + 1} of {slides.length}
              </div>
              <div className="text-[10px] uppercase tracking-tighter opacity-80">CBSE Board Exam Series 2027</div>
              {currentSlide.isHighWeightage && (
                <div className="flex items-center space-x-1 text-[#fbbf24] text-[10px] uppercase font-bold mt-1 animate-pulse">
                  <AlertTriangle size={12} />
                  <span>Most Important</span>
                </div>
              )}
            </div>
          </header>
        )}

        {/* Main Content Area */}
        <main className="flex-1 relative overflow-hidden bg-[#f8fafc]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {!showOverview ? (
              <motion.div
                key={currentSlideIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 }
                }}
                className={cn(
                  "absolute inset-0 p-8 overflow-y-auto",
                  currentSlide.type === 'title' ? 'flex flex-col items-center justify-center text-center' : ''
                )}
              >
                {currentSlide.type === 'title' ? (
                  <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-4xl mx-auto h-full">
                     <div className="bg-[#fff7ed] border-2 border-[#fbbf24] text-[#9a3412] px-8 py-3 rounded font-black uppercase tracking-widest mb-6">
                      NCERT Strict Focus
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-[#1e3a8a] uppercase tracking-tight leading-none">
                      {currentSlide.title}
                    </h1>
                    {currentSlide.subtitle && (
                      <p className="text-xl md:text-2xl text-slate-600 font-bold uppercase tracking-tight leading-relaxed whitespace-pre-line">
                        {currentSlide.subtitle}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="min-h-full flex flex-col">
                    {currentSlide.content}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="overview"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-[#e2e8f0] p-8 overflow-y-auto z-50"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-black text-[#1e3a8a] uppercase tracking-tight">Slide Overview</h2>
                  <button 
                    onClick={() => setShowOverview(false)}
                    className="p-2 bg-white rounded-full text-[#1e3a8a] hover:bg-slate-200 transition-colors shadow"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {slides.map((slide, idx) => (
                    <div 
                      key={slide.id}
                      onClick={() => jumpToSlide(idx)}
                      className={cn(
                         "group cursor-pointer rounded-lg bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ring-2 border border-slate-200 flex flex-col aspect-video",
                         idx === currentSlideIndex ? "ring-[#1e3a8a] shadow-md scale-[1.02]" : "ring-transparent hover:ring-[#1e3a8a]/50"
                      )}
                    >
                       <div className={cn(
                         "px-3 py-1 text-[10px] font-bold uppercase tracking-wider flex justify-between items-center shrink-0 border-b",
                         slide.type === 'title' ? "bg-slate-800 text-white border-slate-700" :
                         slide.type === 'questions' ? "bg-[#fbbf24] text-[#9a3412] border-amber-300" :
                         "bg-slate-100 text-slate-500 border-slate-200"
                       )}>
                         <span>Slide {idx + 1}</span>
                         {slide.isHighWeightage && <AlertTriangle size={10} className="text-red-500" />}
                       </div>
                       <div className="p-4 flex-1 flex flex-col justify-center items-center text-center space-y-2">
                          <h3 className="font-bold text-[#1e3a8a] text-sm leading-tight line-clamp-2">
                             {slide.title}
                          </h3>
                          <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                             {slide.focus}
                          </p>
                       </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Footer Area */}
        {!showOverview && (
          <footer className="bg-slate-200 border-t border-slate-300 px-8 py-3 flex justify-between items-center text-[11px] font-bold text-slate-600 uppercase tracking-wider shrink-0 z-10 relative">
            <div className="flex items-center space-x-4">
              <span className="text-[#1e3a8a] flex items-center"><AlertCircle size={14} className="mr-1" /> CBSE Boards Focus: {currentSlide.focus}</span>
              <span className="text-slate-400">|</span>
              <span>Class 10 Political Science</span>
            </div>
            
            <div className="">
               Prepared by: ANSH KUMAR
            </div>
          </footer>
        )}

        {/* Interactive Progress Bar */}
        <div 
          className="h-2 w-full bg-slate-200 hover:bg-slate-300 absolute bottom-0 left-0 z-50 cursor-pointer transition-colors group"
          onClick={handleProgressBarClick}
          title="Click to jump to a slide"
        >
          <div 
            className="h-full bg-[#1e3a8a] transition-all duration-300 ease-out group-hover:bg-[#fbbf24]"
            style={{ width: `${((currentSlideIndex + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Presentation Controls */}
      <div className={cn(
        "flex space-x-2 mt-6 bg-[#1e3a8a] p-2 rounded shadow-xl border border-[#1e3a8a] transition-all duration-300 z-[100]",
        isFullscreen ? "opacity-30 hover:opacity-100 fixed bottom-8 left-1/2 -translate-x-1/2 group" : ""
      )}>
        <button 
          onClick={handlePrev}
          disabled={currentSlideIndex === 0 || showOverview}
          className="p-2 text-white disabled:opacity-30 hover:bg-white/20 rounded transition-colors flex items-center justify-center"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex items-center px-4 font-mono text-white/90 font-bold text-sm select-none tracking-widest bg-black/20 rounded mx-1">
          {currentSlideIndex + 1} / {slides.length}
        </div>

        <button 
          onClick={handleNext}
          disabled={currentSlideIndex === slides.length - 1 || showOverview}
          className="p-2 text-white disabled:opacity-30 hover:bg-white/20 rounded transition-colors flex items-center justify-center"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>

        <div className="w-px bg-white/20 my-2 mx-2" />

        <button 
          onClick={() => setShowOverview(!showOverview)}
          className={cn(
            "p-2 rounded transition-colors flex items-center justify-center",
            showOverview ? "bg-[#fbbf24] text-[#1e3a8a]" : "text-white hover:bg-white/20"
          )}
          aria-label="Toggle Overview"
          title="Slide Overview (Grid View)"
        >
          <Grid size={24} />
        </button>

        <button 
          onClick={toggleFullscreen}
          className="p-2 text-white hover:bg-white/20 rounded transition-colors flex items-center justify-center"
          aria-label="Toggle Fullscreen"
        >
          <Maximize2 size={24} />
        </button>

        <button 
          onClick={exportToPPTX}
          disabled={isExporting}
          className="p-2 text-[#fbbf24] hover:bg-white/20 rounded transition-colors flex items-center justify-center relative group"
          aria-label="Download PPTX"
          title="Download as PowerPoint (PPTX)"
        >
          {isExporting ? <Loader2 className="animate-spin" size={24} /> : <Download size={24} />}
          {isExporting && (
             <span className="absolute -top-10 bg-black text-white text-xs font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
                {exportProgress}%
             </span>
          )}
        </button>
      </div>

      {/* Hidden Export Container */}
      {isExporting && (
        <div className="fixed top-[200vh] left-0 pointer-events-none z-[-1] opacity-0">
          {slides.map((slide, idx) => (
            <div 
              key={`export-${idx}`}
              id={`export-slide-${idx}`} 
              className="w-[1280px] h-[720px] bg-[#f8fafc] text-[#1e293b] font-sans flex flex-col box-border border-8 border-[#1e3a8a] relative overflow-hidden"
              style={{ padding: 0 }}
            >
              {/* Header */}
              {slide.type !== 'title' && (
                <header className="bg-[#1e3a8a] text-white p-6 flex justify-between items-center z-10 shrink-0">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold tracking-widest text-[#fbbf24] uppercase">NCERT Chapter 01: Power Sharing</span>
                    <h1 className="text-3xl font-black uppercase tracking-tight leading-none mt-1 flex items-center">
                      <BookOpen className="text-[#fbbf24] w-6 h-6 mr-3" />
                      {slide.title}
                    </h1>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <div className="bg-white text-[#1e3a8a] px-3 py-1 rounded font-bold text-sm mb-1 shadow-sm">
                      Slide {idx + 1} of {slides.length}
                    </div>
                    <div className="text-[10px] uppercase tracking-tighter opacity-80">CBSE Board Exam Series 2027</div>
                    {slide.isHighWeightage && (
                      <div className="flex items-center space-x-1 text-[#fbbf24] text-[10px] uppercase font-bold mt-1">
                        <AlertTriangle size={12} />
                        <span>Most Important</span>
                      </div>
                    )}
                  </div>
                </header>
              )}

              {/* Main Content Area */}
              <main className="flex-1 relative overflow-hidden bg-[#f8fafc] p-8">
                  {slide.type === 'title' ? (
                    <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-4xl mx-auto h-full text-center">
                       <div className="bg-[#fff7ed] border-2 border-[#fbbf24] text-[#9a3412] px-8 py-3 rounded font-black uppercase tracking-widest mb-6">
                        NCERT Strict Focus
                      </div>
                      <h1 className="text-6xl font-black text-[#1e3a8a] uppercase tracking-tight leading-none">
                        {slide.title}
                      </h1>
                      {slide.subtitle && (
                        <p className="text-xl text-slate-600 font-bold uppercase tracking-tight leading-relaxed whitespace-pre-line">
                          {slide.subtitle}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="min-h-full flex flex-col">
                      {slide.content}
                    </div>
                  )}
              </main>

              {/* Footer Area */}
              <footer className="bg-slate-200 border-t border-slate-300 px-8 py-3 flex justify-between items-center text-[11px] font-bold text-slate-600 uppercase tracking-wider shrink-0 z-10 relative">
                <div className="flex items-center space-x-4">
                  <span className="text-[#1e3a8a] flex items-center"><AlertCircle size={14} className="mr-1" /> CBSE Boards Focus: {slide.focus}</span>
                  <span className="text-slate-400">|</span>
                  <span>Class 10 Political Science</span>
                </div>
                
                <div className="">
                   Prepared by: ANSH KUMAR
                </div>
              </footer>

              {/* Progress Bar */}
              <div className="h-2 w-full bg-slate-200 absolute bottom-0 left-0">
                <div 
                  className="h-full bg-[#1e3a8a]"
                  style={{ width: `${((idx + 1) / slides.length) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
