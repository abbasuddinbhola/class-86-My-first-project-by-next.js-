
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">

        {/* About */}
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            Next<span className="text-indigo-500">Shop.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            Discover quality products with a simple and enjoyable shopping experience.
            We bring the best products closer to you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="transition hover:text-indigo-400">Home</Link></li>
            <li><Link href="/products" className="transition hover:text-indigo-400">Products</Link></li>
            <li><Link href="/about" className="transition hover:text-indigo-400">About Us</Link></li>
            <li><Link href="/contact" className="transition hover:text-indigo-400">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-white">
            Customer Support
          </h3>

          <ul className="space-y-3 text-sm">
            <li><Link href="/faq" className="transition hover:text-indigo-400">FAQs</Link></li>
            <li><Link href="/shipping" className="transition hover:text-indigo-400">Shipping Policy</Link></li>
            <li><Link href="/returns" className="transition hover:text-indigo-400">Return Policy</Link></li>
            <li><Link href="/privacy" className="transition hover:text-indigo-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-white">
            Get In Touch
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>Email: support@nextshop.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Location: Bangladesh</li>
          </ul>

          <div className="mt-5 flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-indigo-400">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-indigo-400">Instagram</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-indigo-400">GitHub</a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 px-5 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NextShop. All rights reserved.
        <p className="mt-2">
          Built with ❤️ using Next.js & Tailwind CSS
        </p>
      </div>

    </footer>
  );
}
