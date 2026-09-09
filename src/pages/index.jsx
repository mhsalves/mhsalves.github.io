import React from 'react';

import PresentationSection from 'sections/PresentationSection';

import BasicMetaTags from 'components/MetaTags/Basic';
import ShareMetaTags from 'components/MetaTags/Share';
import AboutSection from 'sections/AboutSection';

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
