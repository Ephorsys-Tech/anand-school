import React from 'react';
import AboutSchool from '@/components/aboutPage/AboutSchool';
import VisionMission from '@/components/aboutPage/VisionMission';
import PrincipalMessage from '@/components/aboutPage/PrincipalMessage';
import ChairmanMessage from '@/components/aboutPage/ChairmanMessage';
import Achievements from '@/components/aboutPage/Achievements';


export default function AboutPage() {
  return (
    <main className="grow pt-24 bg-cream">
      <AboutSchool />
      <VisionMission />
      <PrincipalMessage />
      <ChairmanMessage />
      <Achievements />
    </main>
  );
}