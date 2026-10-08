interface PetalsProps {
  variant: 'hero' | 'occasion';
}

export default function Petals({ variant }: PetalsProps) {
  const petals = variant === 'hero' ? ['petal-a', 'petal-b', 'petal-c'] : ['petal-a', 'petal-b'];
  return (
    <>
      {petals.map((petal) => <span className={`petal ${petal}`} aria-hidden="true" key={`${variant}-${petal}`} />)}
    </>
  );
}
