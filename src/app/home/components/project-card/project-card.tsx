import React from 'react';

interface ProjectCardProps {
  title: string;
  body: string;
  content: React.ReactNode;
}

const ProjectCard = ({ title, body, content }: ProjectCardProps): React.ReactElement => {
  return (
    <div className='flex h-fit w-fit flex-col rounded-5 bg-tertiaty p-16 align-baseline drop-shadow-standard transition delay-0 duration-300 ease-linear hover:drop-shadow-highlight'>
      <div className='font-title text-large font-bold'>{title}</div>
      <div className='mb-24 font-body font-normal'>{body}</div>
      <div className='h-[250px] w-[350px] overflow-hidden rounded-3 bg-primary outline outline-4 outline-primary'>
        {content}
      </div>
    </div>
  );
};

export default ProjectCard;
