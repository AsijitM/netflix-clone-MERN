import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <h1 className='text-3xl text-emerald-500'>Netflix Clone</h1>
    </main>
  );
}
