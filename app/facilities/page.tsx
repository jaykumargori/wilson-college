import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coffee, Book, Home, Users, Computer, Microscope } from "lucide-react";
import Image from "next/image";

const facilities = [
  {
    id: "vision-center",
    title: "St. Andrew's Vision Center",
    icon: <Computer className="h-6 w-6" />,
    content: {
      description:
        "Wilson College has a successful vision Centre, Andrews Vision Centre (AVC) established in 2008. It's an initiative of former residents of St. Andrews House, its warden and former in charge principal Dr. Sam Skariah whose aim was to empower visually challenged students.",
      details: [
        "The Centre has successfully provided support to over 120 visually challenged students since its inception.",
        "Currently supports 31 visually challenged students of Wilson College and 1 from Kirti College, Dadar.",
        "Additionally supporting 4 students with Learning Disability, 1 Locomotor Disability, 1 Autism, 1 Mental Disability.",
      ],
      activities: [
        {
          title: "User Friendly Support",
          description:
            "Equipped with different assistive technologies, 5 internet enabled terminals with navigation, reading, magnification, and conversion software.",
        },
        {
          title: "Volunteer Support",
          description:
            "Strong committed volunteer group providing assistance as readers, scribes, friends and mentors.",
        },
        {
          title: "Financial Support",
          description:
            "Provides support for education and accommodation facilities, helps facilitate scholarships from HELP THE BLIND FOUNDATION.",
        },
        {
          title: "Third Eye Programme",
          description:
            "A unique festival to spread awareness about talents and challenges of visually challenged people, hosted since 2011.",
        },
      ],
      committee: {
        convenor: "Dr. Biraj Mehta Rathi",
        coordinator: "Ms. Michelle Furtado",
      },
    },
  },
  {
    id: "library",
    title: "Library",
    icon: <Book className="h-6 w-6" />,
    content: {
      description:
        "The Wilson College Library, established in 1832, houses an impressive collection of books and journals dating back to the 18th century.",
      features: [
        "Spacious reading area",
        "N-LIST membership for E-resources access",
        "First E-Magazine subscription to 'The Economist'",
        "SLIM 21 software for Library Information Management",
        "Parasika Project association",
        "Collection of 'The Wilsonian' magazine (1908-present)",
        "Operating hours: 7:30 a.m. to 6:00 p.m.",
      ],
    },
  },
  {
    id: "canteen",
    title: "Canteen",
    icon: <Coffee className="h-6 w-6" />,
    content: {
      description:
        "Refurbished in 2017, our canteen provides wholesome & nutritious food in an atmosphere of camaraderie.",
      details: {
        timings: "6:45 a.m. to 5:30 p.m.",
        objectives: [
          "Provide wholesome & nutritious food",
          "Make food items economically viable",
          "Reduce health-risk factors",
        ],
      },
    },
  },
  {
    id: "dst-fist",
    title: "DST – FIST Facility",
    icon: <Microscope className="h-6 w-6" />,
    content: {
      sections: [
        {
          title: "Teaching Equipment",
          items: [
            "ELISA Reader (Thermo Make)",
            "Laminar Air Flow & Biosafety Cabinet",
            "Microscopes with oil immersion lens",
            "Digital Weighing balances",
            "Electrophoresis Units",
          ],
        },
        {
          title: "Research Equipment",
          items: [
            "AAS (Agilent Model 55B)",
            "Quaternary HPLC",
            "Air Sampler",
            "Centralised Instrument Laboratory",
          ],
        },
      ],
    },
  },
  {
    id: "mackichan-hall",
    title: "Mackichan Hall (Boys Hostel)",
    icon: <Home className="h-6 w-6" />,
    content: {
      contact: "022 2364 9468",
      staff: {
        warden: "Dr. Ashish Uzgare",
        assistantWarden: "Dr. Jamson Masih",
      },
    },
  },
  {
    id: "gymkhana",
    title: "Wilson College Gymkhana",
    icon: <Users className="h-6 w-6" />,
    content: {
      history:
        "Inaugurated on 17th March, 1910 by Sir John Muir-Mckenzie, with a pavilion added in 1916.",
      sports: [
        "Chess",
        "Table Tennis",
        "Carrom",
        "Badminton",
        "Cricket",
        "Boxing",
        "Box-Cricket",
        "Rink Football",
        "Basketball",
        "Volleyball",
        "Throwball",
      ],
    },
  },
  {
    id: "girls-hostel",
    title: "Pandita Ramabai Girls Hostel",
    icon: <Home className="h-6 w-6" />,
    content: {
      description:
        "A home away from home with a fun-loving environment, accommodating 55 students.",
      warden: "Mrs. Kshama T Jayaraj",
      activities: [
        "Freshers welcome",
        "Talent evening",
        "Hostel trip",
        "Sports activities",
        "Cultural activities",
        "Seminars",
      ],
    },
  },
  {
    id: "instrumental-list",
    title: "Instrumental List",
    icon: <Microscope className="h-6 w-6" />,
    content: {
      description:
        "List of Instruments available in Microbiology department from UGC, DST and other departmental funds.",
      instruments: [
        {
          name: "UV Spectrophotometer",
          description: "Used to check absorbance of unknown solutions",
        },
        {
          name: "Centrifuge",
          description: "Helps in separating particulate matter from solution",
        },
        {
          name: "Rotary Shaker",
          description: "Provides aeration conditions for aerobic organisms",
        },
        { name: "PCR Machine", description: "Used for DNA amplification" },
        {
          name: "Fermenter",
          description: "Used for up scaling of microbial by-products",
        },
        {
          name: "Gel Rocker",
          description: "Used for staining and destaining of the gel",
        },
        { name: "ELISA PLATE READER", description: "" },
        { name: "Rotary Evaporator", description: "Concentrates the product" },
        {
          name: "pH Meter",
          description: "Used to check the pH of any solution",
        },
        {
          name: "Gel Doc",
          description: "Enables visualization and documentation of DNA/RNA gel",
        },
        { name: "Microfuge", description: "Used for mixing small volumes" },
        { name: "Reciprocating Shaker", description: "" },
        {
          name: "UV Transilluminator",
          description: "Used for observation of DNA/RNA gel",
        },
        { name: "Vortex Mixer", description: "Used for mixing" },
      ],
    },
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Campus Facilities
            </h1>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Wilson College provides state-of-the-art facilities to support
              academic excellence, personal growth, and overall development of
              our students. Our campus features modern amenities while
              preserving our rich heritage since 1832.
            </p>
          </div>

          <Tabs defaultValue="vision-center" className="space-y-8">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-2">
              <div className="flex flex-wrap justify-center gap-2 w-full mb-2">
                {facilities.slice(0, 4).map((facility) => (
                  <TabsTrigger
                    key={facility.id}
                    value={facility.id}
                    className="data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                  >
                    <div className="flex items-center gap-2">
                      {facility.icon}
                      <span>{facility.title}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-2 w-full">
                {facilities.slice(4).map((facility) => (
                  <TabsTrigger
                    key={facility.id}
                    value={facility.id}
                    className="data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                  >
                    <div className="flex items-center gap-2">
                      {facility.icon}
                      <span>{facility.title}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>

            {facilities.map((facility) => (
              <TabsContent
                key={facility.id}
                value={facility.id}
                className="space-y-6"
              >
                <Card>
                  <CardHeader className="bg-blue-900 text-white">
                    <div className="flex items-center gap-4">
                      {facility.icon}
                      <div>
                        <CardTitle className="text-2xl">
                          {facility.title}
                        </CardTitle>
                        {facility.id === "vision-center" && (
                          <CardDescription className="text-blue-100">
                            Supporting and empowering visually challenged
                            students since 2008
                          </CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    {facility.id === "vision-center" && (
                      <div className="space-y-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-blue-900 mb-2">
                            MOTTO
                          </h3>
                          <p className="italic">
                            {`"To Help Visually Challenged Students to be
                            Educationally, Technologically, Psychologically and
                            Socially Enriched so That They Are Better Equipped
                            to Face the Challenges of Life"`}
                          </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                          {facility.content.activities?.map(
                            (
                              activity:
                                | string
                                | { title: string; description: string },
                              index
                            ) => (
                              <Card key={index}>
                                <CardHeader>
                                  <CardTitle className="text-lg">
                                    {typeof activity === "object"
                                      ? activity.title
                                      : activity}
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  {typeof activity === "object" && (
                                    <>
                                      <p className="text-gray-600">
                                        {activity.description}
                                      </p>
                                    </>
                                  )}
                                  {typeof activity === "string" && (
                                    <span>{activity}</span>
                                  )}
                                </CardContent>
                              </Card>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {facility.id === "library" && (
                      <div className="space-y-6">
                        <p className="text-gray-600">
                          {facility.content.description}
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                          {facility.content.features?.map((feature, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">
                                ✓
                              </div>
                              <p className="text-gray-700">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {facility.id === "dst-fist" && (
                      <div className="space-y-6">
                        {facility.content.sections?.map((section, index) => (
                          <div key={index}>
                            <h3 className="text-lg font-semibold text-blue-900 mb-3">
                              {section.title}
                            </h3>
                            <ul className="grid gap-2 md:grid-cols-2">
                              {section.items.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center gap-2"
                                >
                                  <Microscope className="h-4 w-4 text-blue-900" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {facility.id === "gymkhana" && (
                      <div className="space-y-6">
                        <p className="text-gray-600">
                          {facility.content.history}
                        </p>
                        <div>
                          <h3 className="text-lg font-semibold text-blue-900 mb-3">
                            Available Sports
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {facility.content.sports?.map((sport, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full"
                              >
                                {sport}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {facility.id === "girls-hostel" && (
                      <div className="space-y-6">
                        <p className="text-gray-600">
                          {facility.content.description}
                        </p>
                        <div>
                          <h3 className="text-lg font-semibold text-blue-900 mb-3">
                            Hostel Activities
                          </h3>
                          <div className="grid gap-4 md:grid-cols-2">
                            {facility.content.activities?.map(
                              (activity, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <Users className="h-4 w-4 text-blue-900" />
                                  {typeof activity === "string" && (
                                    <span>{activity}</span>
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {facility.id === "instrumental-list" && (
                      <div className="space-y-6">
                        <p className="text-gray-600">
                          {facility.content.description}
                        </p>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {facility.content.instruments?.map(
                            (instrument, index) => (
                              <Card key={index} className="overflow-hidden">
                                <Image
                                  src={`/placeholder.svg?height=200&width=300`}
                                  alt={instrument.name}
                                  width={300}
                                  height={200}
                                  className="w-full h-40 object-cover"
                                />
                                <CardContent className="p-4">
                                  <h3 className="font-semibold text-blue-900 mb-2">
                                    {instrument.name}
                                  </h3>
                                  <p className="text-sm text-gray-600">
                                    {instrument.description}
                                  </p>
                                </CardContent>
                              </Card>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
}
