import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, Globe } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export default function HomeScreen({ onNext }: Props) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  
  const fullText = "I want to travel from Tokyo to Kyoto for 2 nights and 3 days. Transportation can be train or flight. I want a mid-range hotel. I want to visit Kiyomizu Temple, Fushimi Inari, and Arashiyama.";

  useEffect(() => {
    if (isListening) {
      // Simulate speech to text typing effect
      let i = 0;
      const interval = setInterval(() => {
        setTranscript(fullText.slice(0, i));
        i += 2; // Speed up typing slightly
        if (i > fullText.length) {
          clearInterval(interval);
          setTimeout(() => {
            setIsListening(false);
            onNext(); // Auto transition after speaking finishes
          }, 1000); // Wait 1 second before transitioning
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isListening, onNext]);

  return (
    <div className="h-full flex flex-col bg-surface-50">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-surface-200 bg-white">
        <div className="flex items-center gap-2">
          <Globe className="w-6 h-6 text-brand-500" />
          <h1 className="text-lg font-semibold tracking-tight text-surface-900">AI Concierge</h1>
        </div>
      </header>

      {/* Chat History */}
      <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] border border-surface-100"
        >
          <p className="text-[15px] leading-relaxed text-surface-800">
            Hello! I can plan your entire trip including transportation, hotels, and sightseeing.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] border border-surface-100"
        >
          <p className="text-[15px] leading-relaxed text-surface-800">
            Where would you like to travel?
          </p>
        </motion.div>

        {transcript && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="self-end bg-brand-500 text-white p-4 rounded-2xl rounded-tr-sm shadow-md max-w-[85%]"
          >
            <p className="text-[15px] leading-relaxed">{transcript}</p>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-surface-200">
        <div className="flex items-center gap-2 bg-surface-100 rounded-full p-2 pl-4">
          <input 
            type="text" 
            placeholder="Type or speak..." 
            className="flex-1 bg-transparent border-none outline-none text-[15px] text-surface-900 placeholder:text-surface-400"
            disabled={isListening}
          />
          <button 
            className="p-3 bg-brand-500 text-white rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform"
            onClick={() => setIsListening(true)}
          >
            {isListening ? (
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <div className="w-5 h-5 rounded-full bg-white/80" />
              </motion.div>
            ) : (
              <Mic className="w-5 h-5 fill-current" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
