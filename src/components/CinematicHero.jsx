import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AICore from "./AICore";
import TechNode from "./TechNode";
import NeuralNetwork from "./NeuralNetwork";
import FloatingParticles from "./FloatingParticles";
import Navbar from "./Navbar";
import { techNodes, aiIntro } from "../data";

gsap.registerPlugin(ScrollTrigger);

const KEYWORDS = ["Python", "PyTorch", "React", "C++", "SQL", "Machine Learning"];

const getCount = (w) => {
  if (w >= 1024) return 8;
  if (w >= 768) return 6;
  return 4;
};

const getRadius = (w) => {
  if (w >= 1024) return 30;
  if (w >= 768) return 24;
  return 17;
};

const getAnchors = (count, radius) => {
  const anchors = [];
  for (let i = 0; i < count; i++) {
    const theta = (i / count) * 2 * Math.PI - Math.PI / 2;
    anchors.push({ x: 50 + radius * Math.cos(theta), y: 50 + radius * Math.sin(theta) });
  }
  return anchors;
};

export default function CinematicHero() {
  const [width, setWidth] = useState(window.innerWidth);
  const count = getCount(width);
  const radius = getRadius(width);
  const anchors = useMemo(() => getAnchors(count, radius), [count, radius]);

  const pinRef = useRef(null);

  useEffect(() => {
    const setW = () => setWidth(window.innerWidth);
    window.addEventListener("resize", setW);
    return () => window.removeEventListener("resize", setW);
  }, []);

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const s1End = 1.5;
      const s2End = 4;

      const root = pinRef.current;
      const core = root.querySelector(".ai-core");
      const nodes = gsap.utils.toArray(".tech-node", root);
      const headline = root.querySelector(".main-headline");
      const subtitle = root.querySelector(".main-subtitle");
      const keywords = root.querySelector(".keywords");
      const reveal = root.querySelector(".developer-reveal");
      const grid = root.querySelector(".ai-grid");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${window.innerHeight * 3}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "heroScroll",
        },
      });

      // --- STAGE 1: AI UNIVERSE ---
      tl.to(core, { rotation: 360, duration: 1.5, ease: "none" }, 0)
        .to(core, {
          boxShadow: "0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(59, 130, 246, 0.3)",
          duration: 1.5,
        }, 0)
        .to(nodes, {
          y: (i) => (i % 2 === 0 ? -10 : 10),
          rotation: (i) => i * 6,
          opacity: 1,
          duration: 1.2,
          ease: "sine.inOut",
          stagger: 0.06,
        }, 0.1)
        .to(headline, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 0.2)
        .to(subtitle, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 0.4);

      // --- STAGE 2: NEURAL NETWORK ACTIVATION ---
      tl.to(core, { y: -120, opacity: 0.15, scale: 0.55, duration: 1.8, ease: "power2.inOut" }, s1End)
        .to(nodes, {
          scale: 1.15,
          y: -40,
          opacity: 1,
          duration: 1.6,
          ease: "power2.inOut",
          stagger: 0.05,
        }, s1End + 0.1)
        .to(".net-line", {
          opacity: 0.5,
          strokeWidth: 1,
          duration: 1.5,
          ease: "power2.inOut",
        }, s1End + 0.2)
        .to(keywords, { opacity: 1, y: 0, duration: 1, stagger: 0.08, ease: "power2.out" }, s1End + 0.4)
        .to(headline, { opacity: 0, y: -20, duration: 0.8 }, s1End + 0.6)
        .to(subtitle, { opacity: 0, y: -20, duration: 0.8 }, s1End + 0.7)
        .to(".particle", {
          y: (i) => -60 - i * 5,
          opacity: 0.9,
          duration: 2,
          ease: "power1.inOut",
          stagger: 0.03,
        }, s1End + 0.8);

      // --- STAGE 3: DEVELOPER REVEAL ---
      tl.to(nodes, { opacity: 0, scale: 0.6, duration: 1.2, ease: "power2.inOut" }, s2End)
        .to(core, { opacity: 0, duration: 1 }, s2End)
        .to(".net-line", { opacity: 0, duration: 1 }, s2End)
        .to(keywords, { opacity: 0, duration: 0.8 }, s2End)
        .to(".particle", { opacity: 0, duration: 0.8 }, s2End)
        .to(grid, { opacity: 1, duration: 1.2, ease: "power2.out" }, s2End + 0.1)
        .to(reveal, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, s2End + 0.3);
    }, pinRef.current);

    return () => ctx.revert();
  }, [prefersReduced, count, anchors, pinRef]);

  return (
    <section ref={pinRef} className="cinematic-hero">
      <Navbar transparent={true} />
      <div className="hero-inner">
        <NeuralNetwork anchors={anchors} center={{ x: 50, y: 50 }} />
        <div className="ai-grid">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="grid-dot" />
          ))}
        </div>
        <div className="core-wrap">
          <AICore className="ai-core-wrap" />
        </div>
        <div className="nodes-wrap">
          {techNodes.slice(0, count).map((node, i) => (
            <TechNode
              key={node.key}
              nodeKey={node.key}
              label={node.label}
              sub={node.sub}
              index={i}
              anchor={anchors[i]}
              className={`node-${node.key}`}
            />
          ))}
        </div>
        <FloatingParticles count={24} />
        <div className="hero-text">
          <h1 className="main-headline">
            Building Intelligence.<br />
            Engineering Possibilities.
          </h1>
          <p className="main-subtitle">
            Exploring the intersection of Artificial Intelligence, Software
            Engineering and Innovation.
          </p>
        </div>
        <div className="keywords">
          {KEYWORDS.map((kw) => (
            <span key={kw} className="keyword-chip">{kw}</span>
          ))}
        </div>
        <div className="developer-reveal">
          <h1 className="reveal-headline">{aiIntro.headline}</h1>
          <p className="reveal-intro">{aiIntro.intro}</p>
          <a
            href={aiIntro.ctaHref}
            className="btn reveal-cta"
            onClick={(e) => {
              e.preventDefault();
              const trigger = ScrollTrigger.getById("heroScroll");
              if (trigger) trigger.kill();
              const target = document.getElementById("projects");
              if (target) {
                setTimeout(() => {
                  window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth",
                  });
                }, 50);
              }
            }}
          >
            {aiIntro.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
