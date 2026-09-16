import React from 'react';
import { Box } from '@mui/material';
import useInView from '../hooks/useInView';

/**
 * Universal scroll-reveal component that flies in elements progressively as the user scrolls
 * rather than animating the entire section all at once.
 */
export default function RevealOnScroll({
  children,
  delay = 0,
  variant = 'pop-up', // 'pop-up' | 'init' | 'slide-left' | 'slide-right' | 'mockup-pop'
  sx = {},
  className = '',
  threshold = 0.08,
  rootMargin = '0px 0px -30px 0px',
  as = 'div',
  ...props
}) {
  const [ref, inView] = useInView({ threshold, rootMargin, once: true });
  const Component = as === 'div' ? Box : as;

  return (
    <Component
      ref={ref}
      className={`reveal-${variant} ${inView ? 'is-visible' : ''} ${className}`}
      sx={{
        ...(delay ? { transitionDelay: `${delay}s` } : {}),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
