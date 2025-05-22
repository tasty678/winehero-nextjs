import { useState } from 'react';
import { ChevronDownIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

export default function SortBox() {
  const [sortOpen, setSortOpen] = useState(false);
  const [sortLabel, setSortLabel] = useState('排序方式');
  const sortOptions = [
    '發布日期（最新到最舊）',
    '發布日期（最舊到最新）',
    '價格（最便宜到最貴）',
    '價格（最貴到最便宜）',
  ];

  return (
    <div className="absolute px-5 py-5 right-[5%] z-30">
      <div
        className="flex items-center justify-between gap-2 px-4 py-2 rounded-xl shadow cursor-pointer select-none hover:bg-stone-100 transition min-w-[200px]"
        onClick={() => setSortOpen((v) => !v)}
      >
        <span className="flex items-center text-stone-700 font-medium">
          <AdjustmentsHorizontalIcon className="w-5 h-5 mr-2 text-stone-500" />
          {sortLabel}
        </span>
        <ChevronDownIcon className={`w-5 h-5 text-stone-500 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
      </div>
      {/* Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-lg mt-2 ${
          sortOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        {sortOptions.map((opt) => (
          <div
            key={opt}
            className={`px-6 py-3 text-stone-700 hover:bg-stone-100 cursor-pointer transition`}
            onClick={() => {
              setSortLabel(opt);
              setSortOpen(false);
            }}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
}