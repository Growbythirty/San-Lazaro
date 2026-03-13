import { useEffect, useRef } from 'react';

const stats = [
  { num: '975+', label: 'Años de Historia' },
  { num: '50+', label: 'Países Presentes' },
  { num: '499', label: 'Seguidores Venezuela' },
  { num: '120+', label: 'Publicaciones' },
];

export default function Stats() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = gridRef.current?.querySelectorAll('.stat-item__num');
    if (!els) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
            (entry.target as HTMLElement).style.opacity = '1';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    els.forEach(el => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.transform = 'translateY(16px)';
      htmlEl.style.opacity = '0';
      htmlEl.style.transition = 'transform .6s ease, opacity .6s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats">
      <div className="container">
        <div className="stats__grid" ref={gridRef}>
          {stats.map(s => (
            <div className="stat-item" key={s.label}>
              <div className="stat-item__num">{s.num}</div>
              <div className="stat-item__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
