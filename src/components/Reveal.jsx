import { useInView } from "../hooks/useInView.js";

export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  ...rest
}) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "reveal--visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
