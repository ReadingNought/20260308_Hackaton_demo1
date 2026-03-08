import { motion } from 'framer-motion';
import { Plane, Hotel, Map, ArrowRight, Check } from 'lucide-react';
import { INITIAL_TRIP_DATA } from '../types';

interface Props {
  onNext: () => void;
}

export default function ProposalScreen({ onNext }: Props) {
  const data = INITIAL_TRIP_DATA;

  return (
    <div className="h-full flex flex-col bg-surface-50 overflow-y-auto pb-24">
      {/* Header */}
      <div className="bg-brand-600 pt-12 pb-6 px-6 text-white rounded-b-3xl shadow-md">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold tracking-tight mb-1">Kyoto Trip Plan</h2>
          <p className="text-brand-100">{data.nights} Nights / {data.days} Days</p>
        </motion.div>
      </div>

      <div className="p-6 space-y-4">
        {/* Transportation Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-surface-200"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
              <Plane className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-surface-900">Transportation</h3>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="text-center font-medium">
              <div className="text-lg">Tokyo</div>
              <div className="text-xs text-surface-500">Haneda</div>
            </div>
            <ArrowRight className="w-5 h-5 text-surface-300" />
            <div className="text-center font-medium">
              <div className="text-lg">Osaka</div>
              <div className="text-xs text-surface-500">Itami (Kyoto)</div>
            </div>
          </div>
        </motion.div>

        {/* Hotel Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-surface-200"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center text-surface-600">
              <Hotel className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-surface-900">Accommodation</h3>
          </div>
          <p className="text-sm font-medium text-surface-800">{data.hotel}</p>
          <p className="text-xs text-surface-500 mt-1">{data.nights} nights • Breakfast Included</p>
        </motion.div>

        {/* Sightseeing Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-surface-200"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
              <Map className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-surface-900">Sightseeing Itinerary</h3>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-brand-500" />
                <div className="w-px h-full bg-surface-200 my-1" />
              </div>
              <div className="pb-2">
                <div className="text-xs font-semibold text-brand-600 uppercase">Day 1</div>
                <div className="text-sm text-surface-800 mt-1">Arrive in Kyoto</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-brand-500" />
                <div className="w-px h-full bg-surface-200 my-1" />
              </div>
              <div className="pb-2">
                <div className="text-xs font-semibold text-brand-600 uppercase">Day 2</div>
                <div className="text-sm text-surface-800 mt-1">
                  • {data.sightseeing[0]}<br/>
                  • {data.sightseeing[1]}
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full border-2 border-brand-500 bg-white" />
              </div>
              <div>
                <div className="text-xs font-semibold text-brand-600 uppercase">Day 3</div>
                <div className="text-sm text-surface-800 mt-1">
                  • {data.sightseeing[2]}<br/>
                  Return to Tokyo
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Bar */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-surface-200"
      >
        <div className="flex items-center justify-between mb-3 px-2">
          <span className="text-sm font-medium text-surface-500">Total Price</span>
          <span className="text-xl font-bold text-surface-900">${data.totalPrice}</span>
        </div>
        <button 
          onClick={onNext}
          className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg shadow-brand-500/30 transition-colors active:scale-[0.98]"
        >
          <span>Book This Plan</span>
          <Check className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
}
