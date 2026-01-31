import logo from '../assets/b4260d6bd0c3e2c1fba98dbcd5bf26b96f790458.png';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-12 w-auto" }: LogoProps) {
  return (
    <img 
      src={logo} 
      alt="SONICITE" 
      className={`object-cover object-left ${className}`} 
    />
  );
}
