import React from 'react';
import ProfilePicture from '../profile-picture/profile-picture';
import SpeechBubble from '../speech-bubble/speech-bubble';

export default function Footer() {
  return (
    <div className='mb-64 flex h-fit w-full justify-between align-bottom'>
      <div className='flex'>
        <ProfilePicture />
        <SpeechBubble>
          Hey! I’m Chen and i’m a web
          <br />
          developer based in Brazil.
        </SpeechBubble>
      </div>
      <div>bbbbbb</div>
    </div>
  );
}
