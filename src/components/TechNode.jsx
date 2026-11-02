const ICON_SVG = {
  ai: `<path d="M19.5 10.5c-.3 2.4-2 4.5-4.5 5.7a13.8 13.8 0 0 1-4.4-1.1c-1.8-.9-2.7-2.8-1.8-4.6 1.1-2.2 3.8-3.6 6-3.6 2.3 0 5 1.4 6.1 3.6Z"/><path d="M12.6 2c-2.3 0-4.2 1.1-5.5 3-.6.9-.6 2 .2 2.7.8.6 2 .6 2.7-.2 1.1-1.6 3-2.6 5.1-2.6Z"/><path d="M4.5 10.5c.3-2.4 2-4.5 4.5-5.7a13.8 13.8 0 0 0 4.4 1.1c1.8.9 2.7 2.8 1.8 4.6-1.1 2.2-3.8 3.6-6 3.6-2.3 0-5-1.4-6.1-3.6Z"/><path d="M11.4 22c2.3 0 4.2-1.1 5.5-3 .6-.9.6-2-.2-2.7-.8-.6-2-.6-2.7.2-1.1 1.6-3 2.6-5.1 2.6Z"/>`,
  ml: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
  dl: `<path d="m12 2 2.7 4.7L22 12l-4.2 5.7L12 22L2 17.7 4.2 12l2.7-4.7z"/><path d="M12 22V2"/>`,
  ds: `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.6 6 3 9 3s9-1.4 9-3V5c0-1.6-6-3-9-3s-9 1.4-9 3Z"/><path d="M3 12c0-1.6 6-3 9-3s9 1.4 9 3"/>`,
  nlp: `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.5 8.5 0 0 1-3.8-.8L3 21l1.9-5.7a8.5 8.5 0 0 1 .8-3.8 8.5 8.5 0 0 1 4.7-7.6 8.5 8.5 0 0 1 3.8-.8h.5a8.48 8.48 0 0 1 8 8.4Z"/>`,
  cv: `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"/><circle cx="12" cy="12" r="3"/>`,
  web: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/>`,
  cyber: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>`,
};

const ICON_MAP = {
  ai: "ai",
  ml: "ml",
  dl: "dl",
  ds: "ds",
  nlp: "nlp",
  cv: "cv",
  web: "web",
  cyber: "cyber",
};

const NodeIcon = ({ name }) => (
  <svg className="node-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: ICON_SVG[name] || ICON_SVG.ml }} />
);

const TechNode = ({ nodeKey, label, sub, index, anchor, className = "" }) => {
  const name = ICON_MAP[nodeKey] || "ml";

  return (
    <div
      className={`tech-node ${className}`}
      style={{
        left: anchor.x,
        top: anchor.y,
      }}
    >
      <div className="node-card">
        <div className="node-badge">{index + 1}</div>
        <NodeIcon name={name} />
        <span className="node-label">{label}</span>
        <span className="node-sub">{sub}</span>
      </div>
    </div>
  );
};

export default TechNode;
