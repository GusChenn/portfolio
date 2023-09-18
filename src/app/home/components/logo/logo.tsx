'use client';

import React, { useState } from 'react';
import Triangle from './triangle';
import STYLES from '@/styles';
import { CenterTriangle, LeftTriangle, LogoContainer, RightTriangle } from './logo.style';

const FULL_DURATION = 1.5;
const DELAY = 0.3;
const ROTATION_DEG = 360;

const Logo = (): React.ReactElement => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <LogoContainer>
      <RightTriangle
        $isHovering={isHovering}
        $animationDelay={`${DELAY * 0}s`}
        $rotation={`${ROTATION_DEG}deg`}
        $duration={`${FULL_DURATION}s`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className='-rotate-90'>
          <Triangle width='70' height='63' fill={STYLES.base.colors.tertiaty} />
        </div>
      </RightTriangle>
      <CenterTriangle
        $isHovering={isHovering}
        $animationDelay={`${DELAY * 1}s`}
        $rotation={`${ROTATION_DEG}deg`}
        $duration={`${FULL_DURATION - DELAY}s`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Triangle width='70' height='63' fill={STYLES.base.colors.secondary} />
      </CenterTriangle>
      <LeftTriangle
        $isHovering={isHovering}
        $animationDelay={`${DELAY * 2}s`}
        $rotation={`${ROTATION_DEG}deg`}
        $duration={`${FULL_DURATION - 2 * DELAY}s`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className='rotate-90'>
          <Triangle width='70' height='63' fill={STYLES.base.colors.primary} />
        </div>
      </LeftTriangle>
    </LogoContainer>
  );
};

export default Logo;
