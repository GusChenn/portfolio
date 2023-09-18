import React from 'react';
import ProjectsBorad from './components/projects-board/projects-board';
import Footer from './components/footer/footer';

export default function Home() {
  return (
    <div className='flex h-full w-[1200px] flex-col justify-between'>
      <ProjectsBorad />
      <Footer />
    </div>
  );
}
