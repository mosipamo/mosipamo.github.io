import Reveal from "./Reveal.jsx";

export default function Contact({ profile }) {
  return (
    <section id="contact" className="container section section--contact" aria-labelledby="contact-heading">
      <Reveal>
        <p className="section__eyebrow mono">§5 Open to</p>
        <h2 id="contact-heading" className="section__title">
          Let&apos;s work on something
        </h2>
        <p className="section__note section__note--large">
          I&apos;m currently open to {profile.openTo} Feel free to reach out.
        </p>
        <a className="contact-cta mono" href={`mailto:${profile.email}`}>
          {profile.email} →
        </a>
      </Reveal>
    </section>
  );
}
