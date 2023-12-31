import STYLES from '@/styles';
import styled, { css } from 'styled-components';

interface TriangleProps {
  $isHovering: boolean;
  $animationDelay: string;
  $rotation: string;
  $duration: string;
}

const baseTriangleCss = css<TriangleProps>`
  z-index: 1;
  transition: rotate ${(props) => props.$duration} ease-in-out
    ${(props) => props.$animationDelay};
`;

const hoveringCss = css<TriangleProps>`
  rotate: ${(props) => props.$rotation};
`;

export const RightTriangle = styled.div<TriangleProps>`
  ${baseTriangleCss}
  margin-right: -77px;
  translate: 0 0.5rem;

  ${(props) => props.$isHovering && hoveringCss}
`;

export const CenterTriangle = styled.div<TriangleProps>`
  ${baseTriangleCss}
  ${(props) => props.$isHovering && hoveringCss}
`;

export const LeftTriangle = styled.div<TriangleProps>`
  ${baseTriangleCss}
  margin-left: -77px;
  translate: 0 0.5rem;

  ${(props) => props.$isHovering && hoveringCss}
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: end;
  padding-bottom: ${STYLES.base.spaces[16]};
  margin-top: -20px;
  /* scale: 0.8; */
  /* translate: 0 -40px; */
`;
