import ThemeToggle from "./ThemeToggle.jsx";

const LINKS = [
	{ href: "#abstract", label: "Abstract" },
	{ href: "#education", label: "Education" },
	{ href: "#projects", label: "Projects" },
	{ href: "#skills", label: "Skills" },
	{ href: "#contact", label: "Contact" },
];

function initials(name) {
	return name
		.split(" ")
		.map((part) => part[0])
		.join("")
		.slice(0, 3);
}

export default function Header({ name }) {
	return (
		<header className="site-header">
			<div className="container site-header__row">
				<a href="#top" className="site-header__mark mono">
					{initials(name)}
				</a>
				<nav className="site-header__nav" aria-label="Sections">
					{LINKS.map((link) => (
						<a key={link.href} href={link.href} className="mono">
							<span className="site-header__pilcrow">§</span>
							{link.label}
						</a>
					))}
					<a
						href="/CV.pdf"
						target="_blank"
						rel="noreferrer"
						download="Mohammad_Sina_Parvizi_CV.pdf"
						className="mono site-header__cv-btn"
					>
						↓ CV
					</a>
				</nav>
				<ThemeToggle />
			</div>
		</header>
	);
}
