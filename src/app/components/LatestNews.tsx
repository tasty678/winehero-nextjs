import Image from 'next/image';

export default function LatestNews() {
  const newsImage = '/index3.jpg';
  const newsTitle = '2025 夏季新品上市';
  const newsContent = '我們推出了全新夏季限定酒款，歡迎來店品嚐！';

  return (
    <div className="bg-stone-50 relative py-24 flex items-center justify-center overflow-x-visible">
      {/* 左側背景色塊 */}
      <div className="absolute left-0 top-[10%] h-[80%] w-[40%] bg-stone-300 opacity-60 z-0"></div>
      
      <div className="relative flex items-center w-[80%] mx-auto z-10" style={{ height: '350px' }}>
        {/* 圖片，往右凸出，無圓角，RWD */}
        <div className="mr-[-60px] sm:mr-[-80px] md:mr-[-120px] lg:mr-[-160px] z-20 flex-shrink-0 h-full">
          <Image
            src={newsImage}
            alt="最新消息圖片"
            width={400}
            height={350}
            className="object-cover shadow-lg h-full w-[220px] sm:w-[320px] md:w-[400px] lg:w-[480px]"
            style={{ borderRadius: 0 }}
          />
        </div>
        {/* 文字內容 */}
        <div className="ml-[30%] flex-1 text-left">
          <div className="text-xs text-stone-500 font-bold mb-2">最新消息 Latest News</div>
          <h3 className="text-2xl font-bold text-stone-800 mb-4">{newsTitle}</h3>
          <p className="text-stone-700 mb-6">{newsContent}</p>
          <button className="bg-stone-800 text-white px-6 py-2 rounded hover:bg-stone-200 hover:text-stone-600 transition">閱讀更多</button>
        </div>
      </div>
    </div>
  );
}