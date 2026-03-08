import { useState } from 'react';
import type { ScreenType } from './types';
import HomeScreen from './screens/HomeScreen';
import UnderstandingScreen from './screens/UnderstandingScreen';
import ProposalScreen from './screens/ProposalScreen';
import BookingProgressScreen from './screens/BookingProgressScreen';
import BookingCompletionScreen from './screens/BookingCompletionScreen';
import CancellationScreen from './screens/CancellationScreen';
import AlternativeScreen from './screens/AlternativeScreen';
import RebookingScreen from './screens/RebookingScreen';
import DashboardScreen from './screens/DashboardScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('HOME');

  return (
    <div className="app-container relative">
      {/* Header Area could go here if persistent, but screens may have different headers */}
      
      <main className="flex-1 overflow-hidden relative">
        {currentScreen === 'HOME' && <HomeScreen onNext={() => setCurrentScreen('UNDERSTANDING')} />}
        {currentScreen === 'UNDERSTANDING' && <UnderstandingScreen onNext={() => setCurrentScreen('PROPOSAL')} />}
        {currentScreen === 'PROPOSAL' && <ProposalScreen onNext={() => setCurrentScreen('BOOKING_PROGRESS')} />}
        {currentScreen === 'BOOKING_PROGRESS' && <BookingProgressScreen onNext={() => setCurrentScreen('BOOKING_COMPLETION')} />}
        {currentScreen === 'BOOKING_COMPLETION' && <BookingCompletionScreen onNext={() => setCurrentScreen('CANCELLATION')} />}
        {currentScreen === 'CANCELLATION' && <CancellationScreen onNext={() => setCurrentScreen('ALTERNATIVE')} />}
        {currentScreen === 'ALTERNATIVE' && <AlternativeScreen onNext={() => setCurrentScreen('REBOOKING')} />}
        {currentScreen === 'REBOOKING' && <RebookingScreen onNext={() => setCurrentScreen('DASHBOARD')} />}
        {currentScreen === 'DASHBOARD' && <DashboardScreen />}
      </main>
    </div>
  );
}

export default App;
