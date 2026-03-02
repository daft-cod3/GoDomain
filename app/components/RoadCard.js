import React from 'react';
import Link from 'next/link';
export default function RoadCard({ title, description, icon, image, slug, href }) {
  const cardContent = (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 h-full">
      <div className="mb-4 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl w-fit shadow-sm">
        {image ? (
          <img src={image} alt={title} className="w-full h-32 sm:h-40 object-contain" />
        ) : (
          <div className="text-3xl sm:text-4xl">{icon}</div>
        )}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-black dark:text-white">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
  const linkHref = href || (slug ? `/road-signs/${slug}` : null);
  if (linkHref) {
    return (
      <Link href={linkHref} className="block hover:scale-105 transition-transform duration-300">
        {cardContent}
      </Link>
    );
  }
  return cardContent;
}