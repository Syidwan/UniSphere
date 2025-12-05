"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Scholarships", href: "/scholarships" },
  { name: "Internships", href: "/internships" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="UniSphere Logo" className="h-8" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-3">
        {menuItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`px-5 py-2 rounded-full border border-blue-500 text-sm font-medium transition
                ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-blue-600 hover:bg-blue-50"
                }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Sign-In Button (Desktop only) */}
      <div className="hidden lg:flex">
        <Link
          href="/signin"
          className="px-5 py-2 rounded-full border border-blue-500 text-blue-600 font-medium text-sm flex items-center gap-1 hover:bg-blue-50 transition"
        >
          Sign-In
          <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-blue-600"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col p-4 gap-3 lg:hidden">
          {menuItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`w-full px-5 py-2 rounded-full border text-sm font-medium transition text-center
                  ${
                    active
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-blue-500 text-blue-600 hover:bg-blue-50"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Sign-in for Mobile */}
          <Link
            href="/signin"
            onClick={() => setOpen(false)}
            className="w-full px-5 py-2 rounded-full border border-blue-500 text-blue-600 font-medium text-sm flex justify-center gap-1 hover:bg-blue-50 transition"
          >
            Sign-In
            <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
    </nav>
  );
}
