import React from 'react';

interface TriangleProps {
  height: string;
  width: string;
  fill: string;
}

const Triangle = (props: TriangleProps): React.ReactElement => {
  const viewBox = `0 0 ${props.width} ${props.height}`;

  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={viewBox}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M30.6699 3.00001C32.5944 -0.333323 37.4056 -0.333334 39.3301 3L69.208 54.75C71.1325 58.0833 68.7269 62.25 64.8779 62.25H5.12213C1.27313 62.25 -1.13251 58.0833 0.791995 54.75L30.6699 3.00001Z'
        fill={props.fill}
      />
    </svg>
  );
};

export default Triangle;
