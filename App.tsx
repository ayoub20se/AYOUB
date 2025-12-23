
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, ChevronDown, X, Copy, Check, Phone, Construction, Sun, Moon } from 'lucide-react';
import Intro from './components/Intro';
import SocialLinks from './components/SocialLinks';
import DateTimeDisplay from './components/DateTimeDisplay';
import DhikrWidget from './components/DhikrWidget';
import KnowledgeWidget from './components/KnowledgeWidget';
import { TRANSLATIONS, LANGUAGES } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showEmailView, setShowEmailView] = useState(false);
  const [showWhatsappView, setShowWhatsappView] = useState(false);
  const [showPortfolioView, setShowPortfolioView] = useState(false);
  const [copied, setCopied] = useState(false);

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';
  const emailAddress = "ayoub2002se@gmail.com";
  const whatsappNumber = "0792762144";

  const toggleLang = (newLang: Language) => {
    setLang(newLang);
    setShowLangMenu(false);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const themeClasses = theme === 'dark' 
    ? 'bg-slate-950 text-white selection:bg-blue-500/30' 
    : 'bg-slate-50 text-slate-900 selection:bg-blue-200';

  return (
    <div className={`relative min-h-screen transition-colors duration-500 ${themeClasses} ${isRtl ? 'font-arabic' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <AnimatePresence mode="wait">
        {loading ? (
          <Intro 
            key="intro" 
            onComplete={() => setLoading(false)} 
            welcomeText={t.welcome} 
            theme={theme}
          />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col min-h-screen"
          >
            {/* Background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] ${theme === 'dark' ? 'bg-blue-600/10' : 'bg-blue-400/10'} blur-[150px] rounded-full`}></div>
              <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] ${theme === 'dark' ? 'bg-cyan-600/10' : 'bg-cyan-400/10'} blur-[150px] rounded-full`}></div>
            </div>

            {/* Header Area */}
            <header className="relative z-30 px-6 md:px-12 py-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
              {/* Logo Side - Left */}
              <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3 order-1">
                <motion.div 
                  initial={{ x: isRtl ? 20 : -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex items-center space-x-4 space-x-reverse pt-2 mb-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] transform hover:rotate-6 transition-transform">
                    <span className="text-white font-black text-2xl italic">A</span>
                  </div>
                  <div className="flex flex-col">
                    <span className={`font-bold tracking-tighter text-xl ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>AYOUB</span>
                  </div>
                </motion.div>
                
                {/* Spiritual Reminder Widget positioned under logo */}
                <DhikrWidget theme={theme} />
              </div>

              {/* Central Widget Area - Center */}
              <div className="flex justify-center w-full lg:w-1/3 order-3 lg:order-2">
                <KnowledgeWidget theme={theme} />
              </div>

              {/* Actions & Widget Side - Right */}
              <div className="flex flex-col items-center lg:items-end space-y-6 w-full lg:w-1/3 order-2 lg:order-3">
                <div className="flex items-center space-x-3 md:space-x-4 space-x-reverse">
                  {/* Theme Toggle */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleTheme}
                    className={`p-2.5 rounded-full transition-all ${theme === 'dark' ? 'bg-slate-900 text-yellow-400 border-slate-800' : 'bg-white text-slate-600 border-slate-200'} border shadow-sm`}
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  </motion.button>

                  {/* Language Toggle */}
                  <div className="relative">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowLangMenu(!showLangMenu)}
                      className={`flex items-center space-x-2 space-x-reverse border rounded-full px-4 py-2 transition-all backdrop-blur-md ${theme === 'dark' ? 'bg-slate-900/50 border-slate-800 text-slate-300 hover:text-white' : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'}`}
                    >
                      <Languages size={18} />
                      <span className="uppercase text-xs font-bold">{lang}</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${showLangMenu ? 'rotate-180' : ''}`} />
                    </motion.button>

                    <AnimatePresence>
                      {showLangMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className={`absolute top-full mt-2 ${isRtl ? 'left-0' : 'right-0'} w-40 border rounded-2xl p-2 backdrop-blur-xl shadow-2xl z-50 overflow-hidden ${theme === 'dark' ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200'}`}
                        >
                          {LANGUAGES.map((l) => (
                            <button
                              key={l.code}
                              onClick={() => toggleLang(l.code)}
                              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${lang === l.code ? 'bg-blue-600/20 text-blue-500' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-900'}`}
                            >
                              <span>{l.label}</span>
                              <span>{l.flag}</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Date & Time Widget Positioned Under Language Toggle */}
                <DateTimeDisplay theme={theme} lang={lang} />
              </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex-grow flex flex-col items-center justify-center py-12 px-6">
              <div className="text-center mb-16 max-w-4xl">
                <motion.h1 
                  key={`title-${lang}-${theme}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className={`text-5xl md:text-8xl font-black mb-6 leading-[1.1] ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                >
                  {t.connectWithMe} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">{t.me}</span>
                </motion.h1>
              </div>

              <SocialLinks 
                onEmailClick={() => setShowEmailView(true)} 
                onWhatsappClick={() => setShowWhatsappView(true)}
                theme={theme}
              />
            </main>

            {/* Email View Overlay */}
            <AnimatePresence>
              {showEmailView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`fixed inset-0 z-[100] backdrop-blur-2xl flex items-center justify-center p-6 ${theme === 'dark' ? 'bg-slate-950/90' : 'bg-white/90'}`}
                >
                  <motion.button
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    onClick={() => setShowEmailView(false)}
                    className={`absolute top-10 right-10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors ${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-600'}`}
                  >
                    <X size={24} />
                  </motion.button>

                  <div className="text-center">
                    <motion.h2
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", damping: 12 }}
                      className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-cyan-500 mb-8"
                    >
                      AYOUB
                    </motion.h2>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className={`group relative inline-flex items-center space-x-4 border rounded-3xl p-6 px-10 hover:border-blue-500 transition-all cursor-pointer ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}
                      onClick={() => copyToClipboard(emailAddress)}
                    >
                      <span className={`text-2xl md:text-4xl font-medium tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        {emailAddress}
                      </span>
                      <div className="ml-4">
                        {copied ? (
                          <Check className="text-green-500" size={32} />
                        ) : (
                          <Copy className={`transition-colors ${theme === 'dark' ? 'text-slate-500 group-hover:text-blue-400' : 'text-slate-400 group-hover:text-blue-500'}`} size={32} />
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* WhatsApp View Overlay */}
            <AnimatePresence>
              {showWhatsappView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`fixed inset-0 z-[100] backdrop-blur-2xl flex items-center justify-center p-6 ${theme === 'dark' ? 'bg-slate-950/90' : 'bg-white/90'}`}
                >
                  <motion.button
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    onClick={() => setShowWhatsappView(false)}
                    className={`absolute top-10 right-10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors ${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-600'}`}
                  >
                    <X size={24} />
                  </motion.button>

                  <div className="text-center">
                    <motion.h2
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", damping: 12 }}
                      className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-t from-green-500 to-emerald-400 mb-8"
                    >
                      AYOUB
                    </motion.h2>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className={`group relative inline-flex items-center space-x-4 border rounded-3xl p-6 px-10 hover:border-green-500 transition-all cursor-pointer ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}
                      onClick={() => copyToClipboard(whatsappNumber)}
                    >
                      <span className={`text-2xl md:text-5xl font-bold tracking-widest ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        {whatsappNumber}
                      </span>
                      <div className="ml-4">
                        {copied ? (
                          <Check className="text-green-500" size={32} />
                        ) : (
                          <Phone className={`transition-colors ${theme === 'dark' ? 'text-slate-500 group-hover:text-green-400' : 'text-slate-400 group-hover:text-green-500'}`} size={32} />
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Portfolio Overlay */}
            <AnimatePresence>
              {showPortfolioView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`fixed inset-0 z-[100] backdrop-blur-3xl flex items-center justify-center p-6 ${theme === 'dark' ? 'bg-slate-950/95' : 'bg-white/95'}`}
                >
                  <motion.button
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    onClick={() => setShowPortfolioView(false)}
                    className={`absolute top-10 right-10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors ${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-600'}`}
                  >
                    <X size={24} />
                  </motion.button>

                  <div className="text-center max-w-2xl">
                    <motion.h2
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-yellow-600 mb-4"
                    >
                      AYOUB
                    </motion.h2>
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="relative inline-block mb-10"
                    >
                      <div className="absolute inset-0 bg-orange-500/20 blur-[60px] rounded-full"></div>
                      <div className={`relative border-2 border-orange-500/30 rounded-full p-12 ${theme === 'dark' ? 'bg-slate-900' : 'bg-white shadow-xl'}`}>
                        <Construction size={80} className="text-orange-500 animate-pulse" />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className={`text-3xl md:text-5xl font-arabic font-black mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        الصفحة في طور الإنجاز
                      </h3>
                      <p className="text-slate-400 text-lg uppercase tracking-widest font-light">
                        This section is currently under development. Stay tuned!
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer */}
            <footer className={`relative z-10 p-12 text-center border-t ${theme === 'dark' ? 'border-slate-900/50' : 'border-slate-200'}`}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center space-y-4"
              >
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className={`text-sm font-arabic font-bold ${theme === 'dark' ? 'text-blue-400/80' : 'text-blue-600'}`}
                >
                  تم تطوير الموقع طرف AYOUB
                </motion.p>
              </motion.div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
