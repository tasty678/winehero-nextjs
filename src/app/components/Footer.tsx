// components/Footer.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#45474d] text-white text-center py-4 relative z-10 pb-24">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-[5%]">
          {/* 公司資訊 */}
          <div className="w-full md:w-2/5 text-center space-y-2">
            <div>
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={120}
                height={60}
              />
              <hr className="border-t border-white my-2" />
            </div>
            <div>
              <p className="font-semibold">營業時間</p>
              <p>週一到週五：10:00 AM - 03:00 AM</p>
              <p>週六與週日：10:00 AM - 10:00 PM</p>
              <p>全年無休</p>
              <hr className="border-t border-white my-2" />
            </div>
            <div>
              <p>台中市大雅區民生路3段 356號</p>
              <p>電話：04-2566-4710</p>
            </div>
          </div>

          {/* 社群+連結 */}
          <div className="w-full md:w-1/3 mt-6 md:mt-0 text-center">
            <div className="flex justify-center gap-5 mb-6">
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <Image src="/facebook-logo.png" alt="Facebook" width={40} height={40} />
              </a>
              <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram-logo.png" alt="Instagram" width={40} height={40} />
              </a>
              <a href="https://www.line.me/ti/p/@yourlineid" target="_blank" rel="noopener noreferrer">
                <Image src="/line-logo.png" alt="Line" width={40} height={40} />
              </a>
            </div>
            <ul className="flex flex-col gap-2 list-none">
              <li><Link href="/"><span className="hover:underline">首頁</span></Link></li>
              <li><Link href="/products-intro"><span className="hover:underline">HB 介紹</span></Link></li>
              <li><Link href="/stores"><span className="hover:underline">HB 通路</span></Link></li>
              <li><Link href="/news"><span className="hover:underline">最新消息</span></Link></li>
              <li><Link href="/contact"><span className="hover:underline">聯絡我們</span></Link></li>
            </ul>
          </div>

          {/* Line 掃碼 */}
          <div className="w-full md:w-1/4 mt-6 md:mt-0 text-center flex flex-col items-center gap-2">
            <p>掃描 QR Code，加入 Line 好友</p>
            <Image
              src="/line-scanme.png"
              alt="Line QR Code"
              width={120}
              height={120}
            />
          </div>
        </div>

        {/* 版權宣告 */}
        <div className="text-sm text-white mt-8">© 2025 酒國英豪洋酒公司</div>
      </footer>

      
    </>
  );
}
