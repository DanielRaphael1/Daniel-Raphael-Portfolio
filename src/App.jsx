import './App.css'
import Particles from './components/Particles'
import ContactItem from './components/ContactItem'
import Section from './components/Section'
import Card from './components/Card'
import ProjectCard from './components/ProjectCard'
import Button from './components/Button'
import Language from './components/Language'
import AnimatedSection from './components/AnimatedSection'
import AboutCard from './components/AboutCard'
import TechIcon from './components/TechIcon'
import TechCategory from './components/TechCategory'
import HeroBadge from './components/HeroBadge'
import HeroText from './components/HeroText'
import JumpToButton from './components/JumpToButton'
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { BsRobot, BsChatDots } from 'react-icons/bs'
import { RiRobot2Line } from 'react-icons/ri'
import { TbChartBar } from 'react-icons/tb'

const PROFILE_DATA = {
  name: "Daniel Raphael",
  title: "Software Engineer",
  availability: "Available for Software Development Positions",
  bio: "Results driven software engineer specializing in designing, developing, and optimizing scalable applications."
}

const PROJECTS = [
  {
    id: 1,
    title: "AI Assistant ChatBot",
    description: "An intelligent chatbot powered by OpenAI API and machine learning algorithms for customer service and marketing, highly scalable and robust architecture",
    icon: <BsRobot size={80} />,
    bgGradient: "linear-gradient(135deg, rgba(252, 130, 0, 0.15) 0%, rgba(20, 20, 30, 0.95) 100%)",
    githubUrl: "https://github.com/DanielRaphael1/Chatbot-Architecture",
    techStack: ["Python", "React", "OpenAI", "Flask", "MySQL", "Redis"]
  },
  {
    id: 2,
    title: "Communication Platform",
    description: "A robust platform integrating WhatsApp Business API for seamless customer communication, featuring automated responses and bulk messaging",
    icon: (
      <div className="combined-icon">
        <BsChatDots size={60} />
        <RiRobot2Line size={25} className="bot-overlay" />
      </div>
    ),
    bgGradient: "linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(20, 20, 30, 0.95) 100%)",
    githubUrl: "https://github.com/DanielRaphael1/WhatsApp-Platform",
    techStack: ["PostgreSQL", "NextJS", "Rest APIs", "Docker/Kubernetes", "Redis", "AWS"]
  },
  {
    id: 3,
    title: "Data Analytics Dashboard",
    description: "Real-time data visualization dashboard for business intelligence and analytics, Integrated with the two other projects for a comprehensive solution",
    icon: <TbChartBar size={80} />,
    bgGradient: "linear-gradient(135deg, rgba(30, 144, 180, 0.15) 0%, rgba(20, 20, 30, 0.95) 100%)",
    githubUrl: "https://github.com/DanielRaphael1/Analytics-Dashboard",
  techStack: ["nextJS", "expressJS", "mySQL", "REST APIs", "Kubernetes/docker"]
  }
]
const TECH_STACK = {
  frontend: [
    { name: "CSS", logo: "/assets/tech-icons/css.svg" },
    { name: "JavaScript", logo: "/assets/tech-icons/javascript.svg" },
    { name: "React", logo: "/assets/tech-icons/react.svg" },
    { name: "Next.js", logo: "/assets/tech-icons/nextjs.svg" }
  ],
  backend: [
    { name: "Node.js", logo: "/assets/tech-icons/nodejs.svg" },
    { name: "Express", logo: "/assets/tech-icons/express.svg" },
    { name: "Python", logo: "/assets/tech-icons/python.svg" }
  ],
  database: [
    { name: "MongoDB", logo: "/assets/tech-icons/mongodb.svg" },
    { name: "PostgreSQL", logo: "/assets/tech-icons/postgresql.svg" },
    { name: "MySQL", logo: "/assets/tech-icons/mysql.svg" },
    { name: "Redis", logo: "/assets/tech-icons/redis.svg" }
  ],
  infrastructure: [
    { name: "Docker", logo: "/assets/tech-icons/docker.svg" },
    { name: "Kubernetes", logo: "/assets/tech-icons/kubernetes.svg" },
    { name: "AWS", logo: "/assets/tech-icons/aws.svg" }
  ],
  tools: [
    { name: "Git", logo: "/assets/tech-icons/git.svg" },
    { name: "GitHub", logo: "/assets/tech-icons/github.svg" },
    { name: "GitHub Actions", logo: "/assets/tech-icons/github-actions.svg" }
  ]
}

function App() {
  return (
    <div>
      <header className="title-box">
        <AnimatedSection delay={100}>
          <h1>{PROFILE_DATA.name}</h1>
        </AnimatedSection>
        <JumpToButton />
      </header>

      <div style={{ minHeight: '100vh' }}>
        <Section id="home" className="main-content" showDivider={true}>
          <Particles />
          <AnimatedSection delay={400}>
            <HeroBadge>{PROFILE_DATA.availability}</HeroBadge>
          </AnimatedSection>
          <AnimatedSection delay={700}>
            <div className="hero-section">
              <div className="profile-image-container">
                <img
                  src="/assets/profile-picture.jpg"
                  alt={PROFILE_DATA.name}
                  className="profile-image"
                />
              </div>
              <div className="name-container">
                <h2 className="gradient-text">{PROFILE_DATA.name}</h2>
              </div>
              <HeroText title={PROFILE_DATA.title} bio={PROFILE_DATA.bio} />
            </div>
            <div className="links-section">
              <Button
                variant="linkedin"
                href="http://www.linkedin.com/in/DanielRaphael1"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin style={{ marginRight: '8px' }} />LinkedIn
              </Button>
              <Button
                variant="github"
                href="http://github.com/DanielRaphael1"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub style={{ marginRight: '8px' }} />GitHub
              </Button>
              <Button
                variant="resume"
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer">
                <FaFilePdf style={{ marginRight: '8px' }} />Resume
              </Button>
            </div>
          </AnimatedSection>
        </Section>

        <Section id="about-section" className="about-section" showDivider={true}>
          <Particles />
          <AnimatedSection threshold={0.2}>
            <div style={{ textAlign: 'center' }}>
              <h2 className="section-header gradient-text">About Me</h2>
            </div>
          </AnimatedSection>
          <Card variant="about">
            <AnimatedSection delay={150} threshold={0.2} style={{ gridColumn: '1 / -1' }}>
              <AboutCard>
                <p>
                  Hi, I'm Daniel, my two biggest passions in life are technology and chess. 
                  I'm always eager to learn new things about both fields and improve my skills.<br />
                  When I'm not coding, you can find me playing chess.
                </p>
              </AboutCard>
            </AnimatedSection>
            <AnimatedSection delay={300} threshold={0.2}>
              <AboutCard>
                <h3>Contact Information</h3>
                <ContactItem
                  icon={<HiOutlineMail />}
                  text="daniel@r-raphael.com"
                  href="mailto:daniel@r-raphael.com"
                />
                <ContactItem
                  icon={<HiOutlinePhone />}
                  text="+972 50-9890609"
                  href="tel:+972509890609"
                />
                <ContactItem
                  icon={<FiLinkedin />}
                  text="linkedin.com/in/DanielRaphael1"
                  href="http://www.linkedin.com/in/DanielRaphael1"
                />
                <ContactItem
                  icon={<FiGithub />}
                  text="github.com/DanielRaphael1"
                  href="http://github.com/DanielRaphael1"
                />
              </AboutCard>
            </AnimatedSection>
            <AnimatedSection delay={450} threshold={0.2}>
              <div className="about-card-column">
                <AboutCard>
                  <h3>Languages</h3>
                  <div className="language-bars-container">
                    <Language flag="/assets/flags/us.svg" name="English" level="Native" />
                    <Language flag="/assets/flags/il.svg" name="Hebrew" level="Native" />
                  </div>
                </AboutCard>
                <AboutCard>
                  <h3>Military Service</h3>
                  <p>Foot Soldier, Nahal Brigade (2018-2021)
                  <br />Driven by discipline, teamwork, and resilience.

                  </p>
                </AboutCard>
              </div>
            </AnimatedSection>
          </Card>
        </Section>

        <Section id="tech" showDivider={true}>
          <Particles />
          <AnimatedSection threshold={0.2}>
            <div style={{ textAlign: 'center' }}>
              <h2 className="section-header gradient-text">My Stack</h2>
            </div>
          </AnimatedSection>
          <Card variant="tech">
            <TechCategory title="Frontend" className="tech-category-frontend">
              {TECH_STACK.frontend.map((tech) => (
                <TechIcon
                  key={tech.name}
                  logo={tech.logo}
                  label={tech.name}
                />
              ))}
            </TechCategory>

            <TechCategory title="Backend" className="tech-category-backend">
              {TECH_STACK.backend.map((tech) => (
                <TechIcon
                  key={tech.name}
                  logo={tech.logo}
                  label={tech.name}
                />
              ))}
            </TechCategory>

            <TechCategory title="Database" className="tech-category-database">
              {TECH_STACK.database.map((tech) => (
                <TechIcon
                  key={tech.name}
                  logo={tech.logo}
                  label={tech.name}
                />
              ))}
            </TechCategory>

            <TechCategory title="Infrastructure" className="tech-category-infrastructure">
              {TECH_STACK.infrastructure.map((tech) => (
                <TechIcon
                  key={tech.name}
                  logo={tech.logo}
                  label={tech.name}
                />
              ))}
            </TechCategory>

            <TechCategory title="Tools" className="tech-category-tools">
              {TECH_STACK.tools.map((tech) => (
                <TechIcon
                  key={tech.name}
                  logo={tech.logo}
                  label={tech.name}
                />
              ))}
            </TechCategory>
          </Card>
        </Section>

        <Section id="projects-section" className="content-section1" showDivider={true}>
          <Particles />
          <AnimatedSection threshold={0.1}>
            <div style={{ textAlign: 'center' }}>
              <h2 className="section-header gradient-text">Featured Projects</h2>
            </div>
            <Card variant="project" className="card-container">
              {PROJECTS.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 150} threshold={0.1}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    icon={project.icon}
                    bgGradient={project.bgGradient}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    techStack={project.techStack}
                  />
                </AnimatedSection>
              ))}
            </Card>
          </AnimatedSection>
        </Section>
      </div>
    </div>
  )
}

export default App