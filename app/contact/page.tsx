'use client';

import { Phone, Mail, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className='min-h-screen '>
      {/* Contact Form Section */}
      <section className='py-16 md:py-24'>
        <div className='w-full bg-linear-to-b from-[#ffffff] via-[#FF8888] to-[#FFffff] mx-auto px-4'>
          <div className='grid  md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto'>
            {/* Left Side - Contact Info with Gradient Background */}
            <div className='relative  overflow-hidden'>
              {/* Gradient Background */}
              <div className='absolute inset-0 '></div>

              <div className='relative z-10 p-8 md:p-10 space-y-8'>
                <div>
                  <h1 className='text-4xl md:text-5xl font-bold text-[#3E0101] mb-4'>
                    Get in Touch
                    <br />
                    with us
                  </h1>
                  <p className='text-[#3E0101] leading-relaxed max-w-md'>
                    Getting in touch with us is easy and we're here to assist
                    you. Whether you have questions, feedback, or need support,
                    our dedicated team is just a message or call away.
                  </p>
                </div>

                {/* Contact Details with Red Borders */}
                <div className='space-y-4'>
                  {/* Phone */}
                  <a
                    href='tel:+2349093583735'
                    className='flex items-center space-x-3 bg-white border-2 border-[#990000] rounded-xl px-6 py-4 hover:bg-red-50 transition-colors group'
                  >
                    <Phone className='w-5 h-5 text-[#990000]' />
                    <span className='text-gray-700 group-hover:text-[#990000] transition-colors'>
                      +234 909 358 3735
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href='mailto:kara@gmail.com'
                    className='flex items-center space-x-3 bg-white border-2 border-[#990000] rounded-xl px-6 py-4 hover:bg-red-50 transition-colors group'
                  >
                    <Mail className='w-5 h-5 text-[#990000]' />
                    <span className='text-gray-700 group-hover:text-[#990000] transition-colors'>
                      kara@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className='bg-white rounded-3xl shadow-xl p-8 md:p-10'>
              <form className='space-y-5'>
                {/* Full Name */}
                <div>
                  <input
                    type='text'
                    placeholder='Full Name'
                    required
                    className='w-full px-5 py-3 border-2 border-[#990000] rounded-xl focus:border-[#8B0000] focus:outline-none transition-colors'
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type='email'
                    placeholder='Email'
                    required
                    className='w-full px-5 py-3 border-2 border-[#990000] rounded-xl focus:border-[#8B0000] focus:outline-colors transition-colors'
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type='tel'
                    placeholder='Phone'
                    required
                    className='w-full px-5 py-3 border-2 border-[#990000] rounded-xl focus:border-[#8B0000] focus:outline-none transition-colors'
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    placeholder='Message'
                    required
                    rows={5}
                    className='w-full px-5 py-3 border-2 border-[#990000] rounded-xl focus:border-[#8B0000] focus:outline-none transition-colors resize-none'
                  />
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  className='w-full bg-[#8B0000] text-white py-4 rounded-xl font-semibold text-lg hover:bg-red-800 transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl'
                >
                  <span>Send Message</span>
                  <Send className='w-5 h-5' />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='py-16 pb-24'>
        <div className='container mx-auto px-4'>
          <div className='relative bg-gradient-to-br from-[#8B0000] via-red-800 to-red-900 rounded-3xl overflow-hidden max-w-4xl mx-auto'>
            {/* Decorative Dots */}
            <div className='absolute top-8 left-12 w-3 h-3 bg-white/20 rounded-full'></div>
            <div className='absolute top-12 right-16 w-3 h-3 bg-white/20 rounded-full'></div>
            <div className='absolute bottom-12 left-20 w-3 h-3 bg-green-400 rounded-full'></div>
            <div className='absolute bottom-16 right-12 w-3 h-3 bg-green-400 rounded-full'></div>
            <div className='absolute top-1/2 right-8 w-3 h-3 bg-orange-400 rounded-full'></div>

            <div className='relative z-10 px-8 py-16 text-center'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                Try it for free, join now
              </h2>
              <p className='text-white/90 mb-8 max-w-2xl mx-auto'>
                Try it for free and get access to unlimited sales and product
                with stress free, a special platform where you can trace order
                and enter of product you will love.
              </p>

              {/* Newsletter Form */}
              <form className='max-w-md mx-auto'>
                <div className='bg-white rounded-2xl p-2 flex items-center shadow-xl'>
                  <Mail className='w-5 h-5 text-gray-400 ml-4' />
                  <input
                    type='email'
                    placeholder='Enter Your Email'
                    required
                    className='flex-1 px-4 py-3 focus:outline-none'
                  />
                  <button
                    type='submit'
                    className='bg-[#8B0000] text-white  px-6 py-1 rounded-2xl font-medium hover:bg-red-900 transition-colors whitespace-nowrap text-sm'
                  >
                    Subscribe to
                    <br />
                    our Newsletter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
