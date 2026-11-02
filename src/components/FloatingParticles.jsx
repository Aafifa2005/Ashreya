import { useMemo } from "react";

const PARTICLE_COUNT = 24;

const makeParticles = (count) => {
  const list = [];
  for (let i = 0; i < count; i++) {
    list.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: 0.4 + Math.random() * 0.8,
      d: 0.5 + Math.random() * 1.5,
      delay: -Math.random() * 8,
    });
  }
  return list;
};

const FloatingParticles = ({ count = PARTICLE_COUNT }) => {
  const particles = useMemo(() => makeParticles(count), [count]);

  return (
    <div className="particles-layer" aria-hidden="true" role="presentation">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.s}px`,
            height: `${p.s}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.d + 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
