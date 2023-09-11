import React from 'react';
import Triangle from './triangle';
import STYLES from '@/styles';
import styled from 'styled-components';

const FirstTriangle = styled.div`
  z-index: 1;
  margin-right: -77px;
  translate: 0 0.5rem;
`;

const Logo = (): React.ReactElement => {
  return (
    <div className='flex'>
      <div className='z-10 mr-[-77px] translate-y-2'>
        <div className='-rotate-90'>
          <Triangle width='70' height='63' fill={STYLES.base.colors.tertiaty} />
        </div>
      </div>
      <div className='z-20'>
        <Triangle width='70' height='63' fill={STYLES.base.colors.secondary} />
      </div>
      <div className='z-30 ml-[-77px] translate-y-2'>
        <div className='rotate-90'>
          <Triangle width='70' height='63' fill={STYLES.base.colors.primary} />
        </div>
      </div>
    </div>
  );
};

export default Logo;
