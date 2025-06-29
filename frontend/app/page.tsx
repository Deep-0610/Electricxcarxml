'use client';

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 p-8">
      <Image src="/ev-logo.png" alt="EV Logo" width={100} height={100} className="mb-4" />
      <h1 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-300">
        ElectricXcar | EV Future Hub ⚡
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mt-2 mb-10">
        Helping customers choose EVs and guiding companies to set up perfect showroom spots.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 mb-10">
        <Link
          href="/map"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-lg text-center"
        >
          🔍 Find Charging Stations (Map)
        </Link>

        <Link
          href="/predict-showroom"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg text-center"
        >
          🧠 Predict Showroom Location
        </Link>
      </div>

      <footer className="text-sm text-gray-500 dark:text-gray-400">
        Built with ❤️ by Deep | Powered by Next.js + FastAPI
      </footer>
    </div>
  );
}
