
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Page",
  description: "Our latest products",
};

export default async function ProductPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <section className="min-h-screen bg-gray-50 px-5 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Our Products
          </h1>
          <p className="mt-3 text-gray-500">
            Explore our latest collection
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {data.slice(0, 12).map((item: any) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="flex h-48 items-center justify-center bg-linear-to-br from-indigo-100 to-purple-100">
                <span className="text-5xl">📦</span>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-sm font-medium text-indigo-600">
                  Product #{item.id}
                </span>

                <h2 className="mt-2 line-clamp-1 text-lg font-bold capitalize text-gray-800">
                  {item.title}
                </h2>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                  {item.body}
                </p>

                {/* Price */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xl font-bold text-indigo-600">
                    ${(item.id * 10).toFixed(2)}
                  </span>

                  <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
