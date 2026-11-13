
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-indigo-600">
          Next<span className="text-gray-900">Shop.</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="font-medium text-gray-600 transition hover:text-indigo-600">
            Home
          </Link>

          <Link href="/products" className="font-medium text-gray-600 transition hover:text-indigo-600">
            Products
          </Link>

          <Link href="/about" className="font-medium text-gray-600 transition hover:text-indigo-600">
            About
          </Link>

          <Link href="/contact" className="font-medium text-gray-600 transition hover:text-indigo-600">
            Contact
          </Link>
        </div>

        {/* Cart Button */}
        <div className="flex items-center gap-3">
          <button className="relative rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700">
            Cart
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              2
            </span>
          </button>

          {/* Mobile Menu Icon */}
          <button className="text-2xl text-gray-700 md:hidden" aria-label="Open menu">
            ☰
          </button>
        </div>

      </nav>
    </header>
  );
}
