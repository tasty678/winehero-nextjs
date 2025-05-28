import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AgeBanner from "@/app/components/AgeBanner";
import Image from "next/image";
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";
import React from "react";


export default function Page() {
  return (
    <div>
      <Header />
      
      <main>
        <div className="mt-10 ml-20">
          <button className="text-stone-700 px-4 py-2">
            <ArrowUturnLeftIcon className="w-5 h-5 inline-block mr-2" />
            <a href="/categories">返回產品列表</a>
          </button>
        </div>
        <section className="container mx-auto px-5 py-10 flex">
            <div className="w-1/2 bg-gray-100">
            <Image
                src="/HB1.png"
                alt="Products"
                width={1200}
                height={1300}
                className="w-full h-auto rounded-lg shadow-lg"
            />
            </div>
            <div className="w-1/2 flex flex-col px-20">
                <span className="text-xs mt-4">威士忌</span>
                <h2 className="text-xl mt-8">產品標題</h2>
                <h4 className="text-sm mt-1 text-gray-500">產品英文名</h4>
                <p className="text-orange-900 text-m mt-8">
                    建議售價
                    </p>
                <p className="text-red-700 mt-2">
                    網路價格僅供參考，網路不得販售酒類商品，欲購買，請至實體店面選購。
                    </p>
                <div className="text-gray-700 mt-6 border border-gray-300 rounded-2xl p-4 w-full">
                    <h4 className="text-sm font-semibold text-stone-600 mb-2">產品描述 Product Description</h4>
                    <p className="text-sm mb-4">
                    這是產品的所有描述，介紹產品的特點和優勢。
                    這是產品的所有描述，介紹產品的特點和優勢。
                    這是產品的所有描述，介紹產品的特點和優勢。
                    這是產品的所有描述，介紹產品的特點和優勢。
                    這是產品的所有描述，介紹產品的特點和優勢。
                    </p>
                </div>  
                <div className="mt-4 rounded-2xl p-4 w-full h-full flex flex-row flex-wrap justify-between">
                  <div className="w-1/2">
                    <span className="text-sm font-semibold text-stone-600 mb-2 ">容量 Capacity</span>
                    <p className=" p-2 text-gray-700">700ml</p>
                  </div>
                  <div className="w-1/2">
                    <span className="text-sm font-semibold text-stone-600 mb-2 ">年份 Year</span>
                    <p className=" p-2 text-gray-700">12年</p>
                  </div>
                  <div className="w-1/2">
                    <span className="text-sm font-semibold text-stone-600 mb-2 ">酒精濃度 ABV</span>
                    <p className=" p-2 text-gray-700">40%</p>
                  </div>
                   <div className="w-1/2" >
                    <span className="text-sm font-semibold text-stone-600 mb-2 ">產地 Origin</span>
                    <p className=" p-2 text-gray-700">蘇格蘭</p>
                  </div> 
                   
                </div>


            </div>
        </section>
        <section className="container mt-20 mx-auto p-4">
            <div>
                <h2>品牌介紹 Brand Introduction</h2>
                <h3>品牌名稱</h3>
                
                
                <Image
                  src="/images/brand.jpg"
                  alt="Brand"
                  width={1200}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg mt-4"
                />
                <p className="text-center text-lg p-10 mx-20">
                    這是品牌的所有介紹，介紹品牌的歷史和理念。
                </p>
            </div>
        </section>

            


      </main>
      
      <Footer />
      <AgeBanner />
    </div>
  );
}