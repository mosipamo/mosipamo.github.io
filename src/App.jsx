import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ResearchInterests from "./components/ResearchInterests.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

// Content is bundled at build time (see src/data/*.json) so the site can be
// deployed as static files to GitHub Pages with no backend required.
// These files are kept in sync with backend/data/*.json, which the Express
// API in backend/ still serves — swap back to a fetch() against that API
// (see git history / README) if the site later needs live/dynamic content.
import profile from "./data/profile.json";
import education from "./data/education.json";
import projects from "./data/projects.json";
import skills from "./data/skills.json";

export default function App() {
  return (
    <>
      <Header name={profile.name} />
      <main>
        <Hero profile={profile} />
        <ResearchInterests items={profile.researchInterests} />
        <Education entries={education} />
        <Projects items={projects} />
        <Skills groups={skills} />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}
