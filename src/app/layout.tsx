import './globals.css';
import type { Metadata } from 'next';
import Logo from './home/components/logo/logo';
import StyledComponentsRegistry from '@/wrappers/registry';

export const metadata: Metadata = {
  title: 'Gustavo Chen',
  description: 'And his personal portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='flex h-screen w-screen flex-col items-center bg-dark font-body font-normal text-primary'>
        <StyledComponentsRegistry>
          <div className='flex h-[170px] w-full items-center justify-center'>
            <Logo />
          </div>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
