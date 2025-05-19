// components/AgeBanner.tsx
import Image from 'next/image';

export default function AgeBanner() {
  return (
    // 年齡警告 banner
    <div className="fixed bottom-0 left-0 w-full bg-black text-white text-center z-[1000] py-2 h-20 flex justify-center items-center">
      <Image
        src="/age-warning-banner.png"
        alt="警告標語"
        width={1200}
        height={100}
      />
    </div>
  );
}