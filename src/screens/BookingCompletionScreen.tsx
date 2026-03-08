import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Calendar, Plane, Hotel } from 'lucide-react';
import { INITIAL_TRIP_DATA } from '../types';

interface Props {
  onNext: () => void;
}

export default function BookingCompletionScreen({ onNext }: Props) {
  const data = INITIAL_TRIP_DATA;

  useEffect(() => {
    // Wait for 5 seconds to simulate user reviewing the booking before the cancellation event happens
    const timer = setTimeout(() => {
      onNext();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="h-full flex flex-col bg-surface-50 overflow-y-auto pb-8">
      {/* Header Success Banner */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-green-500 pt-16 pb-8 px-6 text-white text-center rounded-b-3xl shadow-md flex flex-col items-center"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-green-500 shadow-lg"
        >
          <CheckCircle2 className="w-10 h-10" />
        </motion.div>
        <h2 className="text-xl font-bold tracking-tight mb-2">Trip Successfully Booked</h2>
        <p className="text-green-50 text-sm">Your reservation details are confirmed.</p>
      </motion.div>

      <div className="p-6 space-y-4">
        {/* Total Cost Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-surface-200 flex justify-between items-center"
        >
          <span className="font-semibold text-surface-900">Total Cost Paid</span>
          <span className="text-xl font-bold text-brand-600">${data.totalPrice}</span>
        </motion.div>

        {/* Itinerary Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-surface-200"
        >
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
                <div className="text-xs text-green-600 font-medium mt-1">Status: Confirmed</div>
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
        </motion.div>
      </div>
    </div>
  );
}
