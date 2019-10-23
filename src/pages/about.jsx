import React from 'react';
import pJson from '../../package.json';

/**
 * If you are in dev enviroment, you can remove 
 * ${pJson.name} from anchor below.
 */
function About() {
  return (
    <div>
      <h1>Hello World ! (About)</h1>
      <a href={`/${pJson.name}/`}>Ir para Home</a>
    </div>
  );
}

export default About; 