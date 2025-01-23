export const fetchDepartments = `*[_type == "department" && slug.current == $slug][0]{
    name,
    details,
    "faculty": faculty[]->{
      name,
      role,
      "image": image.asset->url,
      qualifications,
      research,
      bio,
      experience
    },
    "activities": activities[]->{
      title,
      date,
      "image": image.asset->url
    },
    "events": events[]->{
      title,
      date,
      "image": image.asset->url
    },
    syllabusUrl
  }`;
