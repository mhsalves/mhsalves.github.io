import React, { memo } from 'react';
import { node, string } from 'prop-types';

import Reveal from 'components/Reveal';

import Style from './styles';

/**
 * Shared shell for every page section: consistent spacing, max width and
 * heading treatment, so the sections only describe their own content.
 */
function Section(props) {
  const {
    id, title, eyebrow, children,
  } = props;

  return (
    <Style.Container id={id}>
      <Style.Inner>
        {title && (
          <Reveal>
            <Style.Header>
              {eyebrow && <Style.Eyebrow>{eyebrow}</Style.Eyebrow>}
              <Style.Title>{title}</Style.Title>
            </Style.Header>
          </Reveal>
        )}
        {children}
      </Style.Inner>
    </Style.Container>
  );
}

Section.propTypes = {
  id: string,
  title: string,
  eyebrow: string,
  children: node,
};

Section.defaultProps = {
  id: undefined,
  title: undefined,
  eyebrow: undefined,
  children: null,
};

export default memo(Section);
