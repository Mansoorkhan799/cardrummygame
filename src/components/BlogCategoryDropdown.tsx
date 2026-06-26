'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Game Guides', href: '/blog/how-to-play-teen-patti' },
  { name: 'How-To Tutorials', href: '/blog/how-to-register-bind-email-card-rummy' },
  { name: 'Payment Guides', href: '/blog/card-rummy-jazzcash-withdrawal' },
  { name: 'Trust & Safety', href: '/blog/is-card-rummy-safe-legal-pakistan' },
  { name: 'Tips & Strategy', href: '/blog/card-rummy-tips-tricks-to-win' },
  { name: 'Account & Login', href: '/blog/how-to-register-bind-email-card-rummy' },
];

const BlogCategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full md:w-64 px-4 py-2 bg-secondary text-white rounded-md"
      >
        <span>Select Category</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full md:w-64 mt-1 bg-secondary rounded-md shadow-lg">
          <ul className="py-1">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  href={category.href}
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogCategoryDropdown;
