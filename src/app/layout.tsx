import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gustavo Chen',
  description: 'And his personal portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-dark flex h-screen w-screen flex-col items-center pt-[160px] font-body font-normal text-primary'>
        {children}
      </body>
    </html>
  );
}
