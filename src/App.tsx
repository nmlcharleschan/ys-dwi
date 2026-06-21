import CountdownSection from './components/CountdownSection'
import CurtainSection from './components/CurtainSection'
import DressCodeSection from './components/DressCodeSection'
import GiftsSection from './components/GiftsSection'
import LanguageToggle from './components/LanguageToggle'
import MenuSection from './components/MenuSection'
import RSVPSection from './components/RSVPSection'
import ScratchRevealSection from './components/ScratchRevealSection'
import ThankYouSection from './components/ThankYouSection'
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
      <MenuSection />
      <DressCodeSection />
      <GiftsSection />
      <TransportSection />
      <RSVPSection />
      <ThankYouSection />
    </main>
  )
}

export default App
