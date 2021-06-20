const Logo = () => {
  return (
    <div className="logo">
      <LogoSvg />
      <span className="logo__text">Hamro IPO</span>
    </div>
  );
};

const LogoSvg = () => (
  <svg width="50" height="50" viewBox="0 0 218 367" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M217.5 362.63V4L37.7609 183.739L217.5 362.63Z" fill="#147AD8" />
    <g filter="url(#filter0_d)">
      <path d="M3 258.348V122.696V108.283L107.283 4V362.63L3 258.348Z" fill="#147AD8" />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="112.283"
        height="366.63"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx="1" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default Logo;
