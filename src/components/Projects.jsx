import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import project1 from "../assets/project_1.png";
import project2 from "../assets/project_2.png";
import project3 from "../assets/project_3.png";
import project4 from "../assets/project_4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "CineVault",
      desc: "CineVault is a modern movie web application designed to help users discover popular, top-rated, and upcoming films. It fetches real-time movie data from an external API to keep content up to date.",
      image: project1,
      tags: ["React", "TMDB API"],
      git_link: "https://github.com/akashmhoriya/CineVault",
      demo_link: "https://cine-vault-kappa.vercel.app/",
    },
    {
      id: 2,
      title: "Agency-AI App",
      desc: "Agency AI is a modern web application designed to showcase AI-driven services and solutions with a clean, professional interface. The app focuses on delivering a professional user experience.",
      image: project2,
      tags: ["React", "Tailwind", "Framer Motion", "Web3Forms"],
      git_link: "https://github.com/akashmhoriya/AgencyAI",
      demo_link: "https://agency-ai-omega-beige.vercel.app/",
    },
    {
      id: 3,
      title: "RESUMIFY - AI Resume Analyzer",
      desc: "An AI-powered resume analyzer that evaluates resumes, provides ATS scores, and suggests improvements to help users optimize their resumes for better job opportunities.",
      image: project3,
      tags: [
        "React",
        "React Router",
        "LLM Integration",
        "Puter AI",
        "PDF.js",
        "Zustand",
      ],
      git_link: "https://github.com/akashmhoriya/AI-Resume-Analyzer",
      demo_link: "https://ai-resume-analyzer-gamma-ecru.vercel.app/",
    },
    {
      id: 4,
      title: "SPYLT — Awwwards Animated Website",
      desc: "Created a clone of the SPYLT Awwwards website using React, Tailwind CSS, and GSAP, featuring smooth scroll animations, interactive transitions, responsive modern UI.",
      image: project4,
      tags: ["React", "Tailwind", "GSAP"],
      git_link: "https://github.com/akashmhoriya/SPYLT_CLONE-awwwards-website",
      demo_link: "https://gsap-awwwards-ebon.vercel.app/",
    },
    {
      id: 5,
      title: "Task Management",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt itaque, sapiente expedita totam magnam natus ipsum amet reiciendis accusantium voluptatum.",
      image: project5,
      tags: ["Laravel", "Vue.js"],
    },
    {
      id: 6,
      title: "Weather App",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt itaque, sapiente expedita totam magnam natus ipsum amet reiciendis accusantium voluptatum.",
      image: project6,
      tags: ["React.js", "Next.js"],
    },
  ];
  return (
    <section
      id="projects"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
          >
            My
            <span
              style={{
                background: "linear-gradient(to right, #f97316,#f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            A showcase of my recent work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #1f2937,#111827)"
                  : "linear-gradient(to right, #ffffff,#f9fafb)",
                borderColor: darkMode ? "#374151" : "e5e7eb",
              }}
              className="group rounded-2xl border duration-300 hover:border-orange-500/50 transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full hfull object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    color: darkMode ? "white" : "#1f2937",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{
                    color: darkMode ? "#d1d5db" : "#6b7280",
                  }}
                >
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                      className="px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.git_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "linear-gradient(to right, #f97316, #f59e0b)",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2
                  text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://github.com/akashmhoriya?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(to right, #f97316, #f59e0b)",
            }}
            className="inline-flex items-center font-semibold gap-2 px-7 py-4
                  text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
