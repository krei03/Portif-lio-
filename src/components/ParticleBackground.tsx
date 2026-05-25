import React, { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive adaptation
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      pulseSpeed: number;
      pulseValue: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.3; // tiny sleek stars
        this.speedX = Math.random() * 0.15 - 0.075;
        this.speedY = Math.random() * 0.15 - 0.075;
        // subtle shades of white/blueish neon glow
        const r = Math.floor(Math.random() * 50) + 180;
        const g = Math.floor(Math.random() * 50) + 220;
        const b = 255;
        this.color = `rgba(${r}, ${g}, ${b}, ${Math.random() * 0.4 + 0.25})`;
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
        this.pulseValue = Math.random() * Math.PI;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around boundaries
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Pulsing glow
        this.pulseValue += this.pulseSpeed;
      }

      draw(context: CanvasRenderingContext2D) {
        const opacityMultiplier = Math.sin(this.pulseValue) * 0.35 + 0.65;
        context.beginPath();
        context.arc(this.x, this.y, this.size * opacityMultiplier, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(120, Math.floor((width * height) / 14000)); // Adaptive density

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Capture mouse coordinate for gentle magnetic ripple
    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render cosmic grid stars
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);

        // Magnetic attraction to mouse
        if (mouse.x !== -1000) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            // Draw delicate spider-web connections
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle.x + dx * 0.03, particle.y + dy * 0.03); // warp visual effect
            ctx.strokeStyle = `rgba(165, 243, 252, ${0.12 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="cosmic-canvas"
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-transparent"
    />
  );
};
