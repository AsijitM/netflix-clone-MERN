import { Inter } from 'next/font/google';
import { getSession, signOut } from 'next-auth/react';
import { NextPageContext } from 'next';
import useCurrentUser from '@/hooks/useCurrentUser';
import Navbar from '@/components/Navbar';
import BillBoard from '@/components/BillBoard';
const inter = Inter({ subsets: ['latin'] });

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <main>
      {/* <h1 className="text-3xl text-emerald-500">Netflix Clone</h1>
      <p className="text-white">Logged in as : {user?.name}</p>
      <button onClick={() => signOut()} className="w-full h-10 bg-white">
        Logout
      </button> */}
      <Navbar />
      <BillBoard/>
    </main>
  );
}
