export default function Footer({ name }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__row mono">
        <span>
          © {year} {name}
        </span>
        <a href="https://github.com/mosipamo" target="_blank" rel="noreferrer">
          github.com/mosipamo
        </a>
      </div>
    </footer>
  );
}
