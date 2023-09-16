'use client';

import STYLES from '@/styles';
import React from 'react';
import styled, { css } from 'styled-components';
import SpeechBubbleOrigin from './speech-bubble-origin';

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
  padding-left: 0;
  font-weight: normal;
  color: ${STYLES.base.colors.dark};
`;

export default function SpeechBubble({ children }: SpeechBubbleProps) {
  return (
    <div className='flex max-h-min items-end'>
      <SpeechBubbleOrigin />
      <SpeechBubbleBody>{children}</SpeechBubbleBody>
    </div>
  );
}
