import Image from 'next/image';
import React from 'react';
import profilePicture from '/public/foto_perfil.png';

const PICTURE_SIZE = 250;

export default function ProfilePicture() {
  return (
    <div>
      <Image
        alt='A picture of myself'
        src={profilePicture}
        className='border-spacing-0 rounded-full border-4 border-secondary'
        height={PICTURE_SIZE}
      />
    </div>
  );
}
