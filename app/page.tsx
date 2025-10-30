'use client';

import {
  ClipboardList,
  ShoppingCart,
  UserCog,
  BadgeDollarSign,
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import {
  topSellingProducts,
  categories,
  discountProducts,
  categoryFilters,
} from '@/data/products';
import { useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('Power Supplies');

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <div className='h-12 bg-white '></div>
      <section className='relative text-white overflow-hidden h-auto md:h-[70vh] max-h-[800px]'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/hero-bg.svg'
            alt='Hero background'
            fill
            className='object-cover object-bottom'
            priority
          />
        </div>

        {/* Content Container */}
        <div className='container mx-auto px-4 py-8 md:py-12 relative z-10 flex flex-col md:grid md:grid-cols-2 gap-8 items-center w-full text-center md:text-left'>
          {/* Left Content */}
          <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 leading-tight pt-[50px] md:pt-0'>
              Enjoy the Best selling product
            </h1>

            <p className='text-yellow-400 text-lg md:text-xl lg:text-2xl font-semibold mb-4'>
              Online Shopping Redefined
            </p>

            <p className='text-gray-100 mb-6 max-w-lg text-sm md:text-base lg:text-lg leading-relaxed'>
              Ready to get a new device? Start shopping with us today and
              discover the new digital world of different categories at your
              fingertips!
            </p>

            <button className='bg-white text-[#8B0000] px-8 py-3 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'>
              Shop Now
            </button>
          </div>

          {/* Right Illustration */}

          <div className='relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] flex justify-center items-center  md:mt-0'>
            <Image
              src='/images/hero-woman.png'
              alt='Kara-hero-image'
              fill
              className='object-contain object-center'
              priority
            />
          </div>
        </div>
      </section>

      {/* Top Selling Products Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          {/* Section Header */}
          <div className='text-center mb-10'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>
              Our Top Selling Product
            </h2>
            <p className='text-gray-600'>Discover our most popular items</p>
          </div>

          {/* Category Filter Tabs */}
          <div className='flex flex-wrap justify-center gap-3 mb-12'>
            {categoryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#8B0000] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10'>
            {topSellingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* View All Button */}
          <div className='text-right pr-6'>
            <button className='text-orange-500 font-semibold text-lg hover:text-orange-600 transition-colors inline-flex  group'>
              View All
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className='py-16 bg-linear-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          {/* Section Header */}
          <div className='text-center mb-12'>
            <p className='text-[#8B0000] uppercase tracking-wider font-bold text-sm mb-2'>
              CATEGORIES
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>
              Latest on our Store
            </h2>
            <p className='text-gray-600'>
              Browse by category to find what you need
            </p>
          </div>

          {/* Categories Grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-10'>
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          {/* Learn More Button */}
          <div className='text-center'>
            <button className='bg-[#8B0000] text-white px-10 py-3 rounded-lg font-semibold text-lg hover:bg-red-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className='py-16 bg-[#FEE9E6]'>
        <div className='container mx-auto px-4'>
          {/* Section Header */}
          <div className='text-center mb-6'>
            <p className='text-[#8B0000] uppercase tracking-wider font-bold text-sm mb-2'>
              STATS
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>
              Our Statistics
            </h2>
            <p className='text-gray-600'>Why customers trust us</p>
          </div>

          {/* Stats Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap'>
            {[
              {
                icon: ClipboardList,
                title: 'Regular Delivery System',
                color: 'bg-white',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptas suscipit quas.',
              },
              {
                icon: ShoppingCart,
                title: 'On Time Delivery',
                color: 'bg-white',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptas suscipit quas.',
              },
              {
                icon: BadgeDollarSign,
                title: 'Happy Customers Guarantee',
                color: 'bg-white',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptas suscipit quas.',
              },
              {
                icon: UserCog,
                title: '24/7 Customer support',
                color: 'bg-white',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptas suscipit quas.',
              },
            ].map((stat, index) => (
              <div key={index} className=' p-6 text-center '>
                <div
                  className={`${stat.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <stat.icon className='w-8 h-8 text-[#990100]' />
                </div>
                <h3 className='font-bold text-lg mb-3 text-black-800'>
                  {stat.title}
                </h3>
                <p className='text-black-600 text-sm leading-relaxed'>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Products Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl container mx-auto px-4'>
          {/* Section Header */}
          <div className='text-center mb-12'>
            <p className='text-[#8B0000] uppercase tracking-wider font-bold text-sm mb-2'>
              DISCOUNT
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>
              Most Order Product with Big Discount
            </h2>
            <p className='text-gray-600'>Save big on these popular items</p>
          </div>

          {/* Discount Products Grid */}
          <div className='grid  grid-cols-2 md:grid-cols-4 gap-6'>
            {discountProducts.map((product) => (
              <div key={product.id} className='w-[95%] mx-auto'>
                <ProductCard product={product} variant='small' />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
