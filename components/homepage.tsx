"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Users, Award, Globe, AlertTriangle, ArrowRight, Quote } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Footer } from "./footer"
import { Navbar } from "./navbar"

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
      {/* <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5654-nyTeWy3hyNLu2KPBivvJk4KJxfyImI.png"
            alt="Wilson College Logo Background"
            width={500}
            height={500}
            className="opacity-5"
          />
        </div>
      </div> */}
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

      {/* Scrolling Announcements */}
      <div className="bg-blue-100 text-blue-900 py-2 overflow-hidden relative z-10">
        <div className="container mx-auto px-4">
          <ScrollingAnnouncements />
        </div>
      </div>

      {/* Header */}
      <Navbar />

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

      {/* Principal's Message */}

      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 text-white">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-blue-900 to-indigo-900 border-none shadow-xl">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0">
                  <div className="w-28 h-28 md:w-32 md:h-32 relative rounded-full border-4 border-amber-400 overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wilson%20college%20principal.jpg-HhWTdiqT6wGhbXDrh8AMNDLlTxg23q.jpeg"
                      alt="Principal of Wilson College"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-white mb-4">
                    <h2 className="text-2xl font-bold mb-1">{`From the Principal's Desk`}</h2>
                    <div>
                      <span className="text-amber-400 font-semibold">Dr. Jamson Masih</span>
                      <span className="text-blue-200 text-sm ml-2">Principal, Wilson College</span>
                    </div>
                  </div>
                  <div className="relative text-white/90 italic text-lg mb-6 px-6">
                    <Quote className="h-6 w-6 text-amber-400/60 absolute top-0 left-0 transform rotate-180" />
                    <p>
                       Welcome to Wilson College, where tradition meets innovation. Our institution stands as a beacon of
                      academic excellence, fostering an environment where students are empowered to discover their potential
                      and shape their future. We believe in nurturing not just academic growth, but holistic development
                      that prepares our students for the challenges of tomorrow.
                    </p>
                    <Quote className="h-6 w-6 text-amber-400/60 absolute bottom-0 right-0" />
                  </div>
                  <div className="text-right">
                    <Button
                      asChild
                      variant="secondary"
                      className="bg-amber-500 hover:bg-amber-600 text-blue-900 border-none"
                    >
                      <Link href="/principals-message">
                        Read Full Message <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

      </section>

      {/* Updates, Announcements, and Events Section */}
      <UpdatesSection />

      {/* Admission Updates Section */}
      <AdmissionUpdates />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">

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
      <Footer />
    </div>
  )
}