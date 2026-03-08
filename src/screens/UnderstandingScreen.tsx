import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, MapPin, Calendar, Train, Hotel, Map } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export default function UnderstandingScreen({ onNext }: Props) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1500); 
    const timer2 = setTimeout(() => setStep(2), 3000);
    const timer3 = setTimeout(() => setStep(3), 4500);
    const timer4 = setTimeout(() => onNext(), 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onNext]);

  return (
    <div className="h-full flex flex-col bg-surface-50 p-6 pt-12 items-center">
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mb-6 shadow-brand-500/20 shadow-xl"
      >
        <BrainCircuit className="w-10 h-10 text-brand-600" />
      </motion.div>

      <h2 className="text-xl font-bold text-surface-900 mb-8 tracking-tight text-center">
        {step === 0 && "Organizing your request..."}
        {step === 1 && "Searching transportation..."}
        {step === 2 && "Comparing hotels..."}
        {step === 3 && "Assembling itinerary..."}
      </h2>

      <div className="w-full max-w-sm space-y-4">
        {/* Trip Summary Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-5 rounded-2xl shadow-sm border border-surface-200"
        >
          <div className="mb-4 text-sm font-semibold text-brand-600 uppercase tracking-wider">Trip Summary</div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-surface-400" />
              <div className="text-sm"><span className="text-surface-500">Tokyo →</span> <b className="text-surface-900">Kyoto</b></div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-surface-400" />
              <div className="text-sm text-surface-900 font-medium">2 Nights / 3 Days</div>
            </div>
          </div>
        </motion.div>

        {/* Preferences Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 20 }}
          className="bg-white p-5 rounded-2xl shadow-sm border border-surface-200"
        >
          <div className="mb-4 text-sm font-semibold text-brand-600 uppercase tracking-wider">Preferences</div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Train className="w-5 h-5 text-surface-400 mt-0.5" />
              <div>
                <div className="text-xs text-surface-500 mb-0.5">Transportation</div>
                <div className="text-sm font-medium text-surface-900">Train or Flight</div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 2 ? 1 : 0 }}
              className="flex items-start gap-3"
            >
              <Hotel className="w-5 h-5 text-surface-400 mt-0.5" />
              <div>
                <div className="text-xs text-surface-500 mb-0.5">Hotel</div>
                <div className="text-sm font-medium text-surface-900">Mid-range</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 3 ? 1 : 0 }}
              className="flex items-start gap-3"
            >
              <Map className="w-5 h-5 text-surface-400 mt-0.5" />
              <div>
                <div className="text-xs text-surface-500 mb-0.5">Sightseeing</div>
                <div className="text-sm font-medium text-surface-900 leading-snug">
                  Kiyomizu Temple<br/>
                  Fushimi Inari Shrine<br/>
                  Arashiyama
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
