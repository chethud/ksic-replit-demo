import Icon from './Icon';

const assurances = [
  { icon: 'seal', text: '100+ Years of Heritage' },
  { icon: 'loom', text: 'Pure Mysore Silk' },
  { icon: 'shield', text: 'GI Certified' },
  { icon: 'support', text: 'Authentic & Sustainable' },
] as const;

export default function TrustStrip() {
  return (
    <section className="trust" aria-label="Our assurance">
      <div className="trust-list">
        {assurances.map(({ icon, text }) => (
          <div className="trust-item" key={text}><Icon name={icon} /><span>{text}</span></div>
        ))}
      </div>
    </section>
  );
}
