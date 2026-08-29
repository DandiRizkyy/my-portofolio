import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import nekoGojo from "./assets/NekoGojoSatoru.json";
import lovelyMeow from "./assets/LovelyMeow.json";
import books from "./assets/Books.json";
import onlinePayment from "./assets/OnlinePayment.json";
import industry from "./assets/Industry.json";
import cart from "./assets/CartItemsAdded.json";
import Typewriter from "typewriter-effect";
import {
  Sword,
  Shield,
  Scroll,
  Sparkles,
  Mail,
  Github,
  Linkedin,
  Code,
  Trophy,
  Star,
  Gamepad2,
  CircleDollarSign,
  Clapperboard,
  DownloadCloud,
  Wallpaper,
  Cpu,
  Computer,
  Database,
  CloudMoon,
  Router,
  Files,
  Wrench,
  Hammer,
  RefreshCcwDot,
  Container,
  RouterIcon,
  GitCommit,
} from "lucide-react";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [crystalClicked, setCrystalClicked] = useState(false);
  const skillList = [
    {
      name: "Frontend Web Development",
      skillIcon: <Wallpaper className="section-icon" />,
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Typescript",
        "Vite",
        "React",
        "NextJs",
        "ANTD Component",
        "Figma",
      ],
      description: "",
    },
    {
      name: "Backend Web Development",
      skillIcon: <Cpu className="section-icon" />,
      skills: [
        "NestJs",
        "ExpressJs",
        "PrismaORM",
        "SequelizeORM",
        "RESTful API",
        "GraphQL",
      ],
      description: "",
    },
    {
      name: "Fullstack Web Development",
      skillIcon: <Computer className="section-icon" />,
      skills: ["NextJs", "Ruby on Rails", "Wordpress Elementor ACF"],
      description: "",
    },
    {
      name: "Database Management",
      skillIcon: <Database className="section-icon" />,
      skills: ["PostgreSQL", "MySQL"],
      description: "",
    },
    {
      name: "Deployment",
      skillIcon: <Router className="section-icon" />,
      skills: [
        "Vercel",
        "Netlify",
        "Railway",
        "Render",
        "GCP (Google Cloud Platform)",
      ],
      description: "",
    },
    {
      name: "QA",
      skillIcon: <Hammer className="section-icon" />,
      skills: ["Selenium", "Playwright"],
      description: "",
    },
    {
      name: "Version Control",
      skillIcon: <GitCommit className="section-icon" />,
      skills: ["Git", "Github"],
      description: "",
    },
    {
      name: "State Management",
      skillIcon: <RefreshCcwDot className="section-icon" />,
      skills: ["Redux", "Zustand"],
      description: "",
    },
    {
      name: "Containerization",
      skillIcon: <Container className="section-icon" />,
      skills: ["Docker"],
      description: "",
    },
    {
      name: "Office Management",
      skillIcon: <Files className="section-icon" />,
      skills: ["MS Word", "MS Excel", "MS Powerpoint"],
      description: "",
    },
    {
      name: "Editing",
      skillIcon: <Clapperboard className="section-icon" />,
      skills: ["Photoshop", "Canva", "Capcut", "Adobe Premiere"],
      description: "",
    },
  ];
  const portofolioList = [
    {
      badge: <Lottie animationData={cart} loop={true} autoplay={true} />,
      name: "Arumnashwa",
      skills: ["Vite", "React", "Supabase"],
      link: "arumnashwa.com",
      description: "",
    },
    {
      badge: (
        <Lottie
          animationData={industry}
          loop={true}
          autoplay={true}
          style={{ width: "105px", height: "105px" }} // manually set here because lottie image size is not same
        />
      ),
      name: "AIWO International Indonesia",
      skills: ["Wordpress", "Elementor", "ACF"],
      link: "aiwoindonesia.com",
      description: "",
    },
    {
      badge: (
        <Lottie animationData={onlinePayment} loop={true} autoplay={true} />
      ),
      name: "BPR Artatama",
      skills: ["Wordpress", "Elementor", "ACF"],
      link: "bprartatama.com",
      description: "",
    },
    {
      badge: <Lottie animationData={nekoGojo} loop={true} autoplay={true} />,
      name: "Anime Dee Bee",
      skills: [
        "React",
        "Vite",
        "Shadcn",
        "TailwindCSS",
        "Zustand",
        "Lucide React",
      ],
      link: "anime-dee-bee.netlify.app",
      description: "",
    },
    {
      badge: <Lottie animationData={lovelyMeow} loop={true} autoplay={true} />,
      name: "Cats Photo Club",
      skills: ["React", "Vite", "Mockapi", "HTML", "CSS"],
      link: "cats-photo-club.netlify.app",
      description: "",
    },
    {
      badge: <Lottie animationData={books} loop={true} autoplay={true} />,
      name: "RevoU Library",
      skills: ["React", "Vite", "Mockapi", "HTML", "CSS"],
      link: "revo-library.netlify.app",
      description: "",
    },
  ];

  const handleCrystalClick = () => {
    setCrystalClicked(true);
    setTimeout(() => {
      setGameStarted(true);
    }, 1500);
  };

  if (!gameStarted) {
    return (
      <div className="intro-screen">
        <div
          className={`crystal-container ${crystalClicked ? "activated" : ""}`}
        >
          <div className="crystal-glow"></div>
          <button
            className="crystal"
            onClick={handleCrystalClick}
            aria-label="Start your journey"
          >
            <Sparkles size={48} />
          </button>
          <div className="crystal-rings">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
          </div>
        </div>

        <h1 className="intro-title">
          <span className="title-line">Touch the Crystal</span>
        </h1>
      </div>
    );
  }

  return (
    <div className="portfolio-main">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-links">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Portofolio
          </a>
          <a href="#contact" className="nav-link nav-link-primary">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge-wrapper">
          <div className="hero-badge">
            <Star size={16} />
            <span>Developer</span>
          </div>
          <div className="hero-badge">
            <Clapperboard size={16} />
            <span>CREATOR</span>
          </div>
          <div className="hero-badge">
            <CircleDollarSign size={16} />
            <span>DIGITAL MARKETER</span>
          </div>
        </div>

        <h1 className="hero-title">
          Welcome,
          <span className="hero-title-sub">
            <Typewriter
              options={{
                strings: [
                  "Traveler",
                  "Guest",
                  "Sir?",
                  "I Craft Digital Realms",
                ],
                autoStart: true,
                loop: true,
                delay: 90,
                deleteSpeed: 55,
              }}
            />
          </span>
        </h1>

        <p className="hero-description">
          Digital Creator & Tech Enthusiast. Merging a love for Tech and
          Creativity.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary">
            <Scroll size={20} />
            <a href="#projects" className="nav-link-hero">
              View Portofolio
            </a>
          </button>
          <a
            href="https://drive.google.com/file/d/1I__e3RahKx8XcBv9INDi9yh1g8nvxVJI/view?usp=drive_link"
            className="btn btn-secondary"
            style={{ textDecoration: "none" }}
          >
            <DownloadCloud size={20} />
            Download CV
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <div className="section-header">
          <Shield className="section-icon" />
          <h2 className="section-title">The Hero's Journey</h2>
        </div>

        <div className="about-content">
          <div className="about-card">
            <div className="card-glow"></div>
            <p className="about-text">
              Every great hero has an origin story. Mine began in the mystical
              realm of code, where I discovered the power to bring ideas to life
              through the ancient art of programming. Through countless battles
              with bugs and epic quests for optimization, I've honed my skills
              and gain the ultimate weapon, AI: The True Companion to shorten
              any Task And Automation.
            </p>
            <p className="about-text">
              To make it simple.. i love mixing Tech and Creativity with the
              help of AI to maximize the result 😄
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container">
        <div className="section-header">
          <Sword className="section-icon" />
          <h2 className="section-title">Arsenal of Skills</h2>
        </div>

        <div className="skills-grid">
          {/* Loop Skill Section */}
          {skillList?.map((skillListData) => {
            return (
              <div className="skill-card">
                <div className="skill-icon">{skillListData?.skillIcon}</div>
                <h3 className="skill-name">{skillListData?.name}</h3>
                <div className="skill-list">
                  {skillListData?.skills?.map((skill) => {
                    return <span className="skill-tag">{skill}</span>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <div className="section-header">
          <Trophy className="section-icon" />
          <h2 className="section-title">Portofolio Tavern</h2>
        </div>

        <div className="projects-grid">
          {portofolioList?.map((porto) => {
            return (
              <div className="project-card">
                <div className="project-badge">{porto?.badge}</div>
                <h3 className="project-name">{porto?.name}</h3>
                <p className="project-description">{porto?.description}</p>
                <div className="project-tech">
                  {porto?.skills?.map((skill) => {
                    return <span className="tech-badge">{skill}</span>;
                  })}
                </div>
                <a
                  className="project-button"
                  href={`https://${porto?.link || "www.google.com"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            );
          })}
        </div>
        <h3
          className="section-title"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
              cursor: "|",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Next Project Deployment in Progress...")
                .start(); // Start typing and then... do nothing else!
            }}
          />
        </h3>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container contact-section">
        <div className="section-header">
          <Scroll className="section-icon" />
          <h2 className="section-title">Summon the Hero</h2>
        </div>

        <p className="contact-description">
          Ready to embark on an epic quest together? Send a message through the
          mystical channels below.
        </p>

        <div className="contact-methods">
          <a
            href="mailto:dandirizky.work@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <Mail size={32} />
            <span>dandirizky.work@gmail.com</span>
          </a>
          <a
            href="https://github.com/DandiRizkyy"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <Github size={32} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/dandirizkyy/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <Linkedin size={32} />
            <span>LinkedIn</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>
            © {new Date().getFullYear()} Dandi Rizky's Website. Crafted with
            magic and code.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
