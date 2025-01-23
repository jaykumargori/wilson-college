import { fetchDepartments } from "@/queries/academics/academics";
import { DepartmentContent } from "./department-content"
import type { DepartmentData } from "./department-content"
import { client } from "@/lib/sanity";

// This would typically come from your CMS or API
async function getDepartmentData(slug: string): Promise<DepartmentData> {
  const department = await client.fetch(fetchDepartments, { slug })
  return department
}

export async function generateStaticParams() {
  // In a real-world scenario, this would fetch all department slugs from your data source
  const departments = ['physics', 'chemistry', 'biology', 'mathematics','english'];
  
  return departments.map(slug => ({
    slug: slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function DepartmentPage({ params }: PageProps) {
  const { slug } = await params;
  const departmentData = await getDepartmentData(slug.toString());

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">{departmentData.name}</h1>
          <p className="text-xl text-blue-100">Fostering Excellence in {slug[0]}</p>
        </div>
      </header>

      <DepartmentContent departmentData={departmentData} />
    </div>
  )
}