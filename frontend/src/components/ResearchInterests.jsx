import Reveal from "./Reveal.jsx";

export default function ResearchInterests({ items }) {
  return (
    <section className="container section" aria-labelledby="ri-heading">
      <Reveal as="p" className="section__eyebrow mono">
        §1 Research interests
      </Reveal>
      <Reveal as="h2" id="ri-heading" className="section__title">
        What I keep coming back to
      </Reveal>
      <dl className="research-list">
        {items.map((item, index) => (
          <Reveal
            as="div"
            className="research-list__row"
            key={item.title}
            delay={index * 90}
          >
            <dt>{item.title}</dt>
            <dd>{item.detail}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
