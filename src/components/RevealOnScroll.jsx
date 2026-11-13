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
  threshold = 0.01,
  rootMargin = '60px 0px 60px 0px',
  immediate = false,
  as = 'div',
  ...props
}) {
  const [ref, inView] = useInView({ threshold, rootMargin, once: true });
  const Component = as === 'div' ? Box : as;
  const visible = immediate || inView;
  const clampedDelay = !immediate && delay ? Math.min(delay, 0.18) : 0;

  return (
    <Component
      ref={ref}
      className={`reveal-${variant} ${visible ? 'is-visible' : ''} ${className}`}
      sx={{
        ...(clampedDelay ? { transitionDelay: `${clampedDelay}s` } : {}),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
