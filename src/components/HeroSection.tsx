const ProfileStack = () => {
  const profiles = [
    "https://framerusercontent.com/images/W25OSdXNijQzs6HFOy5Tnx7SI.jpg",
    "https://framerusercontent.com/images/XkZDFV2RkODhiEIHZaZGoYIBdY.jpg",
    "https://framerusercontent.com/images/rOuv1z818S3i8SIQTmjJqH3ghKE.jpg",
  ];

  return (
    <div className="flex items-center relative h-12 mr-6">
      {profiles.map((src, index) => (
        <div key={index} className="profile-bubble">
          <img src={src} alt="Student" className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="profile-bubble bg-muted flex items-center justify-center text-sm font-normal text-muted-foreground tracking-wide">
        13K+
      </div>
    </div>
  );
};

const CTAArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 40 41">
    <path d="M 20 40.549 C 8.954 40.549 0 31.594 0 20.549 L 0 20.549 C 0 9.503 8.954 0.549 20 0.549 L 20 0.549 C 31.046 0.549 40 9.503 40 20.549 L 40 20.549 C 40 31.594 31.046 40.549 20 40.549 Z" fill="rgb(255,255,255)"></path>
    <path d="M 25.833 20.549 L 14.167 20.549" fill="transparent" strokeWidth="1.5" stroke="rgb(50,50,50)" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M 21.667 24.715 L 25.833 20.549" fill="transparent" strokeWidth="1.5" stroke="rgb(50,50,50)" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M 21.667 16.382 L 25.833 20.549" fill="transparent" strokeWidth="1.5" stroke="rgb(50,50,50)" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

export const HeroSection = () => {
  return (
    <main className="w-full max-w-[1800px] px-5 md:px-12 flex flex-col gap-12 mt-10 md:mt-20">
      {/* H1 Headline */}
      <h1 className="hero-title max-w-[800px]">
        Aprenda a dirigir<br />tecnologia com criatividade
      </h1>

      {/* Content Column */}
      <div className="flex flex-col gap-6 mt-16">
        {/* Profile Stack */}
        <ProfileStack />

        {/* Subtext */}
        <p className="text-[clamp(18px,2vw,25px)] leading-[1.2] text-foreground/90">
          <span className="font-light">Somos a</span> <strong className="font-bold">Human Academy</strong><br />
          A maior escola de IA para<br />profissionais criativos.
        </p>

        {/* CTA Button */}
        <a href="#metodologia" className="btn-cta">
          Comece sua jornada agora
          <CTAArrowIcon />
        </a>
      </div>
    </main>
  );
};

export default HeroSection;
