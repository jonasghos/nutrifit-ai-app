import React from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'; // Icono de flecha hacia abajo

const ProfileMenu: React.FC = () => {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="flex items-center text-[#ee4c59] hover:text-[#a40b21] text-sm font-medium">
          {/* En pantallas pequeñas mostramos "Profile" y en pantallas grandes mostramos la imagen */}
          <span className="sm:hidden">Profile</span>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User"
            className="h-8 w-8 rounded-full hidden sm:block" // Esto oculta la imagen en pantallas pequeñas
          />
          <ChevronDownIcon className="ml-2 h-5 w-5 text-[#ee4c59]" aria-hidden="true" />
        </MenuButton>
      </div>
      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuItem>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#84bc65] hover:text-[#a40b21]">
            Your Profile
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#84bc65] hover:text-[#a40b21]">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#84bc65] hover:text-[#a40b21]">
            Sign out
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default ProfileMenu;
