'use client'

import * as React from "react"
import Image from "next/image"
import { ChevronRight } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FacultyMember {
  name: string
  role: string
  image: string
  qualifications: string
  research: string
  bio: string
  experience?: string
}

interface Activity {
  title: string
  date: string
  image: string
}

interface Event {
  title: string
  date: string
  image: string
}

export interface DepartmentData {
  name: string
  details: string
  faculty: FacultyMember[]
  activities: Activity[]
  events: Event[]
  syllabusUrl: string
}

interface DepartmentContentProps {
  departmentData: DepartmentData
}

export function DepartmentContent({ departmentData }: DepartmentContentProps) {
  const [activeSection, setActiveSection] = React.useState("details")

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar Navigation */}
      <aside className="md:w-1/4">
        <nav className="bg-white shadow-md rounded-lg overflow-hidden">
          <ul>
            {["Details", "Faculty", "Activities", "Events", "Syllabus"].map((item) => (
              <li key={item.toLowerCase()}>
                <button
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`w-full text-left px-6 py-3 transition-colors duration-200 flex items-center justify-between ${
                    activeSection === item.toLowerCase()
                      ? "bg-blue-900 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item}
                  <ChevronRight className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="md:w-3/4">
        <Card className="bg-white shadow-lg border-t-4 border-blue-900">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-900">
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {activeSection === "details" && (
              <div className="prose prose-blue max-w-none">
                <p className="mb-4 text-gray-700">{departmentData.details}</p>
              </div>
            )}

            {activeSection === "faculty" && (
              <div className="grid gap-8">
                {departmentData.faculty.map((member) => (
                  <div key={member.name} className="flex flex-col md:flex-row gap-4 border-b border-gray-200 pb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                      <p className="text-gray-600 mb-2">{member.role}</p>
                      <p className="mb-2"><strong>Qualifications:</strong> {member.qualifications}</p>
                      <p className="mb-2"><strong>Research Interests:</strong> {member.research}</p>
                      <p className="mb-2"><strong>Biography:</strong> {member.bio}</p>
                      {member.experience && (
                        <p><strong>Experience:</strong> {member.experience}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === "activities" && (
              <div className="grid gap-6">
                {departmentData.activities.map((activity) => (
                  <div key={activity.title} className="flex items-center gap-4 border-b border-gray-200 pb-4">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      width={100}
                      height={100}
                      className="rounded"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">{activity.title}</h3>
                      <p className="text-gray-600">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === "events" && (
              <div className="grid gap-6">
                {departmentData.events.map((event) => (
                  <div key={event.title} className="flex items-center gap-4 border-b border-gray-200 pb-4">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={100}
                      height={100}
                      className="rounded"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">{event.title}</h3>
                      <p className="text-gray-600">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === "syllabus" && (
              <div>
                <p className="mb-4 text-gray-700">View and download the current syllabus for the {departmentData.name}:</p>
                <div className="aspect-[16/9] w-full bg-gray-100 rounded-lg">
                  <iframe
                    src={departmentData.syllabusUrl}
                    className="w-full h-full rounded-lg"
                    title="Syllabus PDF Viewer"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}