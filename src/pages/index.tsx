import { useRef } from 'react';
import {
  ArcadeContent,
  CoreTeamSection,
  Header,
  Hero,
  PartnersSection,
  PlayDevSection,
  RoadmapSection,
  VideoSection,
} from '../../components/LandingPageComponents';
import Footer from '../../components/LandingPageComponents/Footer';

export default function Home() {
  const PartnersSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Header />
      <Hero />
      <VideoSection PartnersSectionRef={PartnersSectionRef} />
      <ArcadeContent />
      <PlayDevSection />
      <RoadmapSection />
      <CoreTeamSection />
      <PartnersSection PartnersSectionRef={PartnersSectionRef} />
      <Footer />
    </div>
  );
}
