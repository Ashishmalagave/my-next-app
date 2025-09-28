import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-dark lg:pt-16 pt-6">
      <div
        className="
          w-full container mx-auto px-4 lg:pb-16 pb-6 md:px-8 
          grid grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-4 
          gap-8
        "
      >
        {/* Column 1: Logo */}
        <div className="sm:col-span-2 md:col-span-1">
          <Image
            src="/images/site-logo.png"
            alt="Site Logo"
            width={140}
            height={40}
            className="object-contain mb-4"
          />
          <p className="text-[14px] 2xl:text-[18px] text-gray-600 w-full max-w-[300px] 2xl:max-w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Column 2: Pages */}
        <div>
          <h3 className="font-semibold text-lg 2xl:text-[24px] mb-4">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-gray-600 2xl:text-[18px] hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 2xl:text-[18px] hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-gray-600 2xl:text-[18px] hover:text-primary">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 2xl:text-[18px] hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Menu */}
        <div>
          <h3 className="font-semibold text-lg 2xl:text-[24px] mb-4">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="text-gray-600 2xl:text-[18px] hover:text-primary">
                Menu1
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 2xl:text-[18px] hover:text-primary">
                Menu2
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 2xl:text-[18px] hover:text-primary">
                Menu3
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 2xl:text-[18px] hover:text-primary">
                Menu4
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Address + Socials */}
        <div className="sm:col-span-2 md:col-span-1">
          <h3 className="font-semibold text-lg 2xl:text-[24px] mb-4">Address</h3>
          <p className="text-sm text-gray-600 mb-4 2xl:text-[18px]">
            123 Web Street,
            <br />
            Tech City, India 400001
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-primary hover:text-white transition"
            >
              <Facebook size={18} fill="currentColor" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-primary hover:text-white transition"
            >
              <Linkedin size={18} fill="currentColor" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-primary hover:text-white transition"
            >
              <Twitter size={18} fill="currentColor" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 text-center py-4 lg:py-6 text-[sm] 2xl:text-[18px] text-gray-600">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}
