import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AgeBanner from "@/app/components/AgeBanner";
import Image from "next/image";
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";


type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
    return (
        <main>
        {/* Header */}
        <Header />
        {/* Main Content */}
        <div className="mt-10 ml-20">
          <button className="text-stone-700 px-4 py-2 hover:text-stone-900 transition-colors duration-300 hover:underline underline-offset-2"> 
            <ArrowUturnLeftIcon className="w-5 h-5 inline-block mr-2" />
            <a href="/news">返回文章列表</a>
          </button>
        </div>
        <section className="flex flex-col mt-10 px-20">
            <div className="text-center container mx-auto px-60 py-10">
                <h1 className="text-5xl text-stone-700 font-bold mb-6">文章標題</h1>
                <h4 className="text-gray-700">
                文章簡介：這是一篇關於某個主題的文章，介紹了相關的背景信息和主要觀點。這是文章的簡介部分，旨在吸引讀者的注意力並提供文章的概覽。
                </h4>
                
            </div>
            <div className="container mx-auto px-20">
                <Image
                    src="/storebanner1.jpg"
                    alt="News Image"
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-lg mb-6"
                />
            </div>
            <div className="container mx-auto px-50 py-10">
                <p className="text-gray-700 mb-4">
                這是文章的主要內容部分，詳細介紹了主題的各個方面，包括相關的數據、案例研究和專家意見。這部分內容旨在提供深入的分析和見解，幫助讀者更好地理解主題。
                </p>
                <p className="text-gray-700 mb-4">
                這是文章的結尾部分，總結了主要觀點並提出了未來的展望或建議。這部分內容旨在激發讀者的思考並鼓勵他們進一步探索相關主題。
                </p>    
            </div>
        </section>
        




        {/* Footer */}
        <Footer />
        {/* Age Banner */}
        <AgeBanner />
        </main>
    );
    }