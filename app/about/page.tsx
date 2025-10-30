'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className='min-h-screen container mx-auto mt-8 bg-white text-gray-800 font-sans'>
      {/* Page Header */}
      <section className='bg-[#8B0000] text-white py-6 text-center'>
        <h1 className='text-2xl md:text-3xl font-bold tracking-wide'>Kara</h1>
      </section>

      {/* What is Kara Section */}
      <section className='container mx-auto px-6  md:py-16 grid md:grid-cols-2 items-center gap-10'>
        <div className='flex justify-center md:justify-end'>
          <div className='relative w-full h-64 '>
            <Image
              src='/images/about1.png'
              alt='Shopping illustration'
              fill
              className='object-contain'
            />
          </div>
        </div>

        <div>
          <h2 className='text-[#4A148C] font-bold text-lg md:text-xl mb-3'>
            What is Kara
          </h2>
          <p className='text-sm md:text-base leading-relaxed mb-4'>
            We provide a digital marketplace for individuals to showcase and
            sell a wide range of latest gadgets, electronics, power supplies,
            home appliances and all other categories, all conveniently available
            at your fingertips.
          </p>
          <p className='text-sm md:text-base leading-relaxed'>
            From the latest trends to timeless products, Kara has it all. With a
            user‑friendly interface, secure shopping, and a commitment to
            customer satisfaction, it’s your go‑to source for effortless online
            shopping. Whether you’re a tech enthusiast or just looking for
            everyday electronics, we’ve got you covered.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className='container mx-auto px-6  md:py-16 grid md:grid-cols-2 items-center gap-10'>
        <div className=' order-2 md:order-1 lg:order-1'>
          <h2 className='text-[#990000] font-bold text-lg md:text-xl mb-3'>
            What We Do
          </h2>
          <p className='text-sm md:text-base leading-relaxed mb-3'>
            <span className='font-semibold text-gray-800'>
              Product Listings:
            </span>{' '}
            Our website displays a diverse range of fashion items and tech
            products, including clothing, shoes, bags, jewelry, gadgets, and
            more.
          </p>
          <p className='text-sm md:text-base leading-relaxed mb-3'>
            <span className='font-semibold text-gray-800'>
              User‑Friendly Navigation:
            </span>{' '}
            Easy‑to‑use menus and search filters help customers find exactly
            what they’re looking for quickly.
          </p>
          <p className='text-sm md:text-base leading-relaxed mb-3'>
            <span className='font-semibold text-gray-800'>
              Customer Reviews:
            </span>{' '}
            Buyers can leave real feedback, helping others make informed
            decisions.
          </p>
          <p className='text-sm md:text-base leading-relaxed'>
            We offer the convenience of shopping from the comfort of your own
            home, anytime.
          </p>
        </div>

        <div className='flex order-1 md:order-2 lg:order-2 justify-center md:justify-start'>
          <div className='relative w-full h-64 '>
            <Image
              src='/images/about2.png'
              alt='Product management illustration'
              fill
              className='object-contain'
            />
          </div>
        </div>
      </section>

      {/* Why Choosing Us Section */}
      <section className='container mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 items-center gap-10'>
        <div className='flex justify-center md:justify-end'>
          <div className='relative w-full h-64 '>
            <Image
              src='/images/about3.png'
              alt='Shopping experience illustration'
              fill
              className='object-contain'
            />
          </div>
        </div>

        <div>
          <h2 className='text-[#4A148C] font-bold text-lg md:text-xl mb-3'>
            Why choosing us?
          </h2>

          <p className='text-sm md:text-base leading-relaxed mb-3'>
            <span className='font-semibold'>Convenience:</span> Shopping online
            with us is incredibly simple. You can browse and make purchases from
            the comfort of your home—no need to travel to physical stores.
          </p>

          <p className='text-sm md:text-base leading-relaxed mb-3'>
            <span className='font-semibold'>Wide Selection:</span> Kara offers a
            vast and diverse range of products from different brands and
            regions. You’ll always find something that suits your need and
            budget.
          </p>

          <p className='text-sm md:text-base leading-relaxed'>
            <span className='font-semibold'>Customer Reviews:</span> Buyers can
            share insights about the quality, fit, and satisfaction of previous
            purchases—helping you shop smarter and confidently.
          </p>
        </div>
      </section>
    </main>
  );
}
