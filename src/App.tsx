import CountdownSection from './components/CountdownSection'
import CurtainSection from './components/CurtainSection'
import DressCodeSection from './components/DressCodeSection'
import LanguageToggle from './components/LanguageToggle'
import QASection from './components/QASection'
import RSVPSection from './components/RSVPSection'
import ScratchRevealSection from './components/ScratchRevealSection'
import ThankYouSection from './components/ThankYouSection'
import TimelineSection from './components/TimelineSection'
import TransportSection from './components/TransportSection'
import VenueSection from './components/VenueSection'

function App() {
  return (
    <main className="bg-white">
      <LanguageToggle />
      <CurtainSection />
      <ScratchRevealSection />
      <CountdownSection />
      <VenueSection />
      <TimelineSection />
      <DressCodeSection />
      <TransportSection />
      <RSVPSection />
      <QASection />
      <ThankYouSection />
    </main>
  )
}

export default App
