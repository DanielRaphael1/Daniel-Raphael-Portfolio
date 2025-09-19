import './App.css'
import Particles from './components/Particles'
import ContactItem from './components/ContactItem'
import Section from './components/Section'
import Card from './components/Card'
import ProjectCard from './components/ProjectCard'
import Button from './components/Button'
import Language from './components/Language'
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { BsRobot, BsChatDots } from 'react-icons/bs'
import { RiRobot2Line } from 'react-icons/ri'
import { TbChartBar } from 'react-icons/tb'

// Profile data constants for easy maintenance
const PROFILE_DATA = {
  name: "Daniel Raphael",
  title: "Software Engineer",
  availability: "Available for Software Development Positions",
  bio: "Results-driven software engineer specializing in designing, developing, and optimizing scalable applications with code so clean even vibe coders can follow."
}

// Projects data for scalability
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
    githubUrl: "https://github.com/DanielRaphael1",
    techStack: ["PostgreSQL", "NextJS", "Rest APIs", "Docker/Kubernetes", "Redis", "AWS"]
  },
  {
    id: 3,
    title: "Data Analytics Dashboard",
    description: "Real-time data visualization dashboard for business intelligence and analytics, combining the two other projects for a comprehensive solution",
    icon: <TbChartBar size={80} />,
    bgGradient: "linear-gradient(135deg, rgba(30, 144, 180, 0.15) 0%, rgba(20, 20, 30, 0.95) 100%)",
    githubUrl: "https://github.com/DanielRaphael1",
    techStack: ["nextJS", "expressJS", "mySQL", "REST APIs", "Kubernetes/docker"]
  }
]

function App() {
  return (
    <div className="container">
      <header className="title-box">
        <h1>{PROFILE_DATA.name}</h1>
      </header>

      <Section className="main-content" showDivider={true}>
        <Particles />
        <div className="hero-badge">{PROFILE_DATA.availability}</div>

        <section className="hero-section">
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
          <h3 className="subtitle">{PROFILE_DATA.title}</h3>
          <p className="bio">
            "{PROFILE_DATA.bio}"
          </p>
        </section>
        <section className="links-section">
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
        </section>
      </Section>
      
      <Section showDivider={true}>
        <Particles />
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-header gradient-text">About Me</h2>
        </div>
        {/* Add your content here */}
        <Card variant="about">
            <p>
              I'm a full-stack developer with a passion for building modern web applications.
              I enjoy turning complex problems into simple, effective solutions and focus on creating scalable, user-friendly experiences. 
            </p>
          <div className="about-card-item">
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
          </div>
          <div className="about-card-column">
            <div className="about-card-item">
              <h3>Languages</h3>
              <div className="language-bars-container">
                <Language flag="🇺🇸" name="English" level="Native" />
                <Language flag="🇮🇱" name="Hebrew" level="Native" />
              </div>
            </div>
            <div className="about-card-item">
              <h3>Fun Fact</h3>
              <p>Big fan of chess here, always up for a game!</p>
            </div>
          </div>
        </Card>
      </Section> 

        <Section showDivider={true}>
        <Particles />
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-header gradient-text">My Stack</h2>
        </div>

      </Section>


          <Section className="content-section1" showDivider={true}>
            <Particles />
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-header gradient-text">Featured Projects</h2>
        </div>
        <Card variant="project" className="card-container">
          {PROJECTS.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              icon={project.icon}
              bgGradient={project.bgGradient}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              techStack={project.techStack}
            />
          ))}
        </Card>
      </Section>

    </div>
    
  )
}

export default App