'use client';

import React, { useState } from 'react';
import Triangle from './triangle';
import STYLES from '@/styles';
import styled, { css } from 'styled-components';

const FULL_DURATION = 1.5;
const DELAY = 0.3;
const ROTATION_DEG = 360;

interface TriangleProps {
  isHovering: boolean;
  animationDelay: string;
  rotation: string;
  duration: string;
}

const baseTriangleCss = css<TriangleProps>`
  z-index: 1;
  transition: rotate ${(props) => props.duration} ease-in-out
    ${(props) => props.animationDelay};
`;

const hoveringCss = css<TriangleProps>`
  rotate: ${(props) => props.rotation};
`;

const RightTriangle = styled.div<TriangleProps>`
  ${baseTriangleCss}
  margin-right: -77px;
  translate: 0 0.5rem;

  ${(props) => props.isHovering && hoveringCss}
`;

const CenterTriangle = styled.div<TriangleProps>`
  ${baseTriangleCss}
  ${(props) => props.isHovering && hoveringCss}
`;

const LeftTriangle = styled.div<TriangleProps>`
  ${baseTriangleCss}
  margin-left: -77px;
  translate: 0 0.5rem;

  ${(props) => props.isHovering && hoveringCss}
`;

const LogoContainer = styled.div`
  display: flex;
`;

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
