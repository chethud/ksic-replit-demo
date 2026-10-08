const services = [
  { number: '01', title: 'Secure Delivery', detail: 'Carefully delivered to you' },
  { number: '02', title: 'Premium Packaging', detail: 'Presented as it deserves' },
  { number: '03', title: 'Certified Authenticity', detail: 'KSIC code & hologram verification' },
  { number: '04', title: 'Support Artisans', detail: 'Keep the craft in motion' },
];

export default function Services() {
  return (
    <section className="services wrap" aria-label="The KSIC experience">
      <div className="service-grid" data-stagger="70">
        {services.map((service) => (
          <div className="service rv" key={service.number}>
            <span className="service-num">{service.number}</span>
            <span><strong>{service.title}</strong><small>{service.detail}</small></span>
          </div>
        ))}
      </div>
    </section>
  );
}
