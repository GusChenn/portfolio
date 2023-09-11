import React from 'react';
import ProjectCard from './components/project-card';

const FirstProject = (): React.ReactNode => {
  return <div className='text-dark'>sldkjlksafdlsajdl</div>;
};

export default function Home() {
  return (
    <div className='flex h-[500px] w-5/6 max-w-screen-2xl flex-wrap justify-center gap-24 overflow-x-hidden overflow-y-scroll p-16'>
      <ProjectCard
        title='Recursive components'
        body='A study about recursive react components'
        content={<FirstProject />}
      />
    </div>
  );
}
