'use client';

import STYLES from '@/styles';
import React from 'react';
import styled, { css } from 'styled-components';

interface SpeechBubbleProps {
  children: React.ReactNode;
}

const commonCss = css`
  height: fit-content;
  max-height: 100px;
  background-color: ${STYLES.base.colors.secondary};
`;

const SpeechBubbleBody = styled.div`
  ${commonCss}
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  font-size: ${STYLES.base.fontSizes.large};
  padding: ${STYLES.base.spaces[16]} ${STYLES.base.spaces[48]};
  padding-left: ${STYLES.base.spaces[24]};
  font-weight: normal;
  color: ${STYLES.base.colors.dark};
`;

const SpeechBubblePointer = styled.div`
  ${commonCss}
  height: 100px;
  width: 70px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 100%;
  clip-path: polygon(0% 14%, 100% 100%, 100% 0%, 0% 0%);
`;

export default function SpeechBubble({ children }: SpeechBubbleProps) {
  return (
    <div className='flex items-end'>
      <SpeechBubblePointer />
      <SpeechBubbleBody>{children}</SpeechBubbleBody>
    </div>
  );
}
