'use client';

import Image from 'next/image';
import { Product, formatPrice } from '@/data/products';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'small';
}

export default function ProductCard({
  product,
  variant = 'default',
}: ProductCardProps) {
  const isSmall = variant === 'small';

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
        isSmall ? 'max-w-full mx-auto' : ''
      }`}
    >
      {/* Product Image Section */}
      <div
        className={`bg-[#FF9090] rounded-2xl flex items-center justify-center ${
          isSmall ? 'p-4 h-40' : 'p-6 h-56'
        }`}
      >
        <div className='relative w-full h-full max-w-[260px]'>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes='(max-width:768px) 100vw, 300px'
            className='object-contain'
          />
        </div>
      </div>

      {/* Product Info */}
      <div className='px-5 pt-4 pb-5  space-y-3'>
        <h3
          className={`text-[#990000] font-semibold leading-snug ${
            isSmall ? 'text-sm' : 'text-base md:text-lg'
          }`}
        >
          {product.name}
        </h3>

        {/* Price + Button Wrapper */}
        <div className='bg-[#FFDDD9] rounded-2xl px-3 py-2 flex items-center justify-between'>
          <span
            className={`text-[#FFA500] font-semibold ${
              isSmall ? 'text-sm' : 'text-base'
            }`}
          >
            {formatPrice(product.price)}
          </span>
          <button
            className='bg-[#990000] text-white px-4 py-1.5 rounded-xl font-semibold text-sm hover:bg-[#7A0000] transition-colors'
            aria-label={`Buy ${product.name}`}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
