export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8c0-2 2-4 4-4h10c2 0 4 2 4 4v8c0 2-2 4-4 4H7c-2 0-4-2-4-4V8z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-semibold text-lg text-indigo-600">Frontend Assignment</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-gray-600">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#get-started" className="hidden sm:inline-block px-4 py-2 border rounded-md text-sm hover:bg-gray-50">Get Started</a>
          <button className="ml-1 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 text-sm">
            Try Now
          </button>
        </div>
      </div>
    </header>
  );
}
