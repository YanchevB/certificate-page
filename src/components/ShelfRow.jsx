import CertificateCard from './CertificateCard';

export default function ShelfRow({ certificates, onOpen }) {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-4 gap-6 px-4">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} onOpen={onOpen} />
        ))}
      </div>
      {/* Shelf plank */}
      <div className="h-4 bg-white rounded mx-2 shadow-[0_8px_20px_rgba(0,0,0,0.18)]" />
    </div>
  );
}
