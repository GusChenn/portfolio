'use client';

import { useRouter } from 'next/navigation';

export default function Root() {
  const router = useRouter();

  router.push('/home');

  return <div className='h-screen bg-dark'></div>;
}
