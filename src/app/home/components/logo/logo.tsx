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
    <LogoContainer
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <RightTriangle
        animationDelay={`${DELAY * 0}s`}
        isHovering={isHovering}
        rotation={`${ROTATION_DEG}deg`}
        duration={`${FULL_DURATION}s`}
      >
        <div className='-rotate-90'>
          <Triangle width='70' height='63' fill={STYLES.base.colors.tertiaty} />
        </div>
      </RightTriangle>
      <CenterTriangle
        animationDelay={`${DELAY * 1}s`}
        isHovering={isHovering}
        rotation={`${ROTATION_DEG}deg`}
        duration={`${FULL_DURATION - DELAY}s`}
      >
        <Triangle width='70' height='63' fill={STYLES.base.colors.secondary} />
      </CenterTriangle>
      <LeftTriangle
        animationDelay={`${DELAY * 2}s`}
        isHovering={isHovering}
        rotation={`${ROTATION_DEG}deg`}
        duration={`${FULL_DURATION - 2 * DELAY}s`}
      >
        <div className='rotate-90'>
          <Triangle width='70' height='63' fill={STYLES.base.colors.primary} />
        </div>
      </LeftTriangle>
    </LogoContainer>
  );
};

export default Logo;
