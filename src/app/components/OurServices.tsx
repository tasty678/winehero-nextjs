'use client'

import Image from 'next/image';

const services = [
  {
    icon: '/icon1.png',
    title: '免運服務',
    desc: '詳情請洽官方Line。',
  },
  {
    icon: '/icon2.png',
    title: '批發零售',
    desc: '請與我們聯繫，我們將會請業務與您接洽。',
  },
  {
    icon: '/icon3.png',
    title: '酒類諮詢',
    desc: '歡迎加入官方Line，與小編聊聊。',
  },
  {
    icon: '/icon4.png',
    title: '會員專屬',
    desc: '婚宴、酒促、商店擺設、品酒會等需求，歡迎私訊/電聯。',
  },
];

export default function OurServices() {
  return (
    <section className="px-8 py-30 bg-stone-50">
      <h2 className="text-base font-bold mb-6 text-stone-500 text-center fade-in">
        我們的服務 Our Services
      </h2>
      <div className="flex justify-center gap-8 py-5">
        {services.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-56 transition transform hover:scale-105 hover:bg-stone-200 cursor-pointer"
          >
            <Image src={s.icon} alt={s.title} width={48} height={48} className="mb-4" />
            <h3 className="text-lg font-bold mb-2 text-stone-700">{s.title}</h3>
            <p className="text-sm text-stone-500 text-center">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}