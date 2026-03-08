import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, Plane, Hotel, Calendar } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export default function BookingProgressScreen({ onNext }: Props) {
  const [completedSteps, setCompletedSteps] = useState<number>(0);

  const steps = [
    { id: 1, label: 'Booking transportation', icon: Plane },
    { id: 2, label: 'Booking hotel', icon: Hotel },
    { id: 3, label: 'Registering sightseeing schedule', icon: Calendar },
  ];

  useEffect(() => {
    const t1 = setTimeout(() => setCompletedSteps(1), 1500);
    const t2 = setTimeout(() => setCompletedSteps(2), 3000);
    const t3 = setTimeout(() => setCompletedSteps(3), 4500);
    const t4 = setTimeout(() => onNext(), 5500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onNext]);

  return (
    <div className="h-full flex flex-col pt-32 px-8 bg-surface-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl font-bold tracking-tight text-surface-900 mb-2">Executing Booking</h2>
        <p className="text-surface-500 text-sm">Please wait while I confirm your reservations.</p>
      </motion.div>

      <div className="space-y-6">
        {steps.map((step, index) => {
          const isCompleted = completedSteps >= step.id;
          const isCurrent = completedSteps === index;
          const Icon = step.icon;

          return (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex items-center gap-4 p-4 rounded-2xl border ${
                isCompleted 
                  ? 'border-brand-200 bg-brand-50' 
                  : isCurrent 
                    ? 'border-surface-200 bg-white shadow-sm' 
                    : 'border-transparent opacity-50'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isCompleted ? 'bg-brand-500 text-white' : 'bg-surface-100 text-surface-500'
              }`}>
                {isCompleted ? (
                   <CheckCircle2 className="w-6 h-6" />
                ) : isCurrent ? (
                   <Loader2 className="w-5 h-5 animate-spin text-brand-500" />
                ) : (
                   <Icon className="w-5 h-5" />
                )}
              </div>
              <div className="flex-1">
                <h4 className={`font-medium text-sm ${
                  isCompleted ? 'text-brand-900' : 'text-surface-900'
                }`}>
                  {step.label}
                </h4>
                {isCompleted && <p className="text-xs text-brand-600 mt-0.5">Confirmed</p>}
                {isCurrent && <p className="text-xs text-surface-500 mt-0.5">Processing...</p>}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
