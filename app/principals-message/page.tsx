"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, Globe, Medal, FlaskConical, Users, ExternalLink } from 'lucide-react'
import WorldMap from 'react-svg-worldmap'
import { motion, AnimatePresence } from 'framer-motion'
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const timelineEvents = [
    { year: 2023, event: "University of Calabria, Rende (Cosenza), Italy", icon: BookOpen, country: "IT", coordinates: [39.3566, 16.2266] },
    { year: 2022, event: "Urban Transitions Conference, Sitges, Barcelona, Spain", icon: Globe, country: "ES", coordinates: [41.2372, 1.8059] },
    { year: 2019, event: "Orebro University, Sweden", icon: BookOpen, country: "SE", coordinates: [59.2753, 15.2134] },
    { year: 2016, event: "Air & Waste Management Association annual Conference, Wyoming USA", icon: Globe, country: "US", coordinates: [43.0760, -107.2903] },
    { year: 2013, event: "International Society for Environmental Epidemiology Conference, Basel, Switzerland", icon: Globe, country: "CH", coordinates: [47.5596, 7.5886] },
    { year: 2012, event: "Healthy Buildings 2012 conference, Queensland University of Technology, Australia", icon: BookOpen, country: "AU", coordinates: [-27.4698, 153.0251] },
    { year: 2010, event: "Visited United State Environmental Protection Agency (EPA) New Jersey USA", icon: Globe, country: "US", coordinates: [40.7128, -74.0060] },
    { year: 2010, event: "AAAR 2010 Specialty Conference, San Diego, California USA", icon: Globe, country: "US", coordinates: [32.7157, -117.1611] },
]

const countryData = timelineEvents.map(event => ({
    country: event.country,
    value: 1
}))

function EnhancedInternationalExperience() {
    const [hoveredEvent, setHoveredEvent] = React.useState<typeof timelineEvents[0] | null>(null)

    return (
        <Card className="col-span-full overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                <CardTitle className="flex items-center text-2xl">
                    <Globe className="w-8 h-8 mr-3 text-amber-400" />
                    International Research Experience
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-[50%] relative overflow-hidden">
                        <WorldMap
                            color="rgb(79, 70, 229)"
                            valueSuffix="visits"
                            size="responsive"
                            data={countryData}
                        />
                        <AnimatePresence>
                            {hoveredEvent && (
                                <motion.div
                                    key={hoveredEvent.event}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute bg-white rounded-lg shadow-lg p-2 z-10 text-xs max-w-[200px]"
                                    style={{
                                        left: `${Math.min(Math.max(hoveredEvent.coordinates[1] / 3.6 + 50, 10), 90)}%`,
                                        top: `${Math.min(Math.max(-hoveredEvent.coordinates[0] / 1.8 + 50, 10), 90)}%`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <h3 className="font-semibold text-blue-900 break-words">{hoveredEvent.event}</h3>
                                    <p className="text-gray-600">{hoveredEvent.year}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="lg:w-[50%] space-y-2 max-h-[100%] overflow-y-auto pr-2">
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-sm p-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                                onMouseEnter={() => setHoveredEvent(event)}
                                onMouseLeave={() => setHoveredEvent(null)}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <event.icon className="w-4 h-4 mr-2 text-indigo-600" />
                                        <h3 className="text-sm font-medium text-gray-900">{event.event}</h3>
                                    </div>
                                    <span className="text-xs text-gray-500">{event.year}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default function PrincipalsMessage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
                        <div className="w-48 h-48 md:w-64 md:h-64 relative">
                            <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wilson%20college%20principal.jpg-WmiyZK3kREWsST0JT4TwW3wddu09cT.jpeg"
                                alt="Dr. Jamson Masih"
                                fill
                                className="object-cover rounded-full border-4 border-amber-400 shadow-lg"
                            />
                        </div>
                        <div className="md:flex-1 text-center md:text-left">
                            <h1 className="text-4xl font-bold mb-3">Dr. Jamson Masih</h1>
                            <p className="text-xl text-amber-400 mb-2">I/C Principal & Associate Professor (Chemistry)</p>
                            <p className="text-lg text-blue-200 mb-4">M.Sc Ph.D, FICS, FICC</p>
                            <p className="text-base text-white/90 italic border-l-4 border-amber-400 pl-4">
                                {`Dr Jamson is widely known in the educational circle and is on the Bombay YMCA Committee.
                                His goal is to see that the vision of Wilson College is fulfilled in each area of student
                                and staff development and his dedication for quality education has its focus in enriching
                                the community.`}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-16">
                        {/* Biography */}
                        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-lg p-8">
                            <h2 className="text-3xl font-bold mb-6 flex items-center">
                                <BookOpen className="w-8 h-8 mr-3 text-amber-400" />
                                Biography
                            </h2>
                            <div className="space-y-4">
                                <p className="text-lg leading-relaxed">
                                    Dr. Jamson Masih has established himself as a prominent figure in the field of Chemistry,
                                    with a particular focus on Indoor/Outdoor air Pollution. His doctoral research, conducted
                                    at St. Johns College, Agra, India, in collaboration with the USEPA, New Jersey, USA,
                                    has set the foundation for his illustrious career in environmental and analytical chemistry.
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Awardee of Dr. D.S. Kothari PDF for the year 2010, at the SES, JNU New Delhi</li>
                                    <li>{`CSIR Research Associate 2009 at St. John's College, Agra`}</li>
                                    <li>{`JRF & SRF, Department of Science and Technology (2007-2009) at St. John's College, Agra`}</li>
                                    <li>Young scientist award of the (SBBS) in the year 2021 for scientific contribution in the field of Environmental Research</li>
                                </ul>
                            </div>
                        </div>

                        {/* Research Projects and Professional Memberships */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Research Projects */}
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-2xl font-bold mb-6 flex items-center text-blue-900">
                                    <FlaskConical className="w-6 h-6 mr-2 text-blue-900" />
                                    Research Projects
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Completed Projects</h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>UGC Major Research Project on Polycyclic aromatic hydrocarbons (Rs. 15,15,000/-)</li>
                                            <li>UGC Major Research Project on Nano-particles distribution (Rs. 15,00,000/-)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Ongoing Collaborations</h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Research on Halo-PAHs with Meijo University, Japan</li>
                                            <li>Nano materials research with Dayalbagh Educational Institute</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Professional Memberships */}
                            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-lg p-8">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <Users className="w-6 h-6 mr-2 text-amber-400" />
                                    Professional Memberships
                                </h2>
                                <ul className="space-y-2">
                                    <li>● Life Member of Indian Chemical Society (ICS), India</li>
                                    <li>● Life Member of Indian Council of Chemists (ICC), India</li>
                                    <li>● Member of International Society of Indoor Air Quality and Climate (IAQC), USA</li>
                                    <li>● Life Member of Indian Association of Environ. & Analyt. Chem. (IAEAC), BARC</li>
                                    <li>● Life Member of Indian Association of Chemistry Teachers (IACT), Mumbai</li>
                                    <li>● Life Member of Society of Bioinformatics and Biological Sciences (SBBS)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Enhanced International Experience */}
                        <EnhancedInternationalExperience />

                        {/* Awards and Achievements */}
                        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-lg p-8">
                            <h2 className="text-3xl font-bold mb-6 flex items-center">
                                <Medal className="w-8 h-8 mr-3 text-amber-400" />
                                Awards and Achievements
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    "International Travel grant SERB, New Delhi 2022",
                                    "INDO US Travel Grant. (USD 500) 2019",
                                    "ICMR International Travel Grant, New Delhi, 2018",
                                    "CSIR Travel Grant 2018",
                                    "East‐West Center Honolulu, HI USA (USD 445) 2017",
                                    "International Travel grant DST, New Delhi 2016",
                                    "Young scientist award (SBBS) 2021",
                                    "Best Thesis Award - Association of Environmental and Analytical Chemistry"
                                ].map((award, index) => (
                                    <div key={index} className="flex items-start">
                                        <Award className="w-5 h-5 mr-2 text-amber-400 flex-shrink-0 mt-1" />
                                        <p>{award}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Publications */}
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-3xl font-bold mb-6 flex items-center text-blue-900">
                                <BookOpen className="w-8 h-8 mr-3 text-blue-900" />
                                Publications and Citations
                            </h2>
                            <div className="space-y-4">
                                <p>{`Dr. Jamson Masih has an extensive publication history in the field of Environmental and Analytical Chemistry. His work has been cited numerous times, contributing significantly to the scientific community's understanding of air pollution and its effects.`}</p>
                                <div className="flex flex-col space-y-2">
                                    <Link
                                        href="https://scholar.google.co.in/citations?user=FE1IBDwAAAAJ&hl=en"
                                        target="_blank"
                                        className="text-blue-600 hover:underline flex items-center"
                                    >
                                        Google Scholar Profile <ExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                    <Link
                                        href="https://www.scopus.com/authid/detail.uri?authorId=26323720000"
                                        target="_blank"
                                        className="text-blue-600 hover:underline flex items-center"
                                    >
                                        Scopus Profile <ExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}