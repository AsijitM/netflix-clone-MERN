import React from 'react';

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="absolute left-0 flex flex-col w-56 py-5 bg-black border-2 border-gray-800 py5 top-8">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">Home</div>
        <div className="px-3 text-center text-white hover:underline">Sereis</div>
        <div className="px-3 text-center text-white hover:underline">Films</div>
        <div className="px-3 text-center text-white hover:underline">New & Popular</div>
        <div className="px-3 text-center text-white hover:underline">My List</div>
        <div className="px-3 text-center text-white hover:underline">Browse by Languages</div>
      </div>
    </div>
  );
};

export default MobileMenu;
