"use client";

import Image from "next/image";
import Link from "next/link";
import { INDIVIDUAL_CLASSES, RESOURCE_LINKS } from "../classData";

export default function DrivingClassPage({ classId }) {
  const data = INDIVIDUAL_CLASSES[classId];
  if (!data) return null;

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${data.bg} px-4 py-16 dark:from-gray-900 dark:to-gray-950`}
    >
      <div className="mx-auto max-w-4xl">
        <Link
          href="/driving-classes"
          className="mb-8 inline-flex items-center gap-2 text-gray-900 transition-all hover:gap-3 dark:text-white"
        >
          <span>&larr;</span> Back to Driving Classes
        </Link>

        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-800">
          <div
            className={`bg-gradient-to-r ${data.color} px-8 py-12 text-center`}
          >
            <h1 className="mb-2 text-4xl font-bold text-white">{data.title}</h1>
            <p className="text-white/90">{data.subtitle}</p>
          </div>

          <div className="p-8">
            <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
              <Image
                src={data.image}
                alt={`${data.title} illustration`}
                width={1000}
                height={560}
                className="h-64 w-full object-cover"
              />
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  Overview
                </h2>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  {data.desc}
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  Requirements
                </h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {data.reqs.map((req) => (
                    <li key={req} className="flex items-start gap-2">
                      <span className="text-green-600">+</span> {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  Ideal For
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {data.ideal.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-gray-50 p-4 dark:bg-gray-700"
                    >
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  More Resources
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {RESOURCE_LINKS.map((resource) => (
                    <a
                      key={resource.id}
                      href={resource.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-gray-200 bg-white p-4 transition hover:border-indigo-300 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-indigo-500"
                    >
                      <p className="text-xs uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
                        {resource.stat}
                      </p>
                      <p className="mt-1 font-bold text-gray-900 dark:text-white">
                        {resource.title}
                      </p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        {resource.description}
                      </p>
                      <p className="mt-3 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                        {resource.cta} &rarr;
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
