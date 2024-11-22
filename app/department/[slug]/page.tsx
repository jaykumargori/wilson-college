import { DepartmentContent } from "./department-content"
import type { DepartmentData } from "./department-content"

// This would typically come from your CMS or API
async function getDepartmentData(slug: string): Promise<DepartmentData> {
  // Simulate an async operation
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return {
    name: `Department of ${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
    details: `This is the ${slug} department. We offer comprehensive and thought-provoking syllabi, integrating foundational papers with optional and applied papers.`,
    faculty: [
      {
        name: "Dr. John Doe",
        role: `Assistant Professor & Head, Department of ${slug}`,
        image: "/placeholder.svg?height=150&width=150",
        qualifications: "Ph.D. in relevant field",
        research: "Specialization areas",
        bio: "Brief biography",
        experience: "Teaching Career: 20XX"
      },
    ],
    activities: [
      {
        title: "Workshop",
        date: "October 15, 2023",
        image: "/placeholder.svg?height=100&width=200"
      },
    ],
    events: [
      {
        title: "Annual Symposium",
        date: "January 20, 2024",
        image: "/placeholder.svg?height=100&width=200"
      },
    ],
    syllabusUrl: "https://example.com/syllabus.pdf"
  }
}

interface PageProps {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function DepartmentPage({ params }: PageProps) {
  const resolvedParams = await params;
  const departmentData = await getDepartmentData(resolvedParams.slug[0]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">{departmentData.name}</h1>
          <p className="text-xl text-blue-100">Fostering Excellence in {resolvedParams.slug[0]}</p>
        </div>
      </header>

      <DepartmentContent departmentData={departmentData} />
    </div>
  )
}