import GridAdaptrHero from '../components/GridAdaptrHero';
import GridSimulator from '../components/GridSimulator';
import NRCanQuoteCard from '../components/NRCanQuoteCard';
import TrackRecordSection from '../components/TrackRecordSection';
import StakeholderMatrix from '../components/StakeholderMatrix';
import TrustProof from '../components/TrustProof';


export default function Home() {
  return (
    <main className="min-h-screen bg-gunmetal text-lightcyan selection:bg-sienna selection:text-gunmetal">
      <GridAdaptrHero />
      <GridSimulator />
      <NRCanQuoteCard />
      <TrackRecordSection />
    </main>
  );
}