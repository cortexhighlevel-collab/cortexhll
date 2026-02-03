const LogoMarquee = () => {
  const logos = [{
    type: 'svg',
    name: 'Meta',
    svg: <svg viewBox="0 0 120 24" className="h-6 w-auto">
        <path fill="currentColor" d="M6.09 20c-2.04 0-3.87-.67-5.05-2.24C.36 16.81 0 15.45 0 13.86c0-2.2.68-4.36 2.07-6.34C3.76 5.16 5.9 4 8.25 4c1.78 0 3.17.56 4.13 1.55 1.03 1.06 1.72 2.67 2.5 4.78l.1.27.1-.27c.78-2.11 1.47-3.72 2.5-4.78C18.53 4.56 19.93 4 21.71 4c2.35 0 4.49 1.16 6.18 3.52 1.39 1.98 2.07 4.14 2.07 6.34 0 1.59-.36 2.95-1.04 3.9-1.18 1.57-3.01 2.24-5.05 2.24-2.18 0-4.1-.89-5.57-2.76-.63-.8-1.17-1.74-1.66-2.85l-.68-1.51-.68 1.51c-.49 1.11-1.03 2.05-1.66 2.85C12.19 19.11 10.27 20 6.09 20z" />
      </svg>
  }, {
    type: 'svg',
    name: 'Nubank',
    svg: <svg viewBox="0 0 100 24" className="h-5 w-auto">
        <path fill="currentColor" d="M10.5 4.5v15h-3v-9l-6 9H0v-15h3v9l6-9h1.5zM22.5 19.5h-3v-1.2c-.9 1-2.1 1.5-3.6 1.5-2.7 0-4.5-1.8-4.5-4.8v-5.4h3v5.1c0 1.5.9 2.4 2.4 2.4 1.5 0 2.7-1.1 2.7-2.7V9.6h3v9.9zM35.3 11.7c-.9-.6-1.8-.9-2.7-.9-1.8 0-3 1.2-3 3s1.2 3 3 3c.9 0 1.8-.3 2.7-.9v2.7c-1.1.6-2.1.9-3.3.9-3.3 0-5.7-2.4-5.7-5.7s2.4-5.7 5.7-5.7c1.2 0 2.2.3 3.3.9v2.7z" />
      </svg>
  }, {
    type: 'text',
    name: 'Google'
  }, {
    type: 'text',
    name: 'TRIDENT'
  }, {
    type: 'text',
    name: 'WILLBANK'
  }, {
    type: 'svg',
    name: 'Uber',
    svg: <svg viewBox="0 0 80 24" className="h-5 w-auto">
        <path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12c3.2 0 6-1.2 8.2-3.2v2.8h4V0h-4v2.8C18 1.2 15.2 0 12 0zm0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8c2.2 0 4.2.9 5.6 2.4 1.4 1.4 2.4 3.4 2.4 5.6 0 4.4-3.6 8-8 8zm24-8c0-3.6 2.8-6 6.4-6 2.4 0 4.4 1.2 5.6 3.2l-3.2 1.8c-.6-1-1.4-1.4-2.4-1.4-1.6 0-2.8 1.2-2.8 2.8v.4c0 1.6 1.2 2.8 2.8 2.8 1 0 1.8-.4 2.4-1.4l3.2 1.8C47.2 18 45.2 19.2 42.8 19.2 39.2 19.2 36 16.4 36 12.4v-.4zm20.8-5.6c-3.6 0-6.4 2.4-6.4 6v.4c0 3.6 2.8 6 6.4 6 2.4 0 4.4-1.2 5.6-3.2l-3.2-1.8c-.6 1-1.4 1.4-2.4 1.4-1.6 0-2.8-1.2-2.8-2.8h8.8v-.4c0-3.2-2.4-5.6-6-5.6zm-2.8 4.8c.2-1.2 1.4-2 2.8-2s2.6.8 2.8 2h-5.6z" />
      </svg>
  }, {
    type: 'svg',
    name: 'Renner',
    svg: <svg viewBox="0 0 100 24" className="h-5 w-auto">
        <path fill="currentColor" d="M10 4h8c3.3 0 6 2.7 6 6 0 2.5-1.5 4.5-3.6 5.4L24 20h-4l-3.2-4H14v4h-4V4zm8 8c1.1 0 2-.9 2-2s-.9-2-2-2h-4v4h4z" />
      </svg>
  }, {
    type: 'text',
    name: 'HOTMART'
  }, {
    type: 'text',
    name: 'SAMSUNG'
  }, {
    type: 'svg',
    name: 'Globo',
    svg: <svg viewBox="0 0 80 24" className="h-6 w-auto">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
  }, {
    type: 'svg',
    name: 'iFood',
    svg: <svg viewBox="0 0 80 24" className="h-5 w-auto">
        <path fill="currentColor" d="M4 6h2v12H4V6zm6 0h2v2h-2V6zm0 4h2v8h-2v-8zm6-4h6v2h-4v2h3v2h-3v4h-2V6zm10 0h6v2h-4v2h3v2h-3v4h-2V6z" />
      </svg>
  }];
  const LogoItem = ({
    logo
  }: {
    logo: typeof logos[0];
  }) => <div className="logo-item flex items-center justify-center px-6 h-20 text-white opacity-80">
      {logo.type === 'svg' ? logo.svg : <span className="font-bold text-xl tracking-tight text-white">{logo.name}</span>}
    </div>;
  return <section className="w-full pt-8 pb-16 bg-[#f06800] relative">
      {/* Linha divisória */}
      <div className="w-full h-px bg-white/30 mb-6"></div>
      {/* Title */}
      

      {/* Marquee Container */}
      <div className="marquee-container relative overflow-hidden marquee-mask">
        <div className="marquee-content flex">
          {/* First set of logos */}
          {logos.map((logo, index) => <LogoItem key={`first-${index}`} logo={logo} />)}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => <LogoItem key={`second-${index}`} logo={logo} />)}
        </div>
      </div>
    </section>;
};
export default LogoMarquee;