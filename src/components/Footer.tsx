export default function Footer() {
  return (
    <footer className="mt-16 py-8 bg-white border-t">
      <div className="max-w-[1200px] mx-auto px-6 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Rushil — Frontend Assignment</div>
          <nav className="flex gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
