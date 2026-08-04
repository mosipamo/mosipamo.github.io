import { useRef } from "react";
import HeroFlourish from "./HeroFlourish.jsx";

function renderAbstract(text, links = []) {
	if (!links.length) return text;
	const pattern = links
		.map((l) => l.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
		.join("|");
	const parts = text.split(new RegExp(`(${pattern})`, "g"));
	return parts.map((part, i) => {
		const link = links.find((l) => l.text === part);
		return link ? (
			<a key={i} href={link.url} target="_blank" rel="noreferrer">
				{part}
			</a>
		) : (
			part
		);
	});
}

export default function Hero({ profile }) {
	const heroRef = useRef(null);

	function handleMouseMove(event) {
		const node = heroRef.current;
		if (!node || !window.matchMedia("(pointer: fine)").matches) return;
		const rect = node.getBoundingClientRect();
		node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
		node.style.setProperty("--my", `${event.clientY - rect.top}px`);
	}

	return (
		<section
			id="abstract"
			className="hero container"
			aria-labelledby="hero-heading"
			ref={heroRef}
			onMouseMove={handleMouseMove}
		>
			<div className="hero__glow" aria-hidden="true" />
			<HeroFlourish />

			<div className="hero__content">
				<p className="hero__eyebrow mono">§0 Abstract</p>

				<div className="hero__title-row">
					<h1 id="hero-heading">{profile.name}</h1>
					<span className="marginalia hero__pronouns" aria-label="pronouns">
						{profile.pronouns}
					</span>
				</div>

				<p className="hero__role">
					{profile.role} at{" "}
					<a href={profile.affiliationUrl} target="_blank" rel="noreferrer">
						{profile.affiliation}
					</a>{" "}
					<span className="hero__location mono">— {profile.location}</span>
				</p>

				<p className="hero__abstract">
					{renderAbstract(profile.abstract, profile.abstractLinks)}
				</p>

				<ul className="hero__tags" aria-label="Research interests, at a glance">
					{profile.researchInterests.map((interest) => (
						<li key={interest.title} className="mono">
							{interest.title}
						</li>
					))}
				</ul>

				<ul className="hero__socials" aria-label="Find me elsewhere">
					{profile.socials.map((social) => (
						<li key={social.label}>
							<a href={social.url} target="_blank" rel="noreferrer">
								{social.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
