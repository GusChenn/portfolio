import React from 'react';
import ProfilePicture from '../profile-picture/profile-picture';
import SpeechBubble from '../speech-bubble/speech-bubble';

export default function Footer() {
  return (
    <div className='mb-32 flex h-fit w-full items-end justify-between'>
      <div className='flex items-end'>
        <ProfilePicture />
        <div className='-ml-24'>
          <SpeechBubble>
            Hey! I’m Chen and i’m a web
            <br />
            developer based in Brazil.
          </SpeechBubble>
        </div>
      </div>
      <div className='flex h-full items-end'>
        <div className='text-secondary'>Made with coffee and love (mainly coffee)</div>
      </div>
    </div>
  );
}
