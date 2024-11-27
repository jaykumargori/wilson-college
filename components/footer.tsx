'use client'

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              Wilson College<br />
              Chowpatty Seaface Road,<br />
              Mumbai - 400 007<br />
              India
            </address>
            <p className="mt-2">Phone: 022-23663001</p>
            <p>Email: info@wilsoncollege.edu</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/" className="block hover:text-amber-400 transition-colors duration-300">Home</Link>
              <Link href="/about" className="block hover:text-amber-400 transition-colors duration-300">About Us</Link>
              <Link href="/academics" className="block hover:text-amber-400 transition-colors duration-300">Academics</Link>
              <Link href="/admissions" className="block hover:text-amber-400 transition-colors duration-300">Admissions</Link>
              <Link href="/iqac" className="block hover:text-amber-400 transition-colors duration-300">IQAC</Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <nav className="space-y-2">
              <Link href="/library" className="block hover:text-amber-400 transition-colors duration-300">Library</Link>
              <Link href="/career-services" className="block hover:text-amber-400 transition-colors duration-300">Career Services</Link>
              <Link href="/student-portal" className="block hover:text-amber-400 transition-colors duration-300">Student Portal</Link>
              <Link href="/alumni" className="block hover:text-amber-400 transition-colors duration-300">Alumni Association</Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-amber-400 transition-colors duration-300"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-amber-400 transition-colors duration-300"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-amber-400 transition-colors duration-300"><Instagram className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-amber-400 transition-colors duration-300"><Linkedin className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>&copy; 2024 Wilson College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}