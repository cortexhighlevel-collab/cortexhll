import { useRef, useState } from "react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const CTAButton = ({ href, children, icon, className = "" }: CTAButtonProps) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [glowPosition, setGlowPosition] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const buttonWidth = rect.width;
    const glowWidth = 15; // Width of the glow in percentage

    // Calculate position as percentage and center the glow
    let percentage = ((mouseX / buttonWidth) * 100) - (glowWidth / 2);

    // Clamp the value to prevent glow from exceeding button edges
    if (percentage < 0) percentage = 0;
    if (percentage > 100 - glowWidth) percentage = 100 - glowWidth;

    setGlowPosition(percentage);
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`btn-cta ${className}`}
      style={{ "--glow-left": `${glowPosition}%` } as React.CSSProperties}
      onMouseMove={handleMouseMove}
    >
      <span className="btn-cta-noise" aria-hidden="true" />
      <span className="btn-cta-text">{children}</span>
      {icon && <span className="btn-cta-icon">{icon}</span>}
    </a>
  );
};

export default CTAButton;
