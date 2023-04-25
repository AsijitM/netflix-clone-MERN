import React from 'react';
import { signOut } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data } = useCurrentUser();

  if (!visible) return null;

  return (
    <div className="absolute right-0 flex flex-col w-56 py-5 bg-black border-2 border-gray-800 top-14">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center w-full gap-3 px-3 group/item">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-8 rounded-md"
            src="/images/default-blue.png"
            alt="avatar"
          />
          <p className="text-white text-sm group-hover/item:underline">
            {data?.name}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          className="px-3 text-center text-white text-sm hover:underline"
          onClick={() => signOut()}
        >
          Sign Out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
