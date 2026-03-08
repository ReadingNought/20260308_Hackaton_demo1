import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Train, Hotel, Map, Bell, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { ALTERNATIVE_TRIP_DATA } from '../types';

type Tab = 'overview' | 'transport' | 'hotel' | 'sightseeing' | 'notifications';

export default function DashboardScreen() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const data = ALTERNATIVE_TRIP_DATA;

  const tabs = [
    { id: 'overview', icon: Home, label: 'Overview' },
    { id: 'transport', icon: Train, label: 'Transport' },
    { id: 'hotel', icon: Hotel, label: 'Hotel' },
    { id: 'sightseeing', icon: Map, label: 'Sites' },
    { id: 'notifications', icon: Bell, label: 'Alerts' },
  ] as const;

  return (
    <div className="h-full flex flex-col bg-surface-50">
      <header className="px-6 py-5 bg-brand-600 text-white shadow-sm flex-shrink-0">
        <h1 className="text-xl font-bold tracking-tight">Kyoto Trip</h1>
        <p className="text-brand-100 text-sm">{data.nights} Nights • Updated Route</p>
      </header>

      <div className="flex-1 overflow-y-auto p-4 pb-24 relative">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-4"
            >
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-surface-200">
                <h3 className="font-semibold text-surface-900 mb-4 border-b border-surface-100 pb-2">Timeline</h3>

                <div className="space-y-5">
                  <div className="flex gap-4 relative">
                    <div className="absolute top-2 bottom-0 left-1 w-px bg-surface-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-500 mt-1.5 shrink-0 z-10" />
                    <div>
                      <div className="text-xs font-bold text-brand-600 uppercase tracking-wider">Day 1</div>
                      <div className="text-sm font-medium text-surface-900 mt-1">
                        Tokyo → Kyoto
                      </div>
                      <div className="text-xs font-semibold text-brand-600 mt-1 flex items-center gap-1 bg-brand-50 px-2 py-0.5 rounded-md w-fit">
                        Shinkansen (Updated)
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 relative">
                    <div className="absolute top-2 bottom-0 left-1 w-px bg-surface-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-500 mt-1.5 shrink-0 z-10" />
                    <div>
                      <div className="text-xs font-bold text-brand-600 uppercase tracking-wider">Day 2</div>
                      <div className="text-sm font-medium text-surface-900 mt-1">
                        • {data.sightseeing[0]}<br />
                        • {data.sightseeing[1]}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-brand-500 bg-white mt-1.5 shrink-0 z-10" />
                    <div>
                      <div className="text-xs font-bold text-brand-600 uppercase tracking-wider">Day 3</div>
                      <div className="text-sm font-medium text-surface-900 mt-1">
                        • {data.sightseeing[2]}<br />
                        Return to Tokyo
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'transport' && (
            <motion.div
              key="transport"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-4"
            >
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-surface-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-surface-900">Outbound</h3>
                  <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-md">Rebooked</span>
                </div>

                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="text-center font-bold text-surface-900">
                    <div className="text-xl">Tokyo</div>
                    <div className="text-xs text-surface-500 font-medium">Station</div>
                  </div>
                  <Train className="w-6 h-6 text-brand-500" />
                  <div className="text-center font-bold text-surface-900">
                    <div className="text-xl">Kyoto</div>
                    <div className="text-xs text-surface-500 font-medium">Station</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-surface-100">
                  <div>
                    <div className="text-xs text-surface-500">Train</div>
                    <div className="text-sm font-medium text-surface-900">Nozomi 221</div>
                  </div>
                  <div>
                    <div className="text-xs text-surface-500">Seat</div>
                    <div className="text-sm font-medium text-surface-900">Car 5, 12A</div>
                  </div>
                </div>
              </div>

              {/* History Cancelled Flight */}
              <div className="bg-surface-100 p-4 rounded-xl border border-surface-200 opacity-70">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-surface-600">Original Flight</span>
                  <span className="text-xs font-bold text-red-500">Cancelled</span>
                </div>
                <div className="mt-2 text-sm text-surface-800 line-through">Haneda → Itami</div>
              </div>
            </motion.div>
          )}

          {activeTab === 'hotel' && (
            <motion.div
              key="hotel"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-white p-5 rounded-2xl shadow-sm border border-surface-200"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-surface-900">{data.hotel}</h3>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">Confirmed</span>
              </div>
              <div className="space-y-3 pt-3 border-t border-surface-100 text-sm">
                <div className="flex justify-between">
                  <span className="text-surface-500">Duration</span>
                  <span className="font-medium text-surface-900">{data.nights} Nights</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-surface-500">Room</span>
                  <span className="font-medium text-surface-900">Double Standard</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-surface-500">Meals</span>
                  <span className="font-medium text-surface-900">Breakfast Included</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'sightseeing' && (
            <motion.div
              key="sightseeing"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold text-surface-500 px-2 uppercase tracking-wide">Planned Spots</h3>
              {data.sightseeing.map((site, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-surface-200 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Map className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-surface-900">{site}</h4>
                    <p className="text-xs text-brand-600 mt-1 font-medium">Scheduled for Day {i === 2 ? 3 : 2}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'notifications' && (
            <motion.div
              key="notifications"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-3"
            >
              <div className="bg-brand-50 border-l-4 border-brand-500 p-4 rounded-r-xl shadow-sm">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-900 text-sm">Shinkansen Successfully Rebooked</h4>
                    <p className="text-xs text-brand-700 mt-1">Your new tickets to Kyoto Station have been confirmed.</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-50 border border-surface-200 p-4 rounded-xl shadow-sm">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-surface-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-surface-700 text-sm">Flight Cancelled</h4>
                    <p className="text-xs text-surface-500 mt-1">Haneda to Itami flight was cancelled. Alternative proposed.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 inset-x-0 bg-white border-t border-surface-200 px-2 pb-6 pt-2 flex justify-between z-50">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center gap-1 p-2 transition-colors relative ${isActive ? 'text-brand-600' : 'text-surface-400 hover:text-surface-600'
                }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-2 w-8 h-1 bg-brand-600 rounded-b-full"
                />
              )}
              <Icon className="w-6 h-6" />
              <span className="text-[10px] font-medium">{tab.label}</span>
              {tab.id === 'notifications' && (
                <div className="absolute top-1 right-2 w-2 h-2 rounded-full bg-red-500" />
              )}
            </button>
          )
        })}
      </nav>
    </div>
  );
}
