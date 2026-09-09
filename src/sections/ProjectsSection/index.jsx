import React, { memo } from 'react';

import Section from 'components/Section';
import Reveal from 'components/Reveal';

import data from './data';
import Style from './styles';

function ProjectsSection() {
  return (
    <Section id="projects" eyebrow={data.eyebrow} title={data.title}>
      <Style.Grid>
        {data.projects.map((project, index) => (
          <li key={project.name}>
            <Reveal delay={(index % 3) * 70}>
              <Style.Card
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Style.Name>{project.name}</Style.Name>
                <Style.Description>{project.description}</Style.Description>
                <Style.Language>{project.language}</Style.Language>
              </Style.Card>
            </Reveal>
          </li>
        ))}
      </Style.Grid>

      <Reveal>
        <Style.More
          href={data.more.href}
          target="_blank"
          rel="noreferrer noopener"
        >
          {data.more.label}
        </Style.More>
      </Reveal>
    </Section>
  );
}

export default memo(ProjectsSection);
