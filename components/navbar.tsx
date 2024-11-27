"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight, Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"

const navItems = [
  { title: "Home", href: "/" },
  { 
    title: "About Us", 
    items: [
      { title: "History", href: "/history" },
      { title: "Vision & Mission", href: "/vision-mission" },
      { title: "Principal's Message", href: "/principals-message" },
    ]
  },
  { 
    title: "Academics", 
    items: [
      { 
        title: "Arts",
        items: [
          { title: "ENGLISH", href: "/department/english" },
          { title: "HINDI", href: "/department/hindi" },
          { title: "MARATHI", href: "/department/marathi" },
          { title: "PHILOSOPHY", href: "/department/philosophy" },
          { title: "ECONOMICS", href: "/department/economics" },
          { title: "HISTORY", href: "/department/history" },
          { title: "SOCIOLOGY", href: "/department/sociology" },
          { title: "PSYCHOLOGY", href: "/department/psychology" },
          { title: "POLITICAL SCIENCE", href: "/department/political-science" },
          { title: "BAMMC (UNAIDED)", href: "/department/bammc" },
        ]
      },
      { 
        title: "Science",
        items: [
          { title: "BOTANY", href: "/department/botany" },
          { title: "CHEMISTRY", href: "/department/chemistry" },
          { title: "MATHEMATICS", href: "/department/mathematics" },
          { title: "MICROBIOLOGY", href: "/department/microbiology" },
          { title: "ZOOLOGY", href: "/department/zoology" },
          { title: "PHYSICS", href: "/department/physics" },
          { title: "INFORMATION TECHNOLGY (UNAIDED)", href: "/department/information-technology" },
        ]
      },
      { 
        title: "Commerce",
        items: [
          { title: "B.COMMERCE (UNAIDED)", href: "/department/commerce" },
          { title: "BMS (UNAIDED)", href: "/department/bms" },
          { title: "BAF (UNAIDED)", href: "/department/baf" },
          { title: "BFM (UNAIDED)", href: "/department/bfm" },
        ]
      },
      { 
        title: "Skilled Based Program",
        items: [
          { title: "B.VOC (THEATRE & STAGE CRAFT)", href: "/department/bvoc-theatre" },
          { title: "SAP", href: "/department/sap" },
        ]
      },
      { 
        title: "Cocurricular Activites",
        items: [
          { title: "CERTIFIED COURSES", href: "/department/certified-courses" },
        ]
      },
    ]
  },
  { title: "Admissions", href: "/admissions" },
  { title: "IQAC", href: "/iqac" },
  { title: "NIRF", href: "/nirf" },
  { title: "Contact", href: "/contact" },
]

export function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5654-nyTeWy3hyNLu2KPBivvJk4KJxfyImI.png"
              alt="Wilson College Logo"
              className="w-16 h-16 mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Wilson College</h1>
              <p className="text-sm text-gray-600">Established 1832</p>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {'href' in item ? (
                  <Link href={item.href ?? ""} className="py-2 px-3 text-gray-700 hover:bg-blue-50 transition duration-300 rounded">
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <button className="py-2 px-3 text-gray-700 hover:bg-blue-50 transition duration-300 flex items-center rounded">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-50">
                      <div className="py-1">
                        {item.items.map((subItem, subIndex) => (
                          'href' in subItem ? (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                            >
                              {subItem.title}
                            </Link>
                          ) : (
                            <div key={subIndex} className="relative group/sub">
                              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 flex items-center justify-between">
                                {subItem.title}
                                <ChevronRight className="h-4 w-4" />
                              </button>
                              <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg hidden group-hover/sub:block">
                                <div className="py-1">
                                  {subItem.items.map((subSubItem, subSubIndex) => (
                                    <Link
                                      key={subSubIndex}
                                      href={subSubItem.href}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                                    >
                                      {subSubItem.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>
          <Button className="lg:hidden bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}