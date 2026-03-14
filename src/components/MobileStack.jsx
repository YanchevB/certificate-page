import CertificateCard from './CertificateCard';

export default function MobileStack({ certificates, onOpen }) {
  return (
    <div className="flex flex-col gap-4 px-4 pb-8">
      {certificates.map((cert, i) => (
        <div
          key={cert.id}
          style={{
            transform: `translateX(${i % 2 === 0 ? i * 2 : -(i * 2)}px) rotate(${i % 2 === 0 ? i * 0.4 : -(i * 0.4)}deg)`,
            zIndex: certificates.length - i,
          }}
          className="transition-transform duration-200 active:scale-[1.02] active:-translate-y-1"
        >
          <CertificateCard cert={cert} onOpen={onOpen} />
        </div>
      ))}
    </div>
  );
}
