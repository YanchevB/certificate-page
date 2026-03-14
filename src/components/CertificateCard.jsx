export default function CertificateCard({ cert, onOpen }) {
  return (
    <div
      onClick={() => onOpen(cert)}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer
                 transition-all duration-200 hover:-translate-y-2 hover:shadow-xl
                 flex flex-col group"
    >
      <div className="overflow-hidden bg-gray-50">
        <img
          src={cert.images[0]}
          alt={cert.title}
          className="w-full object-contain transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <div className="p-3 border-t border-gray-100">
        <p className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2">
          {cert.title}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {cert.issuer} · {cert.date}
        </p>
      </div>
    </div>
  );
}
