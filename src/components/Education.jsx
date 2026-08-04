import Reveal from "./Reveal.jsx";

// `detail` can be a single sentence, or a multi-line string where the
// first line ending in ":" is treated as a lead-in and the rest become
// bullet points (e.g. a "Relevant Coursework:" list).
function TimelineDetail({ detail }) {
  const lines = detail
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length <= 1) {
    return <p className="timeline__detail">{detail}</p>;
  }

  const hasIntro = lines[0].endsWith(":");
  const intro = hasIntro ? lines[0] : null;
  const items = hasIntro ? lines.slice(1) : lines;

  return (
    <>
      {intro && <p className="timeline__detail-intro">{intro}</p>}
      <ul className="timeline__detail-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default function Education({ entries }) {
  if (!entries) return null;

  return (
    <section id="education" className="container section" aria-labelledby="edu-heading">
      <Reveal as="p" className="section__eyebrow mono">
        §2 Education
      </Reveal>
      <Reveal className="section__title-row">
        <h2 id="edu-heading" className="section__title">
          Timeline
        </h2>
        <span className="marginalia">still being written</span>
      </Reveal>

      <ol className="timeline">
        {entries.map((entry, index) => (
          <Reveal as="li" className="timeline__item" key={entry.id} delay={index * 120}>
            <span className="timeline__dot" aria-hidden="true" />
            <span className="timeline__index mono">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="timeline__body">
              <p className="timeline__period mono">{entry.period}</p>
              <h3 className="timeline__degree">{entry.degree}</h3>
              <p className="timeline__institution">
                {entry.institutionUrl ? (
                  <a href={entry.institutionUrl} target="_blank" rel="noreferrer">
                    {entry.institution}
                  </a>
                ) : (
                  entry.institution
                )}
              </p>
              <TimelineDetail detail={entry.detail} />
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
