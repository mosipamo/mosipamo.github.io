// A loose network graph that draws itself in on load — nods to the
// research-interests content (AI/ML) without leaning on terminal/matrix
// cliches. pathLength="1" lets every edge animate over a uniform 0→1
// range regardless of its actual length.
const NODES = [
  { id: "n1", x: 40, y: 60 },
  { id: "n2", x: 150, y: 30 },
  { id: "n3", x: 260, y: 70 },
  { id: "n4", x: 90, y: 150 },
  { id: "n5", x: 220, y: 170 },
  { id: "n6", x: 320, y: 140 },
  { id: "n7", x: 170, y: 240 },
  { id: "n8", x: 40, y: 220 },
  { id: "n9", x: 300, y: 250 },
];

const EDGES = [
  ["n1", "n2"],
  ["n2", "n3"],
  ["n1", "n4"],
  ["n2", "n5"],
  ["n3", "n6"],
  ["n4", "n5"],
  ["n5", "n6"],
  ["n4", "n8"],
  ["n5", "n7"],
  ["n6", "n9"],
  ["n7", "n8"],
  ["n7", "n9"],
];

function nodeById(id) {
  return NODES.find((n) => n.id === id);
}

export default function HeroFlourish() {
  return (
    <svg
      className="hero-flourish"
      viewBox="0 0 360 300"
      aria-hidden="true"
      focusable="false"
    >
      {EDGES.map(([fromId, toId], i) => {
        const from = nodeById(fromId);
        const to = nodeById(toId);
        return (
          <line
            key={`${fromId}-${toId}`}
            className="hero-flourish__edge"
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            pathLength="1"
            style={{ animationDelay: `${i * 90}ms` }}
          />
        );
      })}
      {NODES.map((node, i) => (
        <circle
          key={node.id}
          className="hero-flourish__node"
          cx={node.x}
          cy={node.y}
          r={i % 3 === 0 ? 5 : 3.4}
          style={{ animationDelay: `${900 + i * 70}ms` }}
        />
      ))}
    </svg>
  );
}
