import { motion } from 'framer-motion';
import { ArrowRight, Train, Check, Plane, AlertTriangle, ArrowRightLeft } from 'lucide-react';
import { INITIAL_TRIP_DATA } from '../types';

interface Props {
  onNext: () => void;
}

export default function AlternativeScreen({ onNext }: Props) {
  const original = INITIAL_TRIP_DATA;

  return (
    <div className="h-full flex flex-col bg-surface-50 overflow-y-auto pb-24 relative">
      <div className="bg-brand-600 pt-16 pb-8 px-6 text-white text-center rounded-b-3xl shadow-md">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto text-white shadow-lg backdrop-blur-md border border-white/30">
          <ArrowRightLeft className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold tracking-tight mb-2">Alternative Plan</h2>
        <p className="text-brand-100 text-sm">I have found an optimal replacement route.</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Comparison Section */}
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 p-4 bg-surface-100/50 border border-surface-200 rounded-2xl opacity-60 relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-1/2 h-0.5 bg-red-400/50 -translate-y-1/2 rotate-[-5deg] z-10" />
            <div className="w-10 h-10 rounded-full bg-surface-200 flex items-center justify-center shrink-0">
              <Plane className="w-5 h-5 text-surface-500" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold text-surface-500 uppercase tracking-wider mb-1">Original Flight</div>
              <div className="text-sm font-medium text-surface-900 line-through decoration-red-500">Haneda → Itami</div>
              <div className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
                <AlertTriangle className="w-3 h-3" /> Cancelled
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center -my-3 relative z-10">
            <div className="w-8 h-8 rounded-full bg-white border border-surface-200 shadow-sm flex items-center justify-center text-surface-400">
              <ArrowRight className="w-4 h-4 rotate-90" />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
            className="flex items-center gap-4 p-5 bg-white border-2 border-brand-500 shadow-lg shadow-brand-500/10 rounded-2xl relative"
          >
            <div className="absolute -top-3 right-4 bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-sm">
              Recommended
            </div>
            <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0">
              <Train className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">New Route</div>
              <div className="text-base font-bold text-surface-900">Tokyo Station → Kyoto Station</div>
              <div className="text-sm font-medium text-surface-600 mt-1">Shinkansen Nozomi</div>
              
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-surface-100">
                <div>
                  <div className="text-xs text-surface-500">Price difference</div>
                  <div className="text-sm font-bold text-green-600">-$150 (Refunded)</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-surface-500">Delay</div>
                  <div className="text-sm font-medium text-surface-900">+45 mins</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* AI Note */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-brand-50 border border-brand-100 p-4 rounded-xl flex gap-3 text-brand-800 text-sm leading-relaxed"
        >
          <div className="w-6 h-6 rounded-full bg-brand-200 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-xs font-bold">AI</span>
          </div>
          <p>
            This Shinkansen route maintains your sightseeing schedule for {original.sightseeing[0]}. 
            The price difference will be automatically refunded to your card.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-surface-200 flex gap-3"
      >
        <button className="flex-1 py-4 bg-surface-100 hover:bg-surface-200 text-surface-800 rounded-xl font-medium transition-colors">
          View Details
        </button>
        <button 
          onClick={onNext}
          className="flex-[2] py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg shadow-brand-500/30 transition-colors active:scale-[0.98]"
        >
          <span>Accept Alternative</span>
          <Check className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
}
