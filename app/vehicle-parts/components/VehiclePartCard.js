'use client';

import Image from 'next/image';

export default function VehiclePartCard({ item }) {
  return (
    <div className="group h-full backdrop-blur-sm bg-gray-900/80 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">

      <div className="relative h-48 sm:h-56 w-full bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4 overflow-hidden">

        <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              width={180}
              height={180}
              className="object-contain"
            />
          ) : item.icon ? (
            <span className="text-5xl sm:text-6xl">{item.icon}</span>
          ) : null}
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="h-1 bg-linear-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
}