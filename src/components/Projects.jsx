import Reveal from "./Reveal.jsx";

export default function Projects({ items }) {
  if (!items) return null;

  return (
    <section id="projects" className="container section" aria-labelledby="proj-heading">
      <Reveal as="p" className="section__eyebrow mono">
        §3 Projects
      </Reveal>
      <Reveal as="h2" id="proj-heading" className="section__title">
        Selected work
      </Reveal>
      <Reveal as="p" className="section__note">
        A few things I&apos;ve built. See everything on{" "}
        <a href="https://github.com/mosipamo" target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </Reveal>

      <ul className="project-grid">
        {items.map((project, index) => (
          <Reveal as="li" className="project-card" key={project.id} delay={index * 100}>
            <p className="project-card__period mono">{project.period}</p>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__summary">{project.summary}</p>
            <ul className="project-card__tags" aria-label="Technologies used">
              {project.tags.map((tag) => (
                <li key={tag} className="mono">
                  {tag}
                </li>
              ))}
            </ul>
            <div className="project-card__links">
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
