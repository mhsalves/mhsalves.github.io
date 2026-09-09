import React, { memo } from 'react';

import Section from 'components/Section';
import Reveal from 'components/Reveal';

import data from './data';
import Style from './styles';

function ExperienceSection() {
  return (
    <Section id="experience" eyebrow={data.eyebrow} title={data.title}>
      <Style.Timeline>
        {data.companies.map((item) => (
          <Style.Entry key={item.company}>
            <Reveal>
              <Style.Company>{item.company}</Style.Company>
              <Style.Meta>
                {item.period}
                {' · '}
                {item.location}
              </Style.Meta>

              {item.description && (
                <Style.Description>{item.description}</Style.Description>
              )}

              <Style.Roles>
                {item.roles.map((role) => (
                  <Style.Role key={role.title}>
                    <Style.RoleTitle>{role.title}</Style.RoleTitle>
                    <Style.RolePeriod>{role.period}</Style.RolePeriod>
                  </Style.Role>
                ))}
              </Style.Roles>
            </Reveal>
          </Style.Entry>
        ))}
      </Style.Timeline>
    </Section>
  );
}

export default memo(ExperienceSection);
