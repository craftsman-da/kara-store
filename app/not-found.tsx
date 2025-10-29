'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-red-50 to-orange-50 text-center px-6'>
      {/* 404 Illustration */}
      <div className='relative w-72 h-72 mb-8'>
        <Image
          src='/images/hero-woman.png'
          alt='Kara 404 Illustration'
          fill
          className='object-contain opacity-90'
          priority
        />
      </div>

      {/* Text Content */}
      <h1 className='text-6xl md:text-7xl font-extrabold text-[#8B0000] mb-4'>
        404
      </h1>
      <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-3'>
        Oops! Page Not Found
      </h2>
      <p className='text-gray-600 max-w-md mb-8'>
        Looks like the page you’re trying to reach doesn’t exist. Don’t worry —
        let’s get you back on track.
      </p>

      {/* CTA Button */}
      <Link
        href='/'
        className='inline-flex items-center bg-[#8B0000] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'
      >
        <Home className='w-5 h-5 mr-2' />
        Back to Homepage
      </Link>

      {/* Decorative Accent */}
      <div className='mt-12 text-sm text-gray-500'>
        Kara — redefining your online shopping experience.
      </div>
    </main>
  );
}
