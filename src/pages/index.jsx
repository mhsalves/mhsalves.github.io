import React from 'react';

import PresentationSection from '../sections/PresentationSection';

import BasicMetaTags from '../bosons/MetaTags/Basic';
import AboutSection from '../sections/AboutSection';

function Home() {
  return (
    <>
      <BasicMetaTags />
      <PresentationSection />
      <AboutSection />
    </>
  );
}

export default Home;
