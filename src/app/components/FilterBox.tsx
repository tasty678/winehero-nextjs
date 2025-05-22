'use client';

import { useState } from 'react';
import { FunnelIcon, TagIcon, CurrencyDollarIcon, GlobeAsiaAustraliaIcon, CalendarDaysIcon, BeakerIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const filterConfig = [
  {
    key: 'category',
    title: '產品分類',
    icon: <TagIcon className="w-5 h-5 text-stone-500 mr-2" />,
    options: ['紅酒', '白酒', '威士忌', '清酒', '啤酒'], // 假資料，之後串 Strapi
  },
  {
    key: 'brand',
    title: '品牌',
    icon: <FunnelIcon className="w-5 h-5 text-stone-500 mr-2" />,
    options: ['品牌A', '品牌B', '品牌C'], // 假資料，之後串 Strapi
  },
  {
    key: 'price',
    title: '價格',
    icon: <CurrencyDollarIcon className="w-5 h-5 text-stone-500 mr-2" />,
    options: [
      '0-999', '1000-1999', '2000-2999', '3000-3999', '4000-4999', '5000-9999', '一萬以上'
    ],
  },
  {
    key: 'origin',
    title: '產地',
    icon: <GlobeAsiaAustraliaIcon className="w-5 h-5 text-stone-500 mr-2" />,
    options: ['法國', '日本', '台灣', '蘇格蘭'], // 假資料，之後串 Strapi
  },
  {
    key: 'year',
    title: '年份',
    icon: <CalendarDaysIcon className="w-5 h-5 text-stone-500 mr-2" />,
    options: ['無年份', '1-10年', '11-20年', '20-30年', '30年以上'],
  },
  {
    key: 'volume',
    title: '容量',
    icon: <BeakerIcon className="w-5 h-5 text-stone-500 mr-2" />,
    options: ['300ml 以下', '300-499ml', '500ml-999ml', '1000ml-2000ml', '2000ml以上'],
  },
];

export default function FilterBox() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [checked, setChecked] = useState<{ [key: string]: Set<string> }>({});

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleCheck = (key: string, value: string) => {
    setChecked(prev => {
      const set = new Set(prev[key] || []);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      return { ...prev, [key]: set };
    });
  };

  return (
    <div className="ml-[5%] bg-white rounded-2xl shadow-xl p-6 space-y-4 border border-stone-100">
      {filterConfig.map((filter, idx) => (
        <div key={filter.key} className="border-b last:border-b-0 border-stone-100 pb-2">
          <button
            className="flex items-center w-full justify-between group"
            onClick={() => handleToggle(idx)}
            type="button"
          >
            <span className="flex items-center text-lg font-semibold text-stone-700">
              {filter.icon}
              {filter.title}
            </span>
            <ChevronDownIcon
              className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === idx ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
            }`}
            >
            <div className="flex flex-col gap-2">
                {filter.options.map(option => (
                <label
                    key={option}
                    className="flex items-center cursor-pointer rounded-lg px-2 py-1 hover:bg-stone-50 transition"
                >
                    <input
                    type="checkbox"
                    className="accent-stone-600 w-4 h-4 mr-2"
                    checked={checked[filter.key]?.has(option) || false}
                    onChange={() => handleCheck(filter.key, option)}
                    />
                    <span className="text-stone-600">{option}</span>
                </label>
                ))}
            </div>
            </div>
        </div>
      ))}
    </div>
  );
}