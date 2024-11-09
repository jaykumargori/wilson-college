"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Bell, Book, ChevronLeft, ChevronRight, Facebook, GraduationCap, Instagram, Linkedin, Mail, MapPin, MessageSquare, Phone, Twitter, Users, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"

export function Variation_1() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 text-sm">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>022-23663001</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@wilsoncollege.edu</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>CHOWPATTY SEAFACE ROAD, MUMBAI-400 007</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-200">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-gray-200">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-gray-200">
              <Youtube className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-gray-200">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-gray-200">
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-white/10 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Image
                src="/placeholder.svg"
                alt="Wilson College Logo"
                width={80}
                height={80}
                className="h-20 w-20"
              />
              <div>
                <h1 className="text-2xl font-bold">Wilson College</h1>
                <p className="text-sm text-gray-400">Autonomous Institution</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                College Prospectus 2024-2025
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                College Magazine "Wilsonian"
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <NavigationMenu className="container mx-auto px-4 py-2">
          <NavigationMenuList className="flex-wrap justify-start gap-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white">
                HOME
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white">
                ABOUT US
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-gray-900">
                <div className="grid gap-1 p-2">
                  <NavigationMenuLink className="p-2 hover:bg-gray-800">Vision & Mission</NavigationMenuLink>
                  <NavigationMenuLink className="p-2 hover:bg-gray-800">History</NavigationMenuLink>
                  <NavigationMenuLink className="p-2 hover:bg-gray-800">Principal's Message</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white">
                ACADEMICS
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-gray-900">
                <div className="grid grid-cols-3 gap-4 p-4">
                  <div>
                    <h3 className="mb-2 font-semibold">ARTS</h3>
                    <div className="grid gap-1">
                      <NavigationMenuLink className="p-2 hover:bg-gray-800">English</NavigationMenuLink>
                      <NavigationMenuLink className="p-2 hover:bg-gray-800">Hindi</NavigationMenuLink>
                      <NavigationMenuLink className="p-2 hover:bg-gray-800">Marathi</NavigationMenuLink>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">SCIENCE</h3>
                    <div className="grid gap-1">
                      <NavigationMenuLink className="p-2 hover:bg-gray-800">Botany</NavigationMenuLink>
                      <NavigationMenuLink className="p-2 hover:bg-gray-800">Chemistry</NavigationMenuLink>
                      <NavigationMenuLink className="p-2 hover:bg-gray-800">Physics</NavigationMenuLink>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">COMMERCE</h3>
                    <div className="grid gap-1">
                      <NavigationMenuLink className="p-2 hover:bg-gray-800">B.Com</NavigationMenuLink>
                      <NavigationMenuLink className="p-2 hover:bg-gray-800">BMS</NavigationMenuLink>
                      <NavigationMenuLink className="p-2 hover:bg-gray-800">BAF</NavigationMenuLink>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white">
                IQAC
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white">
                NIRF
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white">
                DBT
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white">
                ADMISSION
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white">
                FACILITIES
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white">
                SYLLABUS
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white">
                ALUMNI
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white">
                CONTACT US
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[60vh] w-full overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Wilson College Campus"
            className="object-cover brightness-50"
            fill
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Excellence in Education</h2>
              <p className="mt-4 text-xl">Shaping Tomorrow's Leaders Since 1832</p>
            </div>
          </div>
        </div>
        <Button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70" size="icon">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70" size="icon">
          <ChevronRight className="h-6 w-6" />
        </Button>
      </section>

      {/* Academic Highlights */}
      <section className="border-t border-white/10 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold">25+</h3>
            <p className="text-gray-400">Academic Departments</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">95%</h3>
            <p className="text-gray-400">Graduate Success Rate</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">40+</h3>
            <p className="text-gray-400">Student Clubs</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">30+</h3>
            <p className="text-gray-400">Research Centers</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto grid gap-6 px-4 py-12 md:grid-cols-3">
        {/* Announcements */}
        <Card className="bg-gray-900 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Latest Announcements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-800 p-4">
                <p className="font-medium">Admission Open for 2024-25</p>
                <p className="mt-1 text-sm text-gray-400">Applications now being accepted for all programs</p>
              </div>
              <div className="rounded-lg bg-gray-800 p-4">
                <p className="font-medium">Campus Recruitment Drive</p>
                <p className="mt-1 text-sm text-gray-400">Top companies visiting next week</p>
              </div>
              <div className="rounded-lg bg-gray-800 p-4">
                <p className="font-medium">Research Symposium</p>
                <p className="mt-1 text-sm text-gray-400">Annual research showcase on December 15</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Events */}
        <Card className="bg-gray-900 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-gray-800">
                  <span className="text-lg font-bold">15</span>
                  <span className="text-xs text-gray-400">DEC</span>
                </div>
                <div>
                  <h4 className="font-medium">Cultural Festival</h4>
                  <p className="text-sm text-gray-400">Annual celebration of art and culture</p>
                </div>
              </div>
              <Separator className="bg-gray-800" />
              <div className="flex gap-4">
                <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-gray-800">
                  <span className="text-lg font-bold">20</span>
                  <span className="text-xs text-gray-400">DEC</span>
                </div>
                <div>
                  <h4 className="font-medium">Sports Meet</h4>
                  <p className="text-sm text-gray-400">Inter-college sports competition</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card className="bg-gray-900 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Student Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg bg-gray-800 p-4 transition-colors hover:bg-gray-700"
              >
                <Book className="h-5 w-5" />
                <span>Library Portal</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg bg-gray-800 p-4 transition-colors hover:bg-gray-700"
              >
                <GraduationCap className="h-5 w-5" />
                <span>Student Portal</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg bg-gray-800 p-4 transition-colors hover:bg-gray-700"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Career Services</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">About Wilson College</h3>
              <p className="text-sm text-gray-400">
                Wilson College is committed to excellence in education, fostering innovation, and preparing students for
                global leadership roles since 1832.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Academic Programs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Campus Life
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <address className="not-italic text-sm text-gray-400">
                CHOWPATTY SEAFACE ROAD,
                <br />
                MUMBAI-400 007
                <br />
                India
                <br />
                <Link href="tel:022-23663001" className="hover:text-white">
                  022-23663001
                </Link>
                <br />
                <Link href="mailto:info@wilsoncollege.edu" className="hover:text-white">
                  info@wilsoncollege.edu
                </Link>
              </address>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Wilson College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}