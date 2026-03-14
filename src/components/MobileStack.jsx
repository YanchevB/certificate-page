import CertificateCard from './CertificateCard';

export default function MobileStack({ certificates, onOpen }) {
  return (
    <div className="flex flex-col gap-6 px-6 pb-12">
      {certificates.map((cert) => (
        <CertificateCard key={cert.id} cert={cert} onOpen={onOpen} />
      ))}
    </div>
  );
}