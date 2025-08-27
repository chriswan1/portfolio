"use client";
import Image from "next/image";
import { useScrollReveal, useCardFadeOut } from "./useScrollReveal";

export default function Home() {
  useScrollReveal({ 
    stagger: 200, 
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.3 
  });
  
  useCardFadeOut();

  return (
    <div className="font-sans">
      {/* Card A - Hero Section */}
      <section 
        className="card-section min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8"
      >
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div data-reveal="slide-up" data-reveal-delay="100" className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Full-Stack Developer & AI Enthusiast
          </div>
          <h1 data-reveal="slide-up" data-reveal-delay="200" className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hey, I&apos;m Chris
          </h1>
          <p data-reveal="slide-up" data-reveal-delay="400" className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I’m passionate about developing software that makes technology more accessible and useful. 
          I aim to contribute thoughtful solutions and collaborate effectively with others. My goal is 
          to keep growing as an engineer while delivering code that is both clean and impactful.
          </p>
          <div data-reveal="slide-up" data-reveal-delay="600" className="flex gap-4 justify-center mt-8">
            <a
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              href="#projects"
            >
              View My Work
            </a>
            <a
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:scale-105"
              href="#contact"
            >
              Let&apos;s Collaborate
            </a>
          </div>
          <div data-reveal="slide-up" data-reveal-delay="800" className="flex justify-center items-center gap-8 mt-12 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for projects
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Based in California
            </div>
          </div>
        </div>
      </section>

      {/* Card B - Process Section */}
      <section 
        className="card-section min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-900 p-8"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 data-reveal="slide-up" className="text-5xl md:text-6xl font-bold text-center text-gray-800 dark:text-gray-200 mb-16">
            How I Work
          </h2>
          <div data-reveal="slide-up" data-reveal-delay="200" className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Discovery & Planning</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Understanding your vision, requirements, and goals. Researching technologies and creating a roadmap for success.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Development & Iteration</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Building with clean, scalable code. Regular check-ins and iterations to ensure we&apos;re on the right track.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Launch & Support</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Deploying your solution and providing ongoing support. Ensuring everything runs smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Card C - Projects Section */}
      <section 
        id="projects"
        className="card-section min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 p-8"
      >
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 data-reveal="slide-up" className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Featured Projects
            </h2>
            <p data-reveal="slide-up" data-reveal-delay="200" className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my work across web development, AI, and robotics
            </p>
          </div>
          <div data-reveal-group className="space-y-8">
            <article data-reveal="slide-up" className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Personalized News System</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">AI/ML</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Backend</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">AI/ML</span>
                </div>
                <div className="max-h-0 group-hover:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
                  <p className="text-gray-600 dark:text-gray-400 pb-4">
                    Developed and deployed RESTful APIs for a personalized news recommendation system using 
                    Flask within an MVC architecture. Pretrained a hybrid recommendation model combining 
                    collaborative filtering (SVD) and content-based methods (TF-IDF) on MIND&apos;s dataset of 
                    160K+ articles, improving click-through rates. Designed scalable API endpoints, 
                    collaborated with cross-functional teams to ensure usability, and applied Git for version control and peer code reviews.
                  </p>
                </div>
              </div>
            </article>
            
            <article data-reveal="slide-up" className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Photography Portfolio</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded">Frontend</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Design</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Tailwind</span>
                </div>
                <div className="max-h-0 group-hover:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
                  <p className="text-gray-600 dark:text-gray-400 pb-4">
                    Designed and developed a responsive portfolio website to showcase photography and video 
                    projects with an elegant, modern interface. Implemented dynamic galleries and video embedding 
                    to enhance user engagement and highlight creative work. Optimized performance and accessibility
                    across devices, ensuring a seamless experience for both desktop and mobile users.
                  </p>
                </div>
              </div>
            </article>
            
            <article data-reveal="slide-up" className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Library Management System</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded">Full-Stack</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">Database</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">HTML</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">CSS</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">MySQL</span>
                </div>
                <div className="max-h-0 group-hover:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
                  <p className="text-gray-600 dark:text-gray-400 pb-4">
                    Built a full-stack library management system that integrates a React front end with an SQL 
                    database through RESTful API endpoints. Enabled features such as barcode scanning and automated 
                    database entry for streamlined book tracking and management. Structured the application with an 
                    MVC architecture to maintain scalability and clarity between the UI, logic, and data layers.
                  </p>
                </div>
              </div>
            </article>
            
            <article data-reveal="slide-up" className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">CKI Website</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded">Frontend</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Design</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">HTML</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">CSS</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">React</span>
                </div>
                <div className="max-h-0 group-hover:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
                  <p className="text-gray-600 dark:text-gray-400 pb-4">
                    Redesigned and modernized the Circle K International (CKI) club website with a responsive and 
                    user-friendly interface to support student engagement. Integrated modular CSS components to 
                    improve interactivity and simplify long-term maintenance. Collaborated with non-technical 
                    users to align the design with club branding and trained officers to manage and update the 
                    website independently.
                  </p>
                </div>
              </div>
            </article>
            
            <article data-reveal="slide-up" className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Automated Tour Guide Car</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded">Robotics</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">AI</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">ROS2</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">YOLO</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">LiDAR</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">OpenCV</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">TurtleBot3</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Jetson Nano</span>
                </div>
                <div className="max-h-0 group-hover:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
                  <p className="text-gray-600 dark:text-gray-400 pb-4">
                    Designed and implemented an autonomous RC car system capable of following a designated path while avoiding obstacles in real time.
                    Integrated LiDAR and YOLO-based object detection with ROS2 nodes for collision avoidance and path planning.
                    Deployed computer vision and depth sensing algorithms on an NVIDIA Jetson Nano for real-time decision-making.
                    Applied Python, C++, and OpenCV to process video streams and implement safety mechanisms in dynamic environments.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Card D - Contact Section */}
      <section 
        id="contact"
        className="card-section min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-800 dark:to-gray-900 p-8"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 data-reveal="slide-up" className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-200">
            Let&apos;s Build Something Amazing
          </h2>
          <p data-reveal="slide-up" data-reveal-delay="200" className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I&apos;m always excited to work on new projects and collaborate with innovative teams. 
            Whether it&apos;s a web application, AI system, or robotics project, let&apos;s bring your vision to life.
          </p>
          <div data-reveal="slide-up" data-reveal-delay="400" className="flex gap-6 justify-center mt-8">
            <a
              className="flex items-center gap-3 px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              href="https://github.com/chriswan1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.svg"
                alt="Github icon"
                width={24}
                height={24}
                className="dark:invert"
              />
              GitHub
            </a>
            <a
              className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              href="https://www.linkedin.com/in/ce-wan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn logo"
                width={24}
                height={24}
              />
              LinkedIn
            </a>
          </div>
          <div data-reveal="slide-up" data-reveal-delay="600" className="mt-12 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Technical Expertise</h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 text-lg">Languages & Frameworks</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Java, C++, C, Python (NumPy, Pandas, OpenCV), JavaScript, HTML, Tailwind CSS, CSS, React, Flask, Next.js, Node.js, SQL
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 text-lg">Robotics & AI</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  ROS2, YOLO, LiDAR, Computer Vision, TurtleBot3, Jetson Nano, Object Detection, Path Planning
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 text-lg">Tools & Practices</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Git, GitHub, SDLC, Object-Oriented Programming (OOP), Agile Methodologies, RESTful APIs, MVC Pattern
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
