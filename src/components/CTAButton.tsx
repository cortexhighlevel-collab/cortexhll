interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const CTAButton = ({ href, children, icon, className = "" }: CTAButtonProps) => {
  return (
    <div className={`btn-cta-wrapper ${className}`}>
      <a href={href} className="btn-cta">
        <span className="btn-cta-text">{children}</span>
        {icon && <span className="btn-cta-icon">{icon}</span>}
      </a>
    </div>
  );
};

export default CTAButton;
