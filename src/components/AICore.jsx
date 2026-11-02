const AICore = ({ className = "" }) => {
  return (
    <div className={`ai-core ${className}`} aria-label="AI core">
      <div className="ai-core-ring ai-core-ring-1" />
      <div className="ai-core-ring ai-core-ring-2" />
      <div className="ai-core-ring ai-core-ring-3" />
      <div className="ai-core-glow" />
      <div className="ai-core-nucleus" />
      <span className="ai-core-label">ARTIFICIAL INTELLIGENCE</span>
    </div>
  );
};

export default AICore;
