"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const NIRFPage = () => {
    const nirfData = [
        { year: "2024", url: "https://www.wilsoncollege.edu/NIRF/WilsonCollegeChowpattyNIRF2024.pdf" },
        { year: "2023", url: "https://www.wilsoncollege.edu/NIRF/NIRF-2023.pdf" },
        { year: "2022", url: "https://www.wilsoncollege.edu/NIRF/WilsonCollegeChowpattyMumbai2022.pdf" },
    ]

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4 space-y-12">
                    <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">National Institutional Ranking Framework (NIRF)</h1>

                    <Card>
                        <CardHeader className="bg-blue-900 text-white">
                            <CardTitle className="text-xl">About NIRF</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="mb-4">
                                The National Institutional Ranking Framework (NIRF) was approved by the MHRD and launched by Honourable Minister of Human Resource Development on 29th September 2015. This framework outlines a methodology to rank institutions across the country.
                            </p>
                            <p className="mb-4">
                                The methodology draws from the overall recommendations broad understanding arrived at by a Core Committee set up by MHRD, to identify the broad parameters for ranking various universities and institutions. The parameters broadly cover "Teaching, Learning and Resources," "Research and Professional Practices," "Graduation Outcomes," "Outreach and Inclusivity," and "Perception".
                            </p>
                            <p>
                                India Rankings – 2016 based on this framework were released on 4th April 2016.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="bg-indigo-900 text-white">
                            <CardTitle className="text-xl">NIRF Rankings</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="flex flex-wrap justify-center gap-6">
                                {nirfData.map((ranking, index) => (
                                    <Button
                                        key={index}
                                        asChild
                                        className="bg-amber-400 text-blue-900 hover:bg-amber-500"
                                    >
                                        <Link href={ranking.url} target="_blank" rel="noopener noreferrer">
                                            <FileText className="mr-2 h-4 w-4" /> NIRF Ranking {ranking.year}
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NIRFPage