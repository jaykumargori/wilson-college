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
import { cn } from "@/lib/utils"

const images = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5656-bvSTWoV75aUNtinxO3wierEU24KCgI.jpeg",
    alt: "Wilson College Academic Programs - MA English and IT Department Information"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5659-rtwRrKvFt9ChQ3rXSA0oepwWayzLoF.jpeg",
    alt: "Department Admissions - Chemistry, Zoology, and Commerce"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5660-jLalzyRvs174EqF8CIcXJvAWIlcAIW.jpeg",
    alt: "Course Details and Student Activities"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5657-zF4jMVbdS69tztC2JTP4IUd3l4fLwy.jpeg",
    alt: "Wilson College Programs and Amenities"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5658-XU4XO2V84xtq68n3uHSf1ecsCKKdfq.jpeg",
    alt: "International Partners"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5655-5wvtHEEdeANyul8zQbxdp0aC1fZan0.jpeg",
    alt: "BMS Department Information"
  }
]

export function HomepageComponent() {
  const [activeCollege, setActiveCollege] = React.useState<string | null>(null)
  const [activeSection, setActiveSection] = React.useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const startSlideShow = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds
  }

  React.useEffect(() => {
    startSlideShow()
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex])

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      setTimeout(() => setIsAnimating(false), 500) // Match this with CSS transition duration
    }
  }

  const previousSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
      setTimeout(() => setIsAnimating(false), 500) // Match this with CSS transition duration
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-2">
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
      <header className="border-b border-gray-800 bg-gray-900 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5654-nyTeWy3hyNLu2KPBivvJk4KJxfyImI.png"
                alt="Wilson College Logo"
                width={240}
                height={80}
                className="h-20 w-auto"
                priority
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
                {`College Magazine "Wilsonian"`}
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
                  <NavigationMenuLink className="p-2 hover:bg-gray-800">{`Principal's Message`}</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white">
                ACADEMICS
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-[800px] bg-gray-900 p-4">
                <div className="flex space-x-4">
                  <div className="w-1/4 border-r border-gray-700">
                    <h3 className="mb-2 font-semibold text-white">College Level</h3>
                    <NavigationMenuLink asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                        onMouseEnter={() => setActiveCollege('Junior College')}
                      >
                        Junior College
                      </Button>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                        onMouseEnter={() => setActiveCollege('Degree College')}
                      >
                        Degree College
                      </Button>
                    </NavigationMenuLink>
                  </div>
                  {activeCollege && (
                    <div className="w-1/4 border-r border-gray-700">
                      <h3 className="mb-2 font-semibold text-white">Sections</h3>
                      <NavigationMenuLink asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                          onMouseEnter={() => setActiveSection('Arts')}
                        >
                          Arts
                        </Button>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                          onMouseEnter={() => setActiveSection('Science')}
                        >
                          Science
                        </Button>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                          onMouseEnter={() => setActiveSection('Commerce')}
                        >
                          Commerce
                        </Button>
                      </NavigationMenuLink>
                    </div>
                  )}
                  {activeSection && (
                    <div className="w-2/4">
                      <h3 className="mb-2 font-semibold text-white">Courses</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {activeSection === 'Arts' && (
                          <>
                            <NavigationMenuLink asChild>
                              <Button variant="ghost" className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white">English</Button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Button variant="ghost" className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white">Hindi</Button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Button variant="ghost" className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white">Marathi</Button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Button variant="ghost" className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white">History</Button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Button variant="ghost" className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white">Geography</Button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Button variant="ghost" className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white">Economics</Button>
                            </NavigationMenuLink>
                          </>
                        )}
                        {activeSection === 'Science' && (
                          <>
                            <NavigationMenuLink asChild>
                              <Button variant="ghost" className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white">Physics</Button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Button variant="ghost" className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white">Chemistry</Button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Button variant="ghost" className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white">Biology</Button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Button variant="ghost" className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white">Mathematics</Button>
                            </NavigationMenuLink>
                          </>
                        )}
                        {activeSection === 'Commerce' && (
                          <>
                            <NavigationMenuLink asChild>
                              <Button variant="ghost" className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white">Accountancy</Button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Button variant="ghost" className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white">Business Studies</Button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Button variant="ghost" className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white">Economics</Button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Button variant="ghost" className="w-full justify-start px-2 text-gray-300 hover:bg-gray-800 hover:text-white">Mathematics</Button>
                            </NavigationMenuLink>
                          </>
                        )}
                      </div>
                    </div>
                  )}
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

      {/* Carousel Section */}
      <section className="relative">
        <div className="relative h-[60vh] w-full overflow-hidden">
          {/* Current Image */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              isAnimating ? "opacity-0" : "opacity-100"
            )}
          >
            <Image
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              width={1000}
              height={1000}
              priority
              className="h-full w-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          </div>

          {/* Navigation Buttons */}
          <Button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
            size="icon"
            onClick={previousSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
            size="icon"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  index === currentIndex ? "bg-white w-4" : "bg-white/50"
                )}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Academic Highlights */}
      <section className="border-t border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-400">25+</h3>
            <p className="text-gray-400">Academic Departments</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-400">95%</h3>
            <p className="text-gray-400">Graduate Success Rate</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-400">40+</h3>
            <p className="text-gray-400">Student Clubs</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-400">30+</h3>
            <p className="text-gray-400">Research Centers</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto grid gap-6 px-4 py-12 md:grid-cols-3">
        {/* Announcements */}
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-blue-400" />
              Latest Announcements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-700 p-4">
                <p className="font-medium">Admission Open for 2024-25</p>
                <p className="mt-1 text-sm text-gray-300">Applications now being accepted for all programs</p>
              </div>
              <div className="rounded-lg bg-gray-700 p-4">
                <p className="font-medium">Campus Recruitment Drive</p>
                <p className="mt-1 text-sm text-gray-300">Top companies visiting next week</p>
              </div>
              <div className="rounded-lg bg-gray-700 p-4">
                <p className="font-medium">Research Symposium</p>
                <p className="mt-1 text-sm text-gray-300">Annual research showcase on December 15</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Events */}
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-400" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-gray-700">
                  <span className="text-lg font-bold text-blue-400">15</span>
                  <span className="text-xs text-gray-300">DEC</span>
                </div>
                <div>
                  <h4 className="font-medium">Cultural Festival</h4>
                  <p className="text-sm text-gray-300">Annual celebration of art and culture</p>
                </div>
              </div>
              <Separator className="bg-gray-700" />
              <div className="flex gap-4">
                <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-gray-700">
                  <span className="text-lg font-bold text-blue-400">20</span>
                  <span className="text-xs text-gray-300">DEC</span>
                </div>
                <div>
                  <h4 className="font-medium">Sports Meet</h4>
                  <p className="text-sm text-gray-300">Inter-college sports competition</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-400" />
              Student Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg bg-gray-700 p-4 transition-colors hover:bg-gray-600"
              >
                <Book className="h-5 w-5 text-blue-400" />
                <span>Library Portal</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg bg-gray-700 p-4 transition-colors hover:bg-gray-600"
              >
                <GraduationCap className="h-5 w-5 text-blue-400" />
                <span>Student Portal</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg bg-gray-700 p-4 transition-colors hover:bg-gray-600"
              >
                <MessageSquare className="h-5 w-5 text-blue-400" />
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
              <h3 className="mb-4 text-lg font-semibold text-blue-400">About Wilson College</h3>
              <p className="text-sm text-gray-400">
                Wilson College is committed to excellence in education, fostering innovation, and preparing students for
                global leadership roles since 1832.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-blue-400">Quick Links</h3>
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
              <h3 className="mb-4 text-lg font-semibold text-blue-400">Contact Us</h3>
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
              <h3 className="mb-4 text-lg font-semibold text-blue-400">Follow Us</h3>
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