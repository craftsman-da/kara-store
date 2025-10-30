'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Menu, X, Search, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const productCategories = [
    { name: 'Phones & Tablet', href: '/category/phones-tablet' },
    { name: 'Computing', href: '/category/computing' },
    { name: 'Electronics', href: '/category/electronics' },
    { name: 'Home & Kitchen', href: '/category/home-kitchen' },
    { name: 'Power Supplies', href: '/category/power-supplies' },

    { name: 'Other Categories', href: '/category/other' },
  ];

  return (
    <header className='bg-transparent pt-2 pb-0.5 sticky top-0 z-50'>
      <div className='container mx-auto px-2'>
        <div className='bg-[#8B0000] text-white rounded-2xl shadow-lg'>
          <div className='px-6'>
            <div className='flex items-center justify-between h-16 md:h-20'>
              {/* Logo */}
              <Link href='/' className='flex items-center space-x-2'>
                <Image
                  src='/kara-logo.png'
                  alt='Logo image'
                  width={100}
                  height={50}
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className='hidden lg:flex items-center space-x-6 xl:space-x-8'>
                <Link
                  href='/'
                  className='hover:text-gray-200 transition-colors text-sm font-medium'
                >
                  Home
                </Link>

                {/* Product Dropdown */}
                <div className='relative group'>
                  <button className='hover:text-gray-200 transition-colors flex items-center text-sm font-medium'>
                    Product
                    <ChevronDown className='w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200' />
                  </button>

                  {/* Dropdown Menu */}
                  <div className='absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2'>
                    <div className='py-2'>
                      {productCategories.map((category, index) => (
                        <Link
                          key={index}
                          href={category.href}
                          className='block px-4 py-2.5 text-gray-700 hover:bg-red-50 hover:text-[#8B0000] transition-colors text-sm font-medium'
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href='/about'
                  className='hover:text-gray-200 transition-colors text-sm font-medium'
                >
                  About us
                </Link>
                <Link
                  href='/contact'
                  className='hover:text-gray-200 transition-colors text-sm font-medium'
                >
                  Contact us
                </Link>
              </nav>

              {/* Search, Cart, and Auth (Desktop) */}
              <div className='hidden lg:flex items-center space-x-3 xl:space-x-4'>
                <div className='relative'>
                  <input
                    type='text'
                    placeholder='Search'
                    className='bg-white text-gray-800 px-4 py-2 rounded-full pr-10 w-40 xl:w-48 focus:outline-none focus:ring-2 focus:ring-white text-sm'
                  />
                  <Search className='absolute right-3 top-2.5 w-4 h-4 text-gray-500' />
                </div>
                <button className='bg-white text-[#8B0000] p-2 rounded-full hover:bg-gray-100 transition-colors'>
                  <ShoppingCart className='w-5 h-5' />
                </button>
                <Link
                  href='/login'
                  className='hover:text-gray-200 transition-colors text-sm font-medium px-2'
                >
                  Login
                </Link>
                <Link
                  href='/get-started'
                  className='bg-white text-[#8B0000] px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm whitespace-nowrap'
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='lg:hidden text-white'
              >
                {isMenuOpen ? (
                  <X className='w-6 h-6' />
                ) : (
                  <Menu className='w-6 h-6' />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className='lg:hidden py-4 border-t border-red-800'>
                <nav className='flex flex-col space-y-4'>
                  <Link
                    href='/'
                    className='hover:text-gray-200 transition-colors'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>

                  {/* Mobile Product Dropdown */}
                  <div>
                    <button
                      onClick={() =>
                        setIsProductDropdownOpen(!isProductDropdownOpen)
                      }
                      className='flex items-center justify-between w-full hover:text-gray-200 transition-colors'
                    >
                      <span>Product</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isProductDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown Items */}
                    {isProductDropdownOpen && (
                      <div className='ml-4 mt-2 space-y-2'>
                        {productCategories.map((category, index) => (
                          <Link
                            key={index}
                            href={category.href}
                            className='block py-2 text-sm hover:text-gray-200 transition-colors'
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href='/about'
                    className='hover:text-gray-200 transition-colors'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About us
                  </Link>
                  <Link
                    href='/contact'
                    className='hover:text-gray-200 transition-colors'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact us
                  </Link>

                  <div className='pt-4 border-t border-red-800'>
                    <div className='relative mb-4'>
                      <input
                        type='text'
                        placeholder='Search'
                        className='bg-white text-gray-800 px-4 py-2 rounded-full pr-10 w-full focus:outline-none'
                      />
                      <Search className='absolute right-3 top-2.5 w-5 h-5 text-gray-500' />
                    </div>
                    <div className='flex items-center space-x-4'>
                      <Link
                        href='/login'
                        className='hover:text-gray-200 transition-colors'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        href='/get-started'
                        className='bg-white text-[#8B0000] px-6 py-2 rounded-full font-semibold'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
