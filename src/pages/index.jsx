import React from 'react';

import PresentationSection from '../sections/PresentationSection';

import BasicMetaTags from '../bosons/MetaTags/Basic';
import ShareMetaTags from '../bosons/MetaTags/Share';
import AboutSection from '../sections/AboutSection';

function Home() {
  return (
    <>
      <BasicMetaTags />
      <ShareMetaTags />
      <PresentationSection />
      <AboutSection />
    </>
  );
}

export default Home;
