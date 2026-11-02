const NeuralNetwork = ({ anchors, center = { x: 50, y: 50 }, active = 0 }) => {
  return (
    <svg
      className="neural-network"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="netGrad" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <filter id="netGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {anchors.map((a, i) => (
        <line
          key={i}
          x1={center.x}
          y1={center.y}
          x2={a.x}
          y2={a.y}
          stroke="url(#netGrad)"
          strokeWidth="0.6"
          opacity={active > 0 ? 0.45 : 0.12}
          filter="url(#netGlow)"
          className="net-line"
        />
      ))}
      <circle
        cx={center.x}
        cy={center.y}
        r="1.5"
        fill="#8b5cf6"
        opacity={active > 0 ? 0.9 : 0.4}
        filter="url(#netGlow)"
      />
    </svg>
  );
};

export default NeuralNetwork;
