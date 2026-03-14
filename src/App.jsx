import { useState } from 'react';
import { certificates } from './data/certificates';
import ShelfRow from './components/ShelfRow';
import MobileStack from './components/MobileStack';
import Lightbox from './components/Lightbox';

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function App() {
  const [activeCert, setActiveCert] = useState(null);
  const shelves = chunkArray(certificates, 4);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">

      {/* Header */}
      <header className="max-w-6xl mx-auto pt-12 pb-8 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
          My JS Journey
        </h1>
        <p className="text-lg text-gray-500">
          A collection of my JavaScript and web development certificates.
        </p>
      </header>

      {/* Desktop: Shelf rows */}
      <main className="hidden md:block max-w-6xl mx-auto px-6 pb-16">
        {shelves.map((row, i) => (
          <ShelfRow key={i} certificates={row} onOpen={setActiveCert} />
        ))}
      </main>

      {/* Mobile: Stacked deck */}
      <main className="block md:hidden max-w-sm mx-auto pt-4">
        <MobileStack certificates={certificates} onOpen={setActiveCert} />
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto pb-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Boyan Yanchev. Built with React & Tailwind.</p>
      </footer>

      {/* Lightbox */}
      <Lightbox cert={activeCert} onClose={() => setActiveCert(null)} />

    </div>
  );
}

export default App;
