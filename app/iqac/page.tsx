"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, FileText, Download, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const IQACPage = () => {
    const [expandedItem, setExpandedItem] = useState<string | null>(null)

    const aqarData = {
        "2022-23": [
            { name: "3.1.1 Wilson College Research Policy", url: "https://www.wilsoncollege.edu/IQAC/3.1.1%20AQAR%2022%20-%2023%20Wilson%20College%20Research%20Policy.pdf" },
            { name: "2.7.1 Students Satisfaction Survey", url: "https://www.wilsoncollege.edu/IQAC/2.7.1%20AQAR%2022%20-%2023%20Students%20Satisfaction%20Survey.pdf" },
            { name: "6.2.2 Organogram of Wilson College", url: "https://www.wilsoncollege.edu/IQAC/6.2.2%20AQAR%2022%20-%2023%20Wilson%20College%20Organogram.pdf" },
            { name: "6.5.3 Annual College Report in The Wilsonian 2022-23", url: "https://www.wilsoncollege.edu/IQAC/6.5.3%20Annual%20College%20Report%20in%20The%20Wilsonian%202022-23.pdf" },
            { name: "7.2.1 Best practices", url: "https://www.wilsoncollege.edu/IQAC/7.2.1%20AQAR%202022%20-%2023%20Best%20practices.pdf" },
            { name: "7.3.1 Institutional distinctiveness", url: "https://www.wilsoncollege.edu/IQAC/7.3.1%20AQAR%202022%20-%2023%20%20Institutional%20distinctiveness.pdf" },
            { name: "6.2.1 Strategic and Perspective Plan", url: "https://www.wilsoncollege.edu/IQAC/6.2.1%20AQAR%2022%20-%2023%20Strategic%20and%20Perspective%20Plan..pdf" },
            { name: "A-14 AISHE", url: "https://www.wilsoncollege.edu/IQAC/A-14%20AQAR%202022%20-%2023%20AISHE.pdf" },
            { name: "A-9 IQAC Meetings Minutes and ATR", url: "https://www.wilsoncollege.edu/IQAC/A-9%20AQAR%202022%20-%2023%20IQAC%20Meetings%20Minutes%20and%20ATR.pdf" },
            { name: "A-8 IQAC Composition", url: "https://www.wilsoncollege.edu/IQAC/A-%208%20AQAR%202022%20-%2023%20IQAC%20Composition%202022-23.pdf" },
            { name: "A-4 Academic Calendar", url: "https://www.wilsoncollege.edu/IQAC/A-4%20AQAR%202022%20-%2023%20Academic%20Calendar%202022%20-%2023.pdf" },
        ],
        "2021-22": [
            { name: "AQAR 2021 - 22", url: "https://www.wilsoncollege.edu/IQAC/AQAR%202021%20-%2022.pdf" },
            { name: "Code of conduct for Non teaching", url: "https://www.wilsoncollege.edu/IQAC/Code%20of%20conduct%20for%20Non%20teaching%20.pdf" },
            { name: "Code of conduct for students", url: "https://www.wilsoncollege.edu/IQAC/Code%20of%20conduct%20for%20students%20.pdf" },
            { name: "Code of Conduct for teachers", url: "https://www.wilsoncollege.edu/IQAC/Code%20of%20Conduct%20for%20teachers.pdf" },
            { name: "Research Ethics", url: "https://www.wilsoncollege.edu/IQAC/Research%20Ethics.pdf" },
            { name: "3.1.1 Wilson College Research Policy", url: "https://www.wilsoncollege.edu/IQAC/3.1.1%20Wilson%20College%20Research%20Policy.pdf" },
            { name: "2.7.1 Students Satisfaction Survey", url: "https://www.wilsoncollege.edu/IQAC/2.7.1%20Students%20Satisfaction%20Survey.pdf" },
            { name: "6.2.2 Organogram of Wilson College", url: "https://www.wilsoncollege.edu/IQAC/6.2.2%20Organogram%20of%20Wilson%20College.pdf" },
            { name: "7.2.1 Best practices", url: "https://www.wilsoncollege.edu/IQAC/7.2.1%20Best%20practices.pdf" },
            { name: "7.3.1 Institutional distinctiveness", url: "https://www.wilsoncollege.edu/IQAC/7.3.1%20Institutional%20distinctiveness.pdf" },
            { name: "A-14 AISHE", url: "https://www.wilsoncollege.edu/IQAC/A-14%20AISHE.pdf" },
            { name: "A-3 AQAR 2020 - 2021", url: "https://www.wilsoncollege.edu/IQAC/A-3%20AQAR%202020%20-%202021.pdf" },
            { name: "A-9 IQAC Meetings Minutes and ATR", url: "https://www.wilsoncollege.edu/IQAC/A-9%20IQAC%20Meetings%20Minutes%20and%20ATR.pdf" },
            { name: "A-8 IQAC Composition", url: "https://www.wilsoncollege.edu/IQAC/A-8%20IQAC%20Composition.pdf" },
            { name: "A-4 Academic Calendar", url: "https://www.wilsoncollege.edu/IQAC/A-4%20Academic%20Calendar.pdf" },
        ],
        "2020-21": [
            { name: "3.1.3.1 Report of the workshops on Research Methodology, IPR and entrepreneurship", url: "https://www.wilsoncollege.edu/IQAC/3.1.3.1%20Report%20of%20the%20workshops%20on%20Research%20Methodology,%20Intellectual%20Property%20Rights%20(IPR)%20and%20entrepreneurship.pdf" },
            { name: "2.7.1 Wilson College Student Satisfaction Survey 2020-21", url: "https://www.wilsoncollege.edu/IQAC/2.7.1%20Wilson%20College%20Student%20Satisfaction%20Survey%202020-21.pdf" },
            { name: "6.5.3 WILSONIAN 20-21", url: "https://www.wilsoncollege.edu/IQAC/6.5.3%20WILSONIAN%2020-21.pdf" },
            { name: "7.3.1 Institutional Distinctiveness", url: "https://www.wilsoncollege.edu/IQAC/7.3.1%20Institutional%20Distinctivness.pdf" },
            { name: "AISHE Certificate of 2020-2021", url: "https://www.wilsoncollege.edu/IQAC/AISHE%20Certficate%20of%202020-2021.pdf" },
            { name: "Part A No. 3. AQAR 2019 - 2020", url: "https://www.wilsoncollege.edu/IQAC/Part%20A%20No.%203.%20AQAR%202019%20-%202020.pdf" },
            { name: "Part A No. 4 Academic Calendar 2020 - 2021", url: "https://www.wilsoncollege.edu/IQAC/Part%20A%20No.%204%20Academic%20Calendar%202020%20-%202021.pdf" },
        ],
        "2019-20": [
            { name: "2.6.1 CO, PO, PSO 2019-20", url: "https://www.wilsoncollege.edu/IQAC/2.6.1CO,PO,PSO2019-20.PDF" },
            { name: "2.7.1 Student Satisfaction Survey (SSS) 2019-20", url: "https://www.wilsoncollege.edu/IQAC/2.7.1StudentSatisfactionSurvey(SSS)2019-20.pdf" },
            { name: "4.4.2 Procedures and policies for maintaining and utilizing facilities 2019-20", url: "https://www.wilsoncollege.edu/IQAC/4.4.2Proceduresandpoliciesformaintainingandutilizingphysicalacademicandsupportfacilities2019-20.pdf" },
            { name: "7.3.1 Institutional Distinctiveness 2019-20", url: "https://www.wilsoncollege.edu/IQAC/7.3.1Institutional%20Distinctiveness2019-20.pdf" },
            { name: "7.2.1 Best Practices", url: "https://www.wilsoncollege.edu/IQAC/7.2.1BestPractices.pdf" },
            { name: "Part A No. 3. AQAR 2018 - 2019", url: "https://www.wilsoncollege.edu/IQAC/AQARReport2018-2019.pdf" },
            { name: "Academic Calendar 2019-2020", url: "https://www.wilsoncollege.edu/IQAC/AcademicCalendar2019-2020.pdf" },
        ],
        "2018-19": [
            { name: "Student Satisfaction Survey Results", url: "https://www.wilsoncollege.edu/IQAC/Student%20Satisfaction%20Survey%20Results.pdf" },
            { name: "Procedures and policies for maintenance on website", url: "https://www.wilsoncollege.edu/IQAC/Procedures%20and%20policies%20for%20maintenance%20on%20website.pdf" },
            { name: "Distinctiveness of the Institution", url: "https://www.wilsoncollege.edu/IQAC/Distinctiveness%20of%20the%20Institution.pdf" },
            { name: "Course Outcomes", url: "https://www.wilsoncollege.edu/IQAC/Course%20Outcomes.pdf" },
            { name: "BEST PRACTICES OF THE INSTITUTION", url: "https://www.wilsoncollege.edu/IQAC/BEST%20PRACTICES%20OF%20THE%20INSTITUTION.pdf" },
            { name: "AQAR (17-18) filled format 26.11.2018", url: "https://www.wilsoncollege.edu/IQAC/AQAR%20(17-18)%20filled%20format%20%2026.11.2018.pdf" },
            { name: "Academic Calendar (Updated on 4.01.2020)", url: "https://www.wilsoncollege.edu/IQAC/Academic%20Calendar%20(Updated%20on%204.01.2020).pdf" },
        ],
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="container mx-auto px-4 space-y-12">
                    <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Internal Quality Assurance Cell (IQAC)</h1>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
                            <CardHeader>
                                <CardTitle className="text-xl">About IQAC</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <p className="mb-4">IQAC was established on 20.6.2004</p>
                                <p>{`Completed three NAAC cycles and accredited successively with 'A' grade`}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="bg-blue-900 text-white">
                                <CardTitle className="text-xl">Vision</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <p>To develop an inclusive, dynamic quality system that ensures excellence in curricular, exam-curricular and overall development of the college ecosystem to be an institution of global repute.</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader className="bg-indigo-900 text-white">
                            <CardTitle className="text-xl">Aims and Objectives</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <ul className="list-disc pl-8 space-y-3">
                                <li>To set and supervise the quality parameters of the college periodically by creating vibrant and enriching learning environment at par with global standards.</li>
                                <li>To promote the all-round academic and administrative development of the institute by providing opportunities and encouraging the teaching and non-teaching staff to undertake self-apprising activities regularly.</li>
                                <li>To regularly assess the progress of the college through internal and external audit systems.</li>
                                <li>To promote the use of ICT tools for teaching learning process and instill value-based education system.</li>
                                <li>To work towards building and establishing Wilson College as an autonomous institution.</li>
                                <li>To build up an association with all stakeholders and to promote social responsibility.</li>
                                <li>To produce high caliber graduates with contemporary sensibilities possessing compassion, moral and social values.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="bg-blue-900 text-white">
                            <CardTitle className="text-xl">Policies</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <ul className="list-disc pl-8 space-y-3">
                                <li>Conduct periodic academic and administrative audits to check quality maintenance and promotion.</li>
                                <li>Preparation and Submission of Annual Quality Assurance Report (AQAR) and SSR as per guidelines and parameters of NAAC.</li>
                                <li>Collection and analysis of feedback from all stakeholders on quality-related institutional processes.</li>
                                <li>Preparation and submission of documents to various government bodies with respect to college ranking.</li>
                                <li>Documentation of various programmes and activities held in the college leading to an efficient data management system.</li>
                                <li>Supporting and mentoring inter-disciplinary workshops, FDP, seminars, conferences and training programs on quality themes to enrich innovative teaching learning process and promote research culture in Wilson College.</li>
                                <li>Assisting in creation of a learner-centric environment conducive to quality education and faculty development to gain the required knowledge and expertise for participatory teaching and learning processes to enhance global competencies.</li>
                                <li>Act as a nodal agency of the institution and to recommend to the management about the requirements leading to improve the academics and administration of the college.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="bg-indigo-900 text-white">
                            <CardTitle className="text-xl">Activities</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <ul className="list-disc pl-8 space-y-3">
                                <li>Under Faculty Development Programme, a workshop on FLIPPED CLASSROOM was organised in the IT lab for degree college teachers on 27th October, 2018.</li>
                                <li>{`On 27th November, 2018, P. Sekhar, Chairman at Micro Tech Global foundation for National Growth was invited to speak on 'Academia and Industry Networking and Interaction'.`}</li>
                                <li>Organised Self-defence workshop for students and staff on Tuesdays and Wednesdays from 9th January, 2019.</li>
                                <li>{`Organised a 'Youth for Green Fest' as an ISR activity on 14th and 15th February, 2019. It consisted of Competitions, Workshops and sessions and Model United Nations by Wilson College Rotaract Club.`}</li>
                                <li>{`>A session on 'Leadership in Cross Cultural Context' by Prof. Olaf Zylics, University of Warsaw, was organised in collaboration with Political science Association on 26th February, 2019 for Third Year students of all faculties.`}</li>
                                <li>Certificate Course conducted by various departments: Local Diversity, Research methodology in Social Sciences, Disability Studies, Local Culture, Paramedical Course, Indian Script and Numismatics, Astronomy, Saral Hindi.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="bg-blue-900 text-white">
                            <CardTitle className="text-xl">NAAC Information</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 flex flex-col space-y-4">
                            {/* <h3 className="text-lg font-semibold text-blue-900">Important Documents</h3> */}
                            <div className="flex flex-wrap gap-4">
                                <Button asChild className="bg-amber-400 text-blue-900 hover:bg-amber-500">
                                    <Link href="https://www.wilsoncollege.edu/Pdf_New/NAAC%20certificate%20(14.03.2022).pdf" target="_blank">
                                        <FileText className="mr-2 h-4 w-4" /> NAAC Certificate
                                    </Link>
                                </Button>
                                <Button asChild className="bg-amber-400 text-blue-900 hover:bg-amber-500">
                                    <Link href="https://www.wilsoncollege.edu/Pdf_New/NAAC%20Report.pdf" target="_blank">
                                        <BookOpen className="mr-2 h-4 w-4" /> NAAC Report
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="bg-indigo-900 text-white">
                            <CardTitle className="text-xl">AQAR Reports</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <Tabs defaultValue="2022-23" className="w-full">
                                <TabsList className="bg-blue-900 text-white mb-4 flex flex-wrap">
                                    {Object.keys(aqarData).map((year) => (
                                        <TabsTrigger key={year} value={year} className="data-[state=active]:bg-amber-400 data-[state=active]:text-blue-900 flex-grow">
                                            {year}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                                {Object.entries(aqarData).map(([year, pdfs]) => (
                                    <TabsContent key={year} value={year} className="mt-0">
                                        <ScrollArea className="h-[600px] w-full rounded-md border p-4">
                                            {pdfs.map((pdf, index) => (
                                                <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow">
                                                    <div
                                                        className="flex justify-between items-center cursor-pointer"
                                                        onClick={() => setExpandedItem(expandedItem === pdf.name ? null : pdf.name)}
                                                    >
                                                        <h3 className="font-medium text-blue-900">{pdf.name}</h3>
                                                        {expandedItem === pdf.name ? <ChevronUp className="h-5 w-5 text-blue-900" /> : <ChevronDown className="h-5 w-5 text-blue-900" />}
                                                    </div>
                                                    {expandedItem === pdf.name && (
                                                        <div className="mt-4 space-y-4">
                                                            <p className="text-sm text-gray-600">This document contains important information related to the Annual Quality Assurance Report (AQAR) for the academic year {year}.</p>
                                                            <div className="flex justify-between items-center">
                                                                <Button asChild className="bg-blue-900 hover:bg-blue-800">
                                                                    <Link href={pdf.url} target="_blank">
                                                                        <FileText className="mr-2 h-4 w-4" /> View PDF
                                                                    </Link>
                                                                </Button>
                                                                <Button asChild variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
                                                                    <Link href={pdf.url} download>
                                                                        <Download className="mr-2 h-4 w-4" /> Download
                                                                    </Link>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </ScrollArea>
                                    </TabsContent>
                                ))}
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default IQACPage