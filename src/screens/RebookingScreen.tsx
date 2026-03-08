import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, Train, CalendarDays, Hotel } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export default function RebookingScreen({ onNext }: Props) {
  const [completedSteps, setCompletedSteps] = useState<number>(0);

  const steps = [
    { id: 1, label: 'Rebooking Shinkansen', icon: Train },
    { id: 2, label: 'Adjusting itinerary schedule', icon: CalendarDays },
    { id: 3, label: 'Verifying hotel schedule', icon: Hotel },
  ];

  useEffect(() => {
    const t1 = setTimeout(() => setCompletedSteps(1), 1500);
    const t2 = setTimeout(() => setCompletedSteps(2), 2500);
    const t3 = setTimeout(() => setCompletedSteps(3), 3500);
    const t4 = setTimeout(() => {
      // Small pause before navigating
      setTimeout(() => onNext(), 1000);
    }, 4500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onNext]);

  return (
    <div className="h-full flex flex-col justify-center px-8 bg-surface-50 relative">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-600 mx-auto flex items-center justify-center mb-6">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-surface-900 mb-2">Updating Trip</h2>
        <p className="text-surface-500 text-sm">Securing your new reservations.</p>
      </motion.div>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const isCompleted = completedSteps >= step.id;
          const isCurrent = completedSteps === index;
          const Icon = step.icon;

          return (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-surface-100"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                isCompleted ? 'bg-green-100 text-green-600' : 
                isCurrent ? 'bg-brand-50 text-brand-500' : 'bg-surface-100 text-surface-400'
              }`}>
                {isCompleted ? (
                   <CheckCircle2 className="w-5 h-5" />
                ) : (
                   <Icon className="w-4 h-4" />
                )}
              </div>
              <div className="flex-1">
                <h4 className={`text-sm font-medium ${
                  isCompleted ? 'text-surface-900' : 
                  isCurrent ? 'text-surface-900' : 'text-surface-400'
                }`}>
                  {step.label}
                </h4>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {completedSteps >= 3 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="absolute bottom-16 left-6 right-6 bg-green-500 text-white p-4 rounded-xl shadow-xl shadow-green-500/20 text-center font-medium"
          >
            Your alternative travel plan has been successfully arranged.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
