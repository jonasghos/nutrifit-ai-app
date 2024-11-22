import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../public/assests/logos/nutrifit-logo.png';
import ProfileMenu from './ProfileMenu';
import { Disclosure } from '@headlessui/react'; // Importamos Disclosure de Headless UI
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Iconos de hamburguesa

const Header: React.FC = () => {
  return (
    <Disclosure as="nav" className="bg-[#c4deb4] text-[#ee4c59]">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* Logo: Alineación dinámica */}
              <div className={`flex items-center ${open ? 'absolute left-1/2 transform -translate-x-1/2' : 'flex-shrink-0'}`}>
                <img className="h-8 w-auto" src={logo} alt="Logo" />
                <h2 className="ml-2">Nutrifit</h2>
              </div>

              {/* Botón hamburguesa en pantallas pequeñas */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[#ee4c59] hover:text-white hover:bg-[#a40b21] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#c4deb4]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Menú de navegación en pantallas grandes */}
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="text-[#ee4c59] hover:bg-[#84bc65] hover:text-[#a40b21] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Inicio
                  </Link>
                  <Link
                    to="/planwithai"
                    className="text-[#ee4c59] hover:bg-[#84bc65] hover:text-[#a40b21] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Plan con IA
                  </Link>
                  <Link
                    to="/activities"
                    className="text-[#ee4c59] hover:bg-[#84bc65] hover:text-[#a40b21] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Actividades
                  </Link>
                  {/* Componente ProfileMenu */}
                  <ProfileMenu />
                </div>
              </div>
            </div>
          </div>

          {/* Menú de navegación en pantallas pequeñas */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Link
                to="/"
                className="text-[#ee4c59] hover:bg-[#84bc65] hover:text-[#a40b21] block px-3 py-2 rounded-md text-base font-medium"
              >
                Inicio
              </Link>
              <Link
                to="/planwithai"
                className="text-[#ee4c59] hover:bg-[#84bc65] hover:text-[#a40b21] block px-3 py-2 rounded-md text-base font-medium"
              >
                Plan con IA
              </Link>
              <Link
                to="/activities"
                className="text-[#ee4c59] hover:bg-[#84bc65] hover:text-[#a40b21] block px-3 py-2 rounded-md text-base font-medium"
              >
                Actividades
              </Link>
              {/* Componente ProfileMenu */}
              <ProfileMenu />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
