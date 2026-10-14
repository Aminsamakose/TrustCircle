'use client';

import { useHomeState } from './useHomeState';
import Intro from './sections/Intro';
import Progress from './sections/Progress';
import Nav from './sections/Nav';
import HomeSection from './sections/HomeSection';
import VideoSection from './sections/VideoSection';
import PeopleSection from './sections/PeopleSection';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import HowSection from './sections/HowSection';
import JourneySection from './sections/JourneySection';
import LoansSection from './sections/LoansSection';
import BizdevSection from './sections/BizdevSection';
import ServeSection from './sections/ServeSection';
import ImpactSection from './sections/ImpactSection';
import StoriesSection from './sections/StoriesSection';
import PartnersSection from './sections/PartnersSection';
import JoinSection from './sections/JoinSection';
import Footer from './sections/Footer';
import FaqModal from './sections/FaqModal';
import MemberModal from './sections/MemberModal';
import LoanModal from './sections/LoanModal';
import ContactModal from './sections/ContactModal';

export default function HomeClient() {
  const v = useHomeState();
  return (
    <div className={v.rootCls} style={{ background: '#fff', color: '#121C3D' }}>
      <Intro v={v} />
      <Progress v={v} />
      <Nav v={v} />
      <main>
        <HomeSection v={v} />
        <VideoSection v={v} />
        <PeopleSection v={v} />
        <ProblemSection v={v} />
        <SolutionSection v={v} />
        <HowSection v={v} />
        <JourneySection v={v} />
        <LoansSection v={v} />
        <BizdevSection v={v} />
        <ServeSection v={v} />
        <ImpactSection v={v} />
        <StoriesSection v={v} />
        <PartnersSection v={v} />
        <JoinSection v={v} />
      </main>
      <Footer v={v} />
      <FaqModal v={v} />
      <MemberModal v={v} />
      <LoanModal v={v} />
      <ContactModal v={v} />
    </div>
  );
}
