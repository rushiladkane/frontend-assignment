// src/components/Header.tsx
import { FC, useState } from "react";

const Header: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a className="text-indigo-600 font-bold text-xl" href="/">Frontend Assignment</a>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          <a href="#get-started" className="px-4 py-2 bg-indigo-600 text-white rounded">Get Started</a>
        </nav>

        {/* small screen menu */}
        <button
          aria-label="Menu"
          className="md:hidden px-2 py-1"
          onClick={() => setOpen(s => !s)}
        >
          ☰
        </button>
      </div>

      {/* mobile nav */}
      {open && (
        <div className="md:hidden bg-white border-t py-2">
          <div className="container mx-auto px-6 flex flex-col gap-2">
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
