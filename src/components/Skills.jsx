import Reveal from "./Reveal.jsx";

export default function Skills({ groups }) {
  if (!groups) return null;

  return (
    <section id="skills" className="container section" aria-labelledby="skills-heading">
      <Reveal as="p" className="section__eyebrow mono">
        §4 Skills
      </Reveal>
      <Reveal as="h2" id="skills-heading" className="section__title">
        Toolbox
      </Reveal>

      <div className="skills-groups">
        {groups.map((group, index) => (
          <Reveal className="skills-group" key={group.category} delay={index * 90}>
            <h3 className="skills-group__label mono">{group.category}</h3>
            <ul className="skills-group__chips">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
