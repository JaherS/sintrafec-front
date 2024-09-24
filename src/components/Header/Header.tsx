'use client';

import { useState } from "react";
import { motion } from "framer-motion";


export function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    return (
    <header>
        <div className=" flex items-center justify-center bg-[#F5F5F7]">
          <div className="text-2xl text-[#323232] md:max-w-screen-lg md:mx-auto w-full py-2 px-5 font-inter  tracking-texto">
            <div className="container mx-auto">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-manropeBold tracking-titulo">sintrafec</h1>
                </div>
                <svg className="md:hidden w-6 h-auto fill-current text-[#323232]" viewBox="0 0 24 12" onClick={toggleMenu}>
                  <rect width="24" height="2"></rect>
                  <rect y="5" width="24" height="2"></rect>
                  <rect y="10" width="24" height="2"></rect>
                </svg>
                <nav className="hidden md:flex text-sm text-black/60 items-center gap-6 tracking-normal">
                  <a href="#" className="hover:text-black/80">Inicio</a>
                  <a href="#" className="hover:text-black/80">SistemaPOS</a>
                  <a href="#" className="hover:text-black/80">Ventas</a>
                  <a href="#" className="hover:text-black/80">Inventario</a>
                  <a href="#" className="hover:text-black/80">Gestión</a>
                  <a href="#" className="hover:text-black/80">Ayuda</a>
                </nav>   
              </div>    
            </div>    
          </div>
        </div>
        {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-0 w-full bg-[#525252] bg-opacity-90 text-white z-50 flex flex-col"
        >
          <div className="w-full flex justify-end pr-5 pt-1">
            <button onClick={closeMenu} className="text-4xl">
              &times;
            </button>
          </div>
          <div className="py-2 px-10">
            <h2 className="text-3xl pb-2 tracking-widest font-aeonik">SERVICIOS</h2>
            <div className="px-4">
              <a href="#" className="text-2xl block mt-2 hover:text-gray-300">SistemaPOS</a>
              <a href="#" className="text-2xl block mt-2 hover:text-gray-300">Ventas</a>
              <a href="#" className="text-2xl block mt-2 hover:text-gray-300">Inventario</a>
              <a href="#" className="text-2xl block mt-2 hover:text-gray-300">Gestion</a>
            </div>
            <h2 className="text-3xl pt-4 tracking-widest font-aeonik">AYUDA</h2>
          </div>
        </motion.div>
      )}
    </header>
    );
}
  