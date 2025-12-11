export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* text */}
          <div>
            <p className="text-sm text-indigo-600 font-medium mb-3">Frontend Assignment</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Build a clean & modern frontend
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl">
              This starter uses React, TypeScript and TailwindCSS. Replace this text with your Figma design content —
              match spacing, fonts and responsive behaviour required by your assignment.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                id="get-started"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
                href="#features"
              >
                Get Started
              </a>

              <a
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border text-gray-700 hover:bg-gray-50 transition"
                href="#learn-more"
              >
                Learn More
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <span>Perfect for assignment demos • Responsive • Accessible</span>
            </div>
          </div>

          {/* visual placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg p-6">
              {/* small mockup / illustration box — replace with actual image if you have one */}
              <div className="h-48 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-md border border-gray-100 flex items-center justify-center text-indigo-600">
                <div className="text-center">
                  <div className="text-lg font-bold">Mockup</div>
                  <div className="text-sm mt-1">Replace with screenshot or image</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div className="bg-white p-3 rounded-md border">Feature A</div>
                <div className="bg-white p-3 rounded-md border">Feature B</div>
                <div className="bg-white p-3 rounded-md border">Feature C</div>
                <div className="bg-white p-3 rounded-md border">Feature D</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
