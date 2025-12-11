import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="max-w-[1200px] mx-auto px-6 py-12">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
