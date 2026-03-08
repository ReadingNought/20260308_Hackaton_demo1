import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, Plane, Hotel, MapPin, Calendar } from 'lucide-react';
import { INITIAL_TRIP_DATA } from '../types';

interface Props {
  onNext: () => void;
}

export default function CancellationScreen({ onNext }: Props) {
  const data = INITIAL_TRIP_DATA;

  useEffect(() => {
    // Wait for 3 seconds of showing the banner, then auto transition to AI Alternative Screen
    const timer = setTimeout(() => {
      onNext();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="h-full flex flex-col bg-surface-50 overflow-y-auto pb-8 relative">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-green-500 pt-16 pb-8 px-6 text-white text-center rounded-b-3xl shadow-md flex flex-col items-center"
      >
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-green-500 shadow-lg">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-xl font-bold tracking-tight mb-2">Trip Successfully Booked</h2>
        <p className="text-green-50 text-sm">Your reservation details are confirmed.</p>
      </motion.div>

      <div className="p-6 space-y-4 opacity-70">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-surface-200 flex justify-between items-center">
          <span className="font-semibold text-surface-900">Total Cost Paid</span>
          <span className="text-xl font-bold text-brand-600">${data.totalPrice}</span>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-surface-200">
          <h3 className="font-semibold text-surface-900 mb-4 border-b border-surface-100 pb-2">Itinerary Overview</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-surface-400" />
              <div className="text-sm"><span className="text-surface-500">Tokyo →</span> <b className="text-surface-900">Kyoto</b></div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-surface-400" />
              <div className="text-sm font-medium text-surface-900">{data.nights} Nights / {data.days} Days</div>
            </div>
            <div className="flex items-start gap-3">
              <Plane className="w-5 h-5 text-surface-400 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-surface-900">Flight (Haneda → Itami)</div>
                <div className="text-xs text-red-500 font-medium mt-1">Status: Cancelled</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Hotel className="w-5 h-5 text-surface-400 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-surface-900">{data.hotel}</div>
                <div className="text-xs text-green-600 font-medium mt-1">Status: Confirmed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Push Notification Overlay */}
      <div className="absolute inset-0 flex mt-4 justify-center pointer-events-none z-50 px-4">
        <motion.div 
          initial={{ y: -100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="bg-white rounded-2xl shadow-2xl border-l-4 border-red-500 p-4 w-full self-start flex gap-4 items-start pointer-events-auto mt-4"
        >
          <div className="bg-red-50 p-2 rounded-full">
            <AlertTriangle className="w-6 h-6 text-red-500" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-surface-900 text-sm">URGENT: Flight Cancelled</h4>
            <p className="text-xs text-surface-600 mt-1 mb-2">
              Your booked flight from Haneda to Itami has been cancelled by the airline.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <motion.div 
                animate={{ opacity: [0.5, 1, 0.5] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-brand-500 rounded-full" 
              />
              <span className="text-[10px] uppercase font-bold text-brand-600 tracking-wider">AI is generating alternatives...</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dark overlay backdrop to focus on notification */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        className="absolute inset-0 bg-surface-900 pointer-events-none z-40"
      />
    </div>
  );
}
