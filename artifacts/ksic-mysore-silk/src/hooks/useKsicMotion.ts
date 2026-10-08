import { useEffect, type Dispatch, type SetStateAction } from 'react';

export function useKsicMotion(setScrolled: Dispatch<SetStateAction<boolean>>) {
  useEffect(() => {
    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        queued = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [setScrolled]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.rv'));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      nodes.forEach((node) => node.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const parent = entry.target.parentElement;
        const stagger = Number(parent?.dataset.stagger || 0);
        const index = parent ? Array.from(parent.children).indexOf(entry.target) : 0;
        (entry.target as HTMLElement).style.transitionDelay = `${index * stagger}ms`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
    if (!nodes.length) return;
    let queued = false;
    const paint = () => {
      const center = window.innerHeight / 2;
      nodes.forEach((node) => {
        const bounds = node.getBoundingClientRect();
        if (bounds.bottom < -120 || bounds.top > window.innerHeight + 120) return;
        const offset = Math.max(-13, Math.min(13, (center - (bounds.top + bounds.height / 2)) * 0.035));
        node.style.setProperty('--parallax-y', `${offset.toFixed(1)}px`);
      });
      queued = false;
    };
    const onScroll = () => {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(paint);
    };
    paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}
