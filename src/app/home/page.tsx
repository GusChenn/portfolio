import React from 'react';
import ProjectsBorad from './components/projects-board/projects-board';
import Footer from './components/footer/footer';

export default function Home() {
  return (
    <div className='flex w-[1500px] flex-col items-center justify-center'>
      <ProjectsBorad />
      <Footer />
    </div>
  );
}
