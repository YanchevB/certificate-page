import CertificateCard from './CertificateCard';

export default function ShelfRow({ certificates, onOpen }) {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-4 gap-6 px-6">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}