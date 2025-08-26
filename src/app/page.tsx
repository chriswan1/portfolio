import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <header>
          <h1>Christopher Wan</h1>
          <div>
            <h1>Projects</h1>
            <ol>
              <li>Personalized News System</li>
              <li>Photography Portfolio</li>
              <li>Library</li>
              <li>CKI Website</li>
            </ol>
          </div> 
          <div>
            <ol>
              <li>Languages & Frameworks: Java, C++, C, Python (NumPy, Pandas), JavaScript, HTML, Tailwind CSS, CSS, React, Flask, Next.js, Node.js, SQL</li>
              <li>APIs & Protocols: RESTful APIs, MVC Pattern</li>
              <li>Tools & Practices: Git, GitHub, SDLC, Object-Oriented Programming (OOP), Agile Methodologies</li>
            </ol>
          </div><h1>Technical Skills</h1>
        </header>

        {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
        </div> */}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/chriswan1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github icon"
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/ce-wan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.png"
            alt="LinkedIn logo"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
