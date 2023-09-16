import React from 'react';
import ProjectCard from '../project-card/project-card';

const FirstProject = (): React.ReactNode => {
  return <div className='text-dark'>sldkjlksafdlsajdl</div>;
};

export default function ProjectsBorad() {
  return (
    <div className='flex h-fit w-full flex-wrap justify-between overflow-hidden px-8'>
      <ProjectCard
        title='Recursive components'
        body='A study about recursive react components'
        content={<FirstProject />}
      />
      <ProjectCard
        title='Recursive components'
        body='A study about recursive react components'
        content={<FirstProject />}
      />
      <ProjectCard
        title='Recursive components'
        body='A study about recursive react components'
        content={<FirstProject />}
      />
    </div>
  );
}
