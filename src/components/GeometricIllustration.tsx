const GeometricIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] animate-float">
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer chevron - blue/purple outline */}
        <path
          d="M120 50 L220 150 L120 250"
          stroke="hsl(230 60% 70%)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-80"
        />
        
        {/* Middle chevron - sand/beige filled */}
        <path
          d="M100 70 L190 150 L100 230"
          stroke="hsl(35 30% 75%)"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-90"
        />
        
        {/* Inner chevron - coral/orange gradient */}
        <defs>
          <linearGradient id="coralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(18 85% 60%)" />
            <stop offset="100%" stopColor="hsl(35 90% 55%)" />
          </linearGradient>
        </defs>
        <path
          d="M80 100 L160 150 L80 200"
          stroke="url(#coralGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Purple accent chevron */}
        <path
          d="M110 90 L180 150 L110 210"
          stroke="hsl(280 40% 65%)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-60"
        />
      </svg>
    </div>
  );
};

export default GeometricIllustration;
