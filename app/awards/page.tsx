"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface AwardType {
  title: string;
  organization: string;
  year: number;
  category: string;
  description: string;
  image: string;
}

const awards: AwardType[] = [
  {
    title: "Best Liberal Arts College",
    organization: "Education World",
    year: 2023,
    category: "Academic Excellence",
    description:
      "Recognized for excellence in interdisciplinary education and student outcomes.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Outstanding Research Contribution",
    organization: "National Science Foundation",
    year: 2022,
    category: "Research",
    description:
      "Awarded for groundbreaking research in sustainable energy solutions.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Community Engagement Excellence",
    organization: "Higher Education Commission",
    year: 2021,
    category: "Community Service",
    description:
      "Honored for impactful community service initiatives and local partnerships.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Innovation in Teaching",
    organization: "Global Education Summit",
    year: 2020,
    category: "Teaching",
    description:
      "Recognized for pioneering adaptive learning technologies in the classroom.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Diversity and Inclusion Champion",
    organization: "Association of American Colleges",
    year: 2019,
    category: "Inclusivity",
    description:
      "Awarded for fostering an inclusive campus environment and diverse student body.",
    image: "/placeholder.svg?height=400&width=600",
  },
];

const achievements = [
  {
    category: "Academic",
    items: [
      {
        text: "Ranked in the top 5% of liberal arts colleges nationwide",
        value: "5%",
      },
      { text: "Faculty members with PhD or terminal degrees", value: "92%" },
      { text: "Student-to-faculty ratio", value: "12:1" },
    ],
  },
  {
    category: "Research",
    items: [
      {
        text: "Increase in research funding over the past five years",
        value: "25%",
      },
      { text: "Published research papers in the last year", value: "500+" },
      { text: "Ongoing research projects", value: "150+" },
    ],
  },
  {
    category: "Student Success",
    items: [
      { text: "Graduate employment rate within six months", value: "90%" },
      { text: "Students participating in internships", value: "75%" },
      { text: "Alumni giving back to the college", value: "30%" },
    ],
  },
  {
    category: "Global Impact",
    items: [
      {
        text: "International partnerships for exchange programs",
        value: "50+",
      },
      { text: "Countries represented in student body", value: "60+" },
      { text: "Study abroad participation rate", value: "40%" },
    ],
  },
];

const AwardCard: React.FC<{
  award: AwardType;
  isSelected: boolean;
  onClick: () => void;
}> = ({ award, isSelected, onClick }) => (
  <motion.div
    className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ${
      isSelected ? "bg-blue-100" : "hover:bg-gray-100"
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h3 className="text-lg font-bold text-blue-900 mb-2">{award.title}</h3>
    <p className="text-sm text-gray-600 mb-2">
      {award.organization} - {award.year}
    </p>
    <p className="text-sm text-gray-700">{award.description}</p>
  </motion.div>
);

const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    const endValue = parseInt(value.replace(/\D/g, ""));
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCount(Math.floor(endValue * progress));

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <span className="text-4xl font-bold text-blue-600">
      {count}
      {value.replace(/[0-9]/g, "")}
    </span>
  );
};

export default function AwardsPage() {
  const [selectedAward, setSelectedAward] = useState<AwardType>(awards[0]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Celebrating Excellence
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                {`Discover the accolades that showcase Wilson College's commitment
                to academic brilliance and innovation.`}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
              Our Awards Showcase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {awards.map((award) => (
                  <AwardCard
                    key={award.title}
                    award={award}
                    isSelected={selectedAward?.title === award.title}
                    onClick={() => setSelectedAward(award)}
                  />
                ))}
              </div>
              <div className="sticky top-8 self-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedAward.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <Image
                      src={selectedAward.image || "/placeholder.svg"}
                      alt={selectedAward.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">
                        {selectedAward.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {selectedAward.organization} - {selectedAward.year}
                      </p>
                      <p className="text-gray-700">
                        {selectedAward.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
              Wilson College by the Numbers
            </h2>
            <Tabs defaultValue={achievements[0].category} className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                {achievements.map((achievement) => (
                  <TabsTrigger
                    key={achievement.category}
                    value={achievement.category}
                    className="text-lg"
                  >
                    {achievement.category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {achievements.map((achievement) => (
                <TabsContent
                  key={achievement.category}
                  value={achievement.category}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievement.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow-md text-center"
                      >
                        <AnimatedCounter value={item.value} />
                        <p className="mt-2 text-gray-600">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className="py-20 bg-white text-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-bold mb-4 text-blue-900">
                  Join Our Legacy of Excellence
                </h2>
                <p className="text-xl mb-8 max-w-lg text-gray-700">
                  {`Be part of a community that's consistently pushing the
                  boundaries of education and research. Explore our programs and
                  see where excellence can take you.`}
                </p>
                <Button className="bg-blue-900 text-white hover:bg-blue-800 transition-colors duration-300 text-lg px-8 py-3">
                  Explore Our Programs <ArrowRight className="ml-2" />
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="bg-blue-100 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-blue-900">
                    Why Choose Wilson College?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "World-class faculty",
                      "Cutting-edge research opportunities",
                      "Diverse and inclusive community",
                      "Global learning experiences",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Check className="h-6 w-6 text-blue-600" />
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
