'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-[#8B0000] text-white'>
      <div className='container mx-auto px-4 py-12'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-5 gap-8 mb-8'>
          {/* Company Info - Left Side */}
          <div className='md:col-span-1'>
            <Link href='/' className='flex items-center space-x-2 mb-6'>
              <Image
                src='/kara-logo.png'
                alt='Logo image'
                width={100}
                height={50}
                priority
              />
            </Link>

            <div className='space-y-4 text-sm'>
              <p className='leading-relaxed'>
                7 Balogun Street, Anifowose,
                <br />
                Ikeja, Lagos State.
              </p>

              <div className='space-y-1'>
                <p>+234 909 358 3735</p>
                <p>+234 704 491 3736</p>
              </div>
            </div>

            {/* Language Selector */}
            <div className='mt-6'>
              <button className='flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors group'>
                <div className='flex items-center -space-x-1.5'>
                  {/* English flag */}
                  <div className='w-6 h-6 rounded-full overflow-hidden ring-2 ring-yellow-600 shadow-md'>
                    <Image
                      src='/images/lan-en.svg'
                      alt='English Flag'
                      width={24}
                      height={24}
                      className='object-cover'
                    />
                  </div>
                  {/* US flag */}
                  <div className='w-6 h-6 rounded-full overflow-hidden ring-2 ring-yellow-600'>
                    <Image
                      src='/images/lan-us.svg'
                      alt='US Flag'
                      width={24}
                      height={24}
                      className='object-cover'
                    />
                  </div>
                </div>
                <span className='text-sm font-light group-hover:text-gray-200'>
                  English
                </span>
              </button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className='font-bold text-lg mb-6'>Company</h3>
            <ul className='space-y-3 text-sm'>
              <li>
                <Link
                  href='/about'
                  className='hover:text-gray-200 transition-colors'
                >
                  About US
                </Link>
              </li>
              <li>
                <Link
                  href='/destination'
                  className='hover:text-gray-200 transition-colors'
                >
                  Destination
                </Link>
              </li>
              <li>
                <Link
                  href='/packages'
                  className='hover:text-gray-200 transition-colors'
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-gray-200 transition-colors'
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className='font-bold text-lg mb-6'>Help</h3>
            <ul className='space-y-3 text-sm'>
              <li>
                <Link
                  href='/help'
                  className='hover:text-gray-200 transition-colors'
                >
                  Help/FAQ
                </Link>
              </li>
              <li>
                <Link
                  href='/cancel-order'
                  className='hover:text-gray-200 transition-colors'
                >
                  Cancel Your Order
                </Link>
              </li>
              <li>
                <Link
                  href='/press'
                  className='hover:text-gray-200 transition-colors'
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className='font-bold text-lg mb-6'>More</h3>
            <ul className='space-y-3 text-sm'>
              <li>
                <Link
                  href='/book'
                  className='hover:text-gray-200 transition-colors'
                >
                  Book
                </Link>
              </li>
              <li>
                <Link
                  href='/investor-relations'
                  className='hover:text-gray-200 transition-colors'
                >
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link
                  href='/partnerships'
                  className='hover:text-gray-200 transition-colors'
                >
                  Partnerships
                </Link>
              </li>
              <li>
                <Link
                  href='/jobs'
                  className='hover:text-gray-200 transition-colors'
                >
                  Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Terms Links */}
          <div>
            <h3 className='font-bold text-lg mb-6'>Terms</h3>
            <ul className='space-y-3 text-sm'>
              <li>
                <Link
                  href='/privacy-policy'
                  className='hover:text-gray-200 transition-colors'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms-of-use'
                  className='hover:text-gray-200 transition-colors'
                >
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link
                  href='/accessibility'
                  className='hover:text-gray-200 transition-colors'
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className='border-t border-red-900 pt-6'>
          <p className='text-center text-sm'>
            Copyright (c) 2023 Kara. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
