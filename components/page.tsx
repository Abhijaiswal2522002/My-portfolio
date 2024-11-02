'use client'

import { Github, Linkedin, Mail, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";

const titles = [
  "Full Stack Web Developer",
  "SDE",
  "UI/UX Designer",
  "Video Editor"
];

export function Page() {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedTitle(titles[currentIndex]);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-10">
        <nav className="container mx-auto px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link 
                href="#about" 
                className="text-black dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 transition duration-200 transform hover:-translate-y-1"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="#skills" 
                className="text-black dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 transition duration-200 transform hover:-translate-y-1"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                href="#projects" 
                className="text-black dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 transition duration-200 transform hover:-translate-y-1"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="text-black dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 transition duration-200 transform hover:-translate-y-1"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <section id="about" className="mb-16 scroll-mt-16">
          <div className="text-center">
            <img
              src="/abhi.jpg"
              alt="Profile of Abhishek Jaiswal"
              title="Profile Picture of Abhishek Jaiswal"
              className="rounded-full mx-auto mb-4 border-4 border-black shadow-lg transform transition duration-300 hover:scale-105"
              width={150}
              height={150}
              loading="lazy"
            />
            <h1 className="text-4xl font-bold mb-2">Abhishek Jaiswal</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              {displayedTitle}
            </p>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              I am passionate about creating responsive and user-friendly web applications. With 2 years of experience as a fresher in both front-end and back-end development, I love turning ideas into reality through code. I possess strong skills in data structures and algorithms (DSA), enabling me to solve complex problems efficiently and optimize application performance. Additionally, I have a keen eye for UI/UX design, ensuring that my web applications are not only functional but also intuitive and engaging for users.
            </p>
            <div className="mt-6">
              <Button asChild>
                <a href="/abhi resume.pdf" download className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-16 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["JavaScript", "React", "Node.js", "Python", "Bootstrap", "Tailwindcss", "TypeScript","C++","SQL","Express","Django","Next.js","Docker","Figma","Firebase","Appwrite"].map((skill) => (
              <div key={skill} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md text-center transform transition duration-300 hover:scale-105">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-16 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                title: "Student System", 
                description: "Developed a Django-based system for student registration, attendance, grading, and reporting. Streamlined management and data handling for educational institutions.", 
                link: "https://github.com/Abhijaiswal2522002/Student_system" 
              },
              { 
                title: "ChatApp", 
                description: "Built a chat app with real-time messaging, user authentication, and dynamic UI using React and Node.js. Integrated WebSocket for seamless interactions.", 
                link: "https://github.com/Abhijaiswal2522002/ChatApp" 
              },
              { 
                title: "AI Summarizer", 
                description: "Created an AI-powered text summarizer with Next.js, Redux, and Tailwind CSS, utilizing the OpenAI API to generate concise summaries from lengthy text for enhanced readability and quick information retrieval.", 
                link: "https://67249488cf9357fe0e030a78--ai-summmarizzer.netlify.app/" 
              },
              { 
                title: "RealTime Tracker", 
                description: "Developed a responsive real-time tracking app with Next.js, Tailwind CSS, and a backend powered by Node.js, Express, and Socket.IO, enabling dynamic updates and live data interaction.", 
                link: "https://github.com/Abhijaiswal2522002/Realtime-tracker" 
              },
              { 
                title: "Metaverse", 
                description: "Built a Metaverse application using React and Next.js, emphasizing clean code practices. Mastered CSS with Tailwind, implemented animations and gradients using Framer Motion, and ensured responsiveness with media queries for diverse devices.", 
                link: "https://6721c603c35f890f30251154--mtaversaaa.netlify.app/" 
              },
              { 
                title: "Banking Management", 
                description: "Implemented a banking management system using C++ with a focus on data structures and algorithms (DSA) for efficient transaction processing and account management. Designed for reliability and performance in handling banking operations.", 
                link: "https://github.com/Abhijaiswal2522002/Bank-Management" 
              }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
                    {project.title}
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
          <div className="flex justify-center space-x-4">
            <Link href="https://github.com" className="text-black dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400">
              <Github className="w-8 h-8" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/abhishek-jaiswal-278890246/" className="text-black dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400">
              <Linkedin className="w-8 h-8" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:jaisabhishek834@gmail.com" className="text-black dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400">
              <Mail className="w-8 h-8" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </section>

        <footer className="bg-gray-800 text-white py-4 mt-16">
          <div className="text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Abhishek Jaiswal. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
