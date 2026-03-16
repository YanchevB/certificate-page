import { useState, useEffect } from 'react';

export default function Lightbox({ cert, onClose }) {
  const [currentPage, setCurrentPage] = useState(0);

  // Reset page when cert changes and preload all images
  useEffect(() => {
    setCurrentPage(0);
    if (!cert) return;
    cert.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [cert]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!cert) return;
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  const total = cert.images.length;
  const isMultiPage = total > 1;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4
                 animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl shadow-2xl overflow-hidden
                   max-w-[90vw] max-h-[90vh] flex flex-col
                   animate-[scaleIn_0.2s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white
                     rounded-full w-8 h-8 flex items-center justify-center
                     shadow-md text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Image area */}
        <div className="relative overflow-hidden bg-gray-50">
          <img
            key={currentPage}
            src={cert.images[currentPage]}
            alt={`${cert.title} — page ${currentPage + 1}`}
            className="max-h-[75vh] max-w-[90vw] object-contain block
                       animate-[fadeIn_0.15s_ease-out]"
          />

          {/* Left arrow */}
          {isMultiPage && currentPage > 0 && (
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2
                         bg-white/85 hover:bg-white rounded-full w-10 h-10
                         flex items-center justify-center shadow-md
                         text-gray-700 text-lg transition-all hover:scale-110"
              aria-label="Previous page"
            >
              ‹
            </button>
          )}

          {/* Right arrow */}
          {isMultiPage && currentPage < total - 1 && (
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2
                         bg-white/85 hover:bg-white rounded-full w-10 h-10
                         flex items-center justify-center shadow-md
                         text-gray-700 text-lg transition-all hover:scale-110"
              aria-label="Next page"
            >
              ›
            </button>
          )}

          {/* Page counter */}
          {isMultiPage && (
            <span className="absolute bottom-3 right-3 text-xs text-white
                             bg-black/55 rounded-full px-2.5 py-1 font-medium">
              {currentPage + 1} / {total}
            </span>
          )}
        </div>

        {/* Label */}
        <div className="px-5 py-3 border-t border-gray-100">
          <p className="font-semibold text-gray-800">{cert.title}</p>
          <p className="text-sm text-gray-500">{cert.issuer} · {cert.date}</p>
        </div>
      </div>
    </div>
  );
}
