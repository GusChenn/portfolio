'use client';

import STYLES from '@/styles';
import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

const MAX_ITERATIONS = 20;

interface IteratedComponentProps {
  depth: number;
  maxIterations: number;
}

interface RectangleProps {
  height: number;
}

const Rectangle = styled.div<RectangleProps>`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  margin-bottom: ${STYLES.base.spaces[4]};
  height: ${(props) => props.height}px;
  width: 100%;
  background-color: ${STYLES.base.colors.dark};
  animation: fadeIn 100ms forwards ease-in;
`;

function IteratedComponent({
  depth,
  maxIterations,
}: IteratedComponentProps): React.ReactElement | undefined {
  if (depth <= maxIterations) {
    return (
      <Fragment>
        <Rectangle height={1 + 0.05 * depth * depth} />
        <IteratedComponent depth={depth + 1} maxIterations={maxIterations} />
      </Fragment>
    );
  }
}
export default function RecursiveComponent(): React.ReactElement {
  const [iterations, setIterations] = useState(0);
  const [paused, setPaused] = useState(true);
  const [hovered, setHovered] = useState(false);

  const hoveredNode = (
    <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-default'>
      <div
        className='cursor-pointer rounded-5 bg-tertiaty p-8 text-center text-large text-primary'
        onClick={() => setPaused(!paused)}
      >
        {paused ? 'Play' : 'Pause'}
      </div>
    </div>
  );

  setTimeout(() => {
    if (paused) {
      return;
    }
    iterations >= MAX_ITERATIONS ? setIterations(0) : setIterations(iterations + 1);
  }, 100);

  return (
    <div
      className='relative h-full text-dark'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {(hovered || paused) && hoveredNode}
      <IteratedComponent depth={0} maxIterations={iterations} />
    </div>
  );
}
