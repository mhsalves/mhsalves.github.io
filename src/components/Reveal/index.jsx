import React, { memo, useEffect, useRef, useState } from 'react';
import { node, number } from 'prop-types';

import Style from './styles';

/**
 * Plays a short fade-up on its children the first time they scroll into view.
 *
 * The content is never hidden by JavaScript. Entering the viewport only adds an
 * animation that starts from transparent, so every failure mode — no
 * JavaScript, no IntersectionObserver, an observer that never fires, reduced
 * motion — degrades to "visible, just not animated" rather than a blank page.
 */
function Reveal(props) {
  const { children, delay } = props;
  const ref = useRef(null);
  const [state, setState] = useState('static');

  useEffect(() => {
    const element = ref.current;

    if (!element || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    // Already on screen: it would animate where the reader is already looking.
    if (element.getBoundingClientRect().top < window.innerHeight) {
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setState('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Style.Item ref={ref} state={state} delay={delay}>
      {children}
    </Style.Item>
  );
}

Reveal.propTypes = {
  children: node,
  delay: number,
};

Reveal.defaultProps = {
  children: null,
  delay: 0,
};

export default memo(Reveal);
