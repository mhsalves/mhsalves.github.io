import React from 'react';

import BasicMetaTags from 'components/MetaTags/Basic';
import ShareMetaTags from 'components/MetaTags/Share';
import Header from 'components/Header';
import Footer from 'components/Footer';

import HeroSection from 'sections/HeroSection';
import AboutSection from 'sections/AboutSection';
import ExperienceSection from 'sections/ExperienceSection';
import ProjectsSection from 'sections/ProjectsSection';
import SkillsSection from 'sections/SkillsSection';
import EducationSection from 'sections/EducationSection';
import ContactSection from 'sections/ContactSection';

function Home() {
  return (
    <>
      <BasicMetaTags />
      <ShareMetaTags />

      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default Home;
