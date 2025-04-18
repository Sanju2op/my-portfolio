// src/app/projects/page.js
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
// const projects = [
//   {  
//     title: "E-commerce Web App",
//     description:
//       "A full-stack e-commerce platform built using React and Node.js.",
//     github: "https://github.com/your-username/ecommerce-app",
//     liveLink: "https://ecommerce-app.example.com",
//   },
//   {
//     title: "Portfolio Website",
//     description:
//       "My personal portfolio website built with Next.js and Tailwind CSS.",
//     github: "https://github.com/your-username/portfolio",
//     liveLink: "https://portfolio.example.com",
//   },
//   {
//     title: "DSA Practice",
//     description:
//       "A repository of my data structures and algorithms practice solutions.",
//     github: "https://github.com/your-username/dsa-practice",
//     liveLink: null,
//   },
//   // Add more projects as needed
// ];

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto py-16 space-y-6">
      <h2 className="text-3xl font-bold text-center">💻 Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            github={project.github}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
}
