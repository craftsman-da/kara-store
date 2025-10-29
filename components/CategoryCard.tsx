'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Category } from '@/data/products';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/products?category=${encodeURIComponent(category.name)}`}
      className='block bg-[#F2F2F2] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
    >
      {/* Image Area */}
      <div className='bg-[#E6E6E6] rounded-2xl flex items-center justify-center p-6'>
        <div className='relative w-28 h-28 md:w-36 md:h-36'>
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes='(max-width:768px) 40vw, 160px'
            className='object-contain transition-transform duration-300 hover:scale-105'
          />
        </div>
      </div>

      {/* Details Area */}
      <div className='bg-[#F2F2F2] rounded-b-2xl  py-4 px-3 space-y-2'>
        <h3 className='text-[#990000] font-semibold text-base md:text-lg'>
          {category.name}
        </h3>

        {/* Wrapper for price text + button */}
        <div className='bg-[#FFDDD9] rounded-2xl py-2 px-3 flex  justify-between items-center space-y-2'>
          <p className='text-[#FFA500] text-sm font-medium'>
            Attached with price
          </p>
          <button className='bg-[#990000] text-white px-4 py-1.5 rounded-xl text-sm font-semibold hover:bg-[#7A0000] transition-colors'>
            View more
          </button>
        </div>
      </div>
    </Link>
  );
}
