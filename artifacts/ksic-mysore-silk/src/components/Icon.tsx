export type IconName =
  | 'search' | 'user' | 'heart' | 'bag' | 'menu' | 'close' | 'arrow'
  | 'pin' | 'truck' | 'shield' | 'seal' | 'support' | 'loom'
  | 'instagram' | 'facebook' | 'youtube';

interface IconProps {
  name: IconName;
  className?: string;
}

export default function Icon({ name, className = '' }: IconProps) {
  return <svg className={className} aria-hidden="true"><use href={`#i-${name}`} /></svg>;
}
