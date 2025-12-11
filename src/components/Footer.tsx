import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 py-8 border-t text-center text-gray-600 text-sm">
      © {new Date().getFullYear()} Rushil — Frontend Assignment
    </footer>
  );
}
