"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Book, ChevronDown, ChevronLeft, ChevronRight, Facebook, GraduationCap, Instagram, Linkedin, Mail, Menu, Phone, Twitter, Users, Calendar, Award, Globe, AlertTriangle, ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const images = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wall1.jpg-dr2hzIyZQ4stIf6zukPadbp3UnaLHE.jpeg",
    alt: "Wilson College Historic Building"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wall1.jpg-dr2hzIyZQ4stIf6zukPadbp3UnaLHE.jpeg",
    alt: "Wilson College Campus"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wall1.jpg-dr2hzIyZQ4stIf6zukPadbp3UnaLHE.jpeg",
    alt: "Wilson College Library"
  }
]

// const announcements = [
//   "🎓 Admissions Open for 2024-25 Academic Year",
//   "📚 New Library Resources Available for Students",
//   "🏆 Wilson College Ranked Top 10 in Academic Excellence",
//   "🎭 Annual Cultural Festival Starting Next Week",
//   "🔬 Research Symposium Registration Now Open"
// ]

const navItems: (
  | { title: string; href: string }
  | { title: string; items: Array<{ title: string; href: string } | { title: string; items: Array<{ title: string; href: string }> }> }
)[] = [
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
        title: "Junior College",
        items: [
          { title: "Arts", href: "/junior-college/arts" },
          { title: "Science", href: "/junior-college/science" },
          { title: "Commerce", href: "/junior-college/commerce" },
        ]
      },
      { 
        title: "Senior College",
        items: [
          { title: "Arts", href: "/senior-college/arts" },
          { title: "Science", href: "/senior-college/science" },
          { title: "Commerce", href: "/senior-college/commerce" },
        ]
      },
    ]
  },
  { title: "Admissions", href: "/admissions" },
  { title: "Research", href: "/research" },
  { title: "Campus Life", href: "/campus-life" },
  { title: "Contact", href: "/contact" },
]

const admissionCards = [
  {
    title: "M.A. Liberal Studies",
    description: "Explore our comprehensive liberal arts program designed to develop critical thinking and analytical skills.",
    deadline: "Last Date: March 30, 2024"
  },
  {
    title: "B.Sc. in Data Science and Business Analytics",
    description: "Join our cutting-edge program combining data science with business insights.",
    deadline: "Last Date: April 15, 2024"
  },
  {
    title: "Certificate Courses",
    description: "Enhance your skills with our specialized certificate programs in various disciplines.",
    deadline: "Last Date: Rolling Admissions"
  },
  {
    title: "Ph.D. Programs",
    description: "Advance your academic career with our doctoral programs in various disciplines.",
    deadline: "Last Date: May 1, 2024"
  }
]

const updates = [
  {
    title: "Wilson College shines in India Today and The Week 2023",
    date: "October 12, 2023",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    title: "Financial Derivatives Wealth Management electives in Industry Honour Program",
    date: "August 17, 2021",
    image: "/placeholder.svg?height=80&width=80"
  }
]

const announcementsList = [
  {
    title: "Timetables for the Regular / Re-Exam Examination for PG Semester I (NEP), December 2024",
    date: "November 16, 2024"
  },
  {
    title: "Timetables for the ATKT Examination for PG Semester I (NON-NEP), December 2024",
    date: "November 13, 2024"
  }
]

const events = [
  {
    title: "International Conference on AI Horizons: Navigating Future Frontiers",
    date: "February 2-3, 2024",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    title: "Report on Attainment of Learning Outcomes FDP",
    date: "December 22, 2023",
    image: "/placeholder.svg?height=80&width=80"
  }
]

function ScrollingAnnouncements() {
  const announcements = [
    "Important: Registration deadline extended to July 15th",
    "New course offerings for Fall 2024 now available",
    "Campus tour dates announced for prospective students",
    "Wilson College ranked #1 in liberal arts education",
    "Annual alumni meetup scheduled for August 20th"
  ]
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center overflow-hidden">
      <div className="flex items-center animate-blink">
        <AlertTriangle className="h-5 w-5 mr-2 text-amber-400" />
        <span className="font-bold text-amber-400 mr-4">ALERT</span>
      </div>
      <div className="overflow-hidden flex-1">
        <div
          className="whitespace-nowrap animate-scrolling-text inline-block"
          style={{
            animationDuration: `${announcements[currentIndex].length * 0.15}s`,
          }}
        >
          {announcements[currentIndex]}
        </div>
      </div>
    </div>
  )
}

function AdmissionUpdates() {
  const [scrollPosition, setScrollPosition] = React.useState(0)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth
        setScrollPosition((prev) => {
          const next = prev + 1
          return next > maxScroll ? 0 : next
        })
        containerRef.current.scrollLeft = scrollPosition
      }
    }, 50)

    return () => clearInterval(interval)
  }, [scrollPosition])

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Admission Updates</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-4"></div>
          <p className="text-gray-600">Check out the latest updates about the 2024-25 Admissions Process</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth"
          >
            {admissionCards.map((card, index) => (
              <div
                key={index}
                className="flex-none w-full md:w-[400px]"
              >
                <Card className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-200">{card.description}</p>
                    <p className="text-amber-400 text-sm mb-4">{card.deadline}</p>
                    <Button className="bg-amber-400 text-blue-900 hover:bg-amber-500">
                      Know More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function UpdatesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Updates Column */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center justify-between">
              Updates
              <Link href="#" className="text-sm text-amber-500 hover:text-amber-600 flex items-center">
                See all Updates <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </h2>
            <div className="space-y-6">
              {updates.map((update, index) => (
                <div key={index} className="flex gap-4">
                  <Image
                    src={update.image}
                    alt={update.title}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{update.title}</h3>
                    <p className="text-sm text-gray-500">{update.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Announcements Column */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center justify-between">
              Announcements
              <Link href="#" className="text-sm text-amber-500 hover:text-amber-600 flex items-center">
                See all Announcements <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </h2>
            <div className="space-y-6">
              {announcementsList.map((announcement, index) => (
                <div key={index} className="border-l-4 border-blue-900 pl-4">
                  <h3 className="font-medium text-gray-900 mb-1">{announcement.title}</h3>
                  <p className="text-sm text-gray-500">{announcement.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Events Column */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center justify-between">
              Events
              <Link href="#" className="text-sm text-amber-500 hover:text-amber-600 flex items-center">
                See all Events <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </h2>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="flex gap-4">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Homepage() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const startSlideShow = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      nextSlide()
    }, 5000)
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
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const previousSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5654-nyTeWy3hyNLu2KPBivvJk4KJxfyImI.png"
            alt="Wilson College Logo Background"
            width={500}
            height={500}
            className="opacity-5"
          />
        </div>
      </div>
      {/* Top Info Bar */}
      <div className="bg-blue-900 text-white py-2 text-sm relative z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              022-23663001
            </span>
            <span className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              info@wilsoncollege.edu
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="#" className="hover:text-amber-400 transition-colors duration-300"><Facebook className="h-4 w-4" /></Link>
            <Link href="#" className="hover:text-amber-400 transition-colors duration-300"><Twitter className="h-4 w-4" /></Link>
            <Link href="#" className="hover:text-amber-400 transition-colors duration-300"><Instagram className="h-4 w-4" /></Link>
            <Link href="#" className="hover:text-amber-400 transition-colors duration-300"><Linkedin className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>

      {/* Announcement Bar */}
      {/* <div className="bg-amber-400 text-blue-900 py-2 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center overflow-hidden">
            <Bell className="h-4 w-4 mr-2 flex-shrink-0 text-blue-900" />
            <div className="relative h-6 overflow-hidden">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute w-full transition-transform duration-500 ease-in-out",
                    index === currentAnnouncement ? "translate-y-0" : "translate-y-full"
                  )}
                >
                  {announcement}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Scrolling Announcements */}
      <div className="bg-blue-100 text-blue-900 py-2 overflow-hidden relative z-10">
        <div className="container mx-auto px-4">
          <ScrollingAnnouncements />
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 relative z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5654-nyTeWy3hyNLu2KPBivvJk4KJxfyImI.png"
                alt="Wilson College Logo"
                width={80}
                height={80}
                className="mr-4"
              />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">Wilson College</h1>
                <p className="text-sm text-gray-600">Established 1832</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              {navItems.map((item, index) => (
                <div key={index} className="relative group d:flex">
                  {'href' in item ? (
                    <Link href={item.href} className="py-2 px-3 text-gray-700 hover:bg-blue-900 hover:text-white transition duration-300 rounded-lg">
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button className="py-2 px-3 text-gray-700 hover:bg-blue-900 hover:text-white transition duration-300 flex items-center rounded-lg">
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
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-900 hover:text-white transition-colors duration-300 rounded-lg mx-1"
                              >
                                {subItem.title}
                              </Link>
                            ) : (
                              <div key={subIndex} className="relative group/sub">
                                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-900 hover:text-white transition-colors duration-300 flex items-center justify-between rounded-lg mx-1">
                                  {subItem.title}
                                  <ChevronRight className="h-4 w-4" />
                                </button>
                                <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg hidden group-hover/sub:block">
                                  <div className="py-1">
                                    {subItem.items.map((subSubItem, subSubIndex) => (
                                      <Link
                                        key={subSubIndex}
                                        href={subSubItem.href}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-900 hover:text-white transition-colors duration-300 rounded-lg mx-1"
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
            <Button className="md:hidden bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden mb-8 relative z-10">
        <div className={cn(
          "absolute inset-0 transition-opacity duration-500",
          isAnimating ? "opacity-0" : "opacity-100"
        )}>
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-start container mx-auto px-4">
            <div className="text-white max-w-lg">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Wilson College</h2>
              <p className="text-xl md:text-2xl mb-6">Empowering Minds Since 1832</p>
              <Button className="bg-amber-400 text-blue-900 hover:bg-amber-500 transition-colors duration-300">Learn More</Button>
            </div>
          </div>
        </div>
        <Button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-blue-900 hover:bg-white transition-colors duration-300"
          size="icon"
          onClick={previousSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-blue-900 hover:bg-white transition-colors duration-300"
          size="icon"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </section>

      {/* Admission Updates Section */}
      <AdmissionUpdates />

      {/* Updates, Announcements, and Events Section */}
      <UpdatesSection />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Quick Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="#" className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Book className="h-6 w-6 mr-2 text-blue-600" />
              <span className="text-gray-800">Admissions</span>
            </Link>
            <Link href="#" className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Calendar className="h-6 w-6 mr-2 text-blue-600" />
              <span className="text-gray-800">Academic Calendar</span>
            </Link>
            <Link href="#" className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
              <span className="text-gray-800">Student Portal</span>
            </Link>
            <Link href="#" className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Users className="h-6 w-6 mr-2 text-blue-600" />
              <span className="text-gray-800">Alumni</span>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">About Wilson College</h2>
          <p className="text-gray-700 mb-4">
            Founded in 1832, Wilson College has been a beacon of academic excellence for nearly two centuries. 
            Our institution is committed to fostering intellectual growth, cultural understanding, and personal development in our students.
          </p>
          <p className="text-gray-700 mb-4">
            With a diverse range of programs across arts, science, and commerce, we provide a comprehensive educational experience 
            that prepares our students for the challenges of the modern world while honoring our rich heritage.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300">Learn More</Button>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Why Choose Wilson College</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-semibold text-blue-900">
                  <Award className="h-6 w-6 mr-2 text-amber-500" />
                  Academic Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Consistently ranked among the top colleges in India, offering a wide range of programs.</p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-semibold text-blue-900">
                  <Users className="h-6 w-6 mr-2 text-amber-500" />
                  Diverse Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">A vibrant and inclusive campus life with students from various backgrounds.</p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-semibold text-blue-900">
                  <Globe className="h-6 w-6 mr-2 text-amber-500" />
                  Global Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">International partnerships and exchange programs for a global learning experience.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 relative z-10">
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
                <Link href="#" className="block hover:text-amber-400 transition-colors duration-300">Home</Link>
                <Link href="#" className="block hover:text-amber-400 transition-colors duration-300">About Us</Link>
                <Link href="#" className="block hover:text-amber-400 transition-colors duration-300">Academics</Link>
                <Link href="#" className="block hover:text-amber-400 transition-colors duration-300">Admissions</Link>
                <Link href="#" className="block hover:text-amber-400 transition-colors duration-300">Research</Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <nav className="space-y-2">
                <Link href="#" className="block hover:text-amber-400 transition-colors duration-300">Library</Link>
                <Link href="#" className="block hover:text-amber-400 transition-colors duration-300">Career Services</Link>
                <Link href="#" className="block hover:text-amber-400 transition-colors duration-300">Student Portal</Link>
                <Link href="#" className="block hover:text-amber-400 transition-colors duration-300">Alumni Association</Link>
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
    </div>
  )
}