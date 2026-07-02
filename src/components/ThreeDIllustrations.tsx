import React from 'react';

// Wrapper with floating motion classes
export const FloatWrapper: React.FC<{ children: React.ReactNode; delay?: string; className?: string }> = ({ 
  children, 
  delay = '0s', 
  className = '' 
}) => {
  return (
    <div 
      className={`animate-[float_6s_ease-in-out_infinite] ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};

// 1. Stacked Books with yellow glasses (for Banner Left)
export const BannerLeftIllustration: React.FC = () => {
  return (
    <FloatWrapper className="w-48 h-48 drop-shadow-xl select-none flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="book1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>
          <linearGradient id="book2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#F472B6" />
          </linearGradient>
          <linearGradient id="book3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
          <linearGradient id="glasses" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>

        {/* Shadow */}
        <ellipse cx="100" cy="170" rx="70" ry="15" fill="rgba(0,0,0,0.15)" />

        {/* Bottom Book (Green) */}
        <g transform="translate(0, -10)">
          <path d="M 40 140 Q 40 130 50 130 L 150 130 Q 160 130 160 140 L 155 160 Q 155 165 145 165 L 45 165 Q 35 165 40 140 Z" fill="url(#book3)" />
          <path d="M 45 155 L 145 155 L 145 163 L 45 163 Z" fill="#E0F2FE" /> {/* pages */}
          <path d="M 40 140 L 150 140 L 150 145 L 40 145 Z" fill="#047857" opacity="0.3" />
        </g>

        {/* Middle Book (Pink) */}
        <g transform="translate(5, -28)">
          <path d="M 45 120 Q 45 110 55 110 L 145 110 Q 155 110 155 120 L 150 140 Q 150 145 140 145 L 50 145 Q 40 145 45 120 Z" fill="url(#book2)" />
          <path d="M 50 132 L 140 132 L 140 140 L 50 140 Z" fill="#FDF2F8" /> {/* pages */}
          <path d="M 45 120 L 145 120 L 145 124 L 45 124 Z" fill="#BE185D" opacity="0.3" />
        </g>

        {/* Top Book (Blue/Indigo) */}
        <g transform="translate(-5, -45)">
          <path d="M 50 100 Q 50 90 60 90 L 140 90 Q 150 90 150 100 L 145 120 Q 145 125 135 125 L 55 125 Q 45 125 50 100 Z" fill="url(#book1)" />
          <path d="M 55 112 L 135 112 L 135 120 L 55 120 Z" fill="#EEF2FF" /> {/* pages */}
          <path d="M 50 100 L 140 100 L 140 104 L 50 104 Z" fill="#4338CA" opacity="0.3" />
        </g>

        {/* Yellow Glasses sitting on top */}
        <g transform="translate(10, -50)">
          {/* Left Lens Frame */}
          <circle cx="75" cy="90" r="18" stroke="url(#glasses)" strokeWidth="6" fill="none" />
          <circle cx="75" cy="90" r="14" fill="rgba(251, 191, 36, 0.2)" />
          
          {/* Right Lens Frame */}
          <circle cx="115" cy="90" r="18" stroke="url(#glasses)" strokeWidth="6" fill="none" />
          <circle cx="115" cy="90" r="14" fill="rgba(251, 191, 36, 0.2)" />

          {/* Bridge */}
          <path d="M 93 90 Q 95 84 97 90" stroke="url(#glasses)" strokeWidth="5" fill="none" />

          {/* Glare reflections */}
          <circle cx="70" cy="85" r="3" fill="white" opacity="0.6" />
          <circle cx="110" cy="85" r="3" fill="white" opacity="0.6" />
        </g>
      </svg>
    </FloatWrapper>
  );
};

// 2. Bookshelf with colorful books (for Banner Right)
export const BannerRightIllustration: React.FC = () => {
  return (
    <FloatWrapper className="w-48 h-48 drop-shadow-xl select-none flex items-center justify-center" delay="1s">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="shelfGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="purpleBook" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
          <linearGradient id="blueBook" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="tealBook" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>
        </defs>

        {/* Shelf Shadow */}
        <ellipse cx="100" cy="175" rx="75" ry="12" fill="rgba(0,0,0,0.15)" />

        {/* Claymorphic Wood Shelf Base */}
        <path d="M 25 140 C 25 130 175 130 175 140 L 170 155 C 170 162 30 162 30 155 Z" fill="url(#shelfGrad)" />
        {/* Shelf Legs */}
        <path d="M 45 155 C 45 155 40 175 50 175 C 60 175 55 155 55 155 Z" fill="#B45309" />
        <path d="M 145 155 C 145 155 140 175 150 175 C 160 175 155 155 155 155 Z" fill="#B45309" />

        {/* Books Standing on Shelf */}
        {/* Book 1 (Purple - Standing vertical) */}
        <g transform="translate(110, 45)">
          <rect x="0" y="20" width="16" height="70" rx="3" fill="url(#purpleBook)" />
          {/* Spine design */}
          <rect x="3" y="25" width="10" height="5" fill="#C084FC" />
          <rect x="3" y="35" width="10" height="3" fill="#C084FC" />
          <circle cx="8" cy="70" r="3" fill="#C084FC" />
        </g>

        {/* Book 2 (Teal - Standing slightly tilted) */}
        <g transform="translate(130, 45) rotate(10 10 90)">
          <rect x="0" y="15" width="18" height="75" rx="3" fill="url(#tealBook)" />
          <rect x="4" y="22" width="10" height="6" fill="#2DD4BF" />
          <line x1="4" y1="35" x2="14" y2="35" stroke="#2DD4BF" strokeWidth="2" />
          <line x1="4" y1="40" x2="14" y2="40" stroke="#2DD4BF" strokeWidth="2" />
        </g>

        {/* Book Stack on the Left of Shelf */}
        <g transform="translate(35, 60)">
          {/* Bottom Book */}
          <rect x="0" y="55" width="65" height="16" rx="4" fill="url(#blueBook)" />
          <rect x="6" y="59" width="53" height="8" fill="#DBEAFE" /> {/* Pages */}
          <rect x="0" y="55" width="5" height="16" fill="#1D4ED8" />

          {/* Top Book */}
          <rect x="8" y="42" width="50" height="14" rx="4" fill="#EF4444" />
          <rect x="13" y="46" width="40" height="6" fill="#FEE2E2" /> {/* Pages */}
          <rect x="8" y="42" width="5" height="14" fill="#B91C1C" />
        </g>

        {/* Golden Ring ornament on shelf */}
        <circle cx="105" cy="130" r="8" stroke="#FBBF24" strokeWidth="3" fill="none" />
      </svg>
    </FloatWrapper>
  );
};

// 3D-Like Icon: Stack of Books
export const StackedBooksIcon: React.FC<{ active?: boolean }> = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24">
      <defs>
        <linearGradient id="bBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="bOrange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="80" rx="35" ry="8" fill="rgba(0,0,0,0.1)" />
      
      {/* Book 1 (Bottom) */}
      <path d="M 20 65 Q 20 58 28 58 L 72 58 Q 80 58 80 65 L 76 75 Q 76 78 68 78 L 24 78 Q 16 78 20 65 Z" fill="url(#bBlue)" />
      <path d="M 23 71 L 73 71 L 73 76 L 23 76 Z" fill="#EFF6FF" />
      
      {/* Book 2 (Top) */}
      <path d="M 25 50 Q 25 43 33 43 L 67 43 Q 75 43 75 50 L 71 60 Q 71 63 63 63 L 29 63 Q 21 63 25 50 Z" fill="url(#bOrange)" />
      <path d="M 28 56 L 68 56 L 68 61 L 28 61 Z" fill="#FFF7ED" />
      <rect x="42" y="43" width="6" height="15" fill="#3B82F6" rx="1" /> {/* bookmark */}
    </svg>
  );
};

// 3D-Like Icon: Red Book on Yellow BG
export const RedBookIcon: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24">
      <defs>
        <linearGradient id="rGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>
        <linearGradient id="gGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="80" rx="35" ry="8" fill="rgba(0,0,0,0.1)" />

      {/* Red book */}
      <g transform="translate(15, 15) rotate(-5 35 35)">
        <rect x="10" y="10" width="50" height="60" rx="5" fill="url(#rGrad)" />
        {/* Spine accent */}
        <rect x="10" y="10" width="8" height="60" rx="1" fill="#991B1B" />
        <rect x="13" y="18" width="2" height="44" fill="#FCA5A5" opacity="0.4" />
        {/* Ribbon bookmark leaking out */}
        <path d="M 35 70 L 39 82 L 35 79 L 31 82 Z" fill="#FBBF24" />
        {/* Gold Emblem on Cover */}
        <circle cx="35" cy="40" r="8" fill="none" stroke="#FBBF24" strokeWidth="2.5" />
        <polygon points="35,35 37,39 41,39 38,42 39,46 35,44 31,46 32,42 29,39 33,39" fill="#FBBF24" />
      </g>
      {/* Little green sprout on top right */}
      <g transform="translate(68, 12)">
        <path d="M 0 10 Q 10 0 15 12" stroke="#059669" strokeWidth="3" fill="none" />
        <path d="M 12 12 C 18 5 25 10 12 18 Z" fill="url(#gGrad)" />
      </g>
    </svg>
  );
};

// 3D-Like Icon: Open Book with violet elements
export const OpenBookIcon: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24">
      <defs>
        <linearGradient id="vGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="82" rx="35" ry="6" fill="rgba(0,0,0,0.1)" />

      {/* Book cover (back/under) */}
      <path d="M 15 64 Q 50 72 85 64 L 85 24 Q 50 32 15 24 Z" fill="#4C1D95" />

      {/* Pages left */}
      <path d="M 17 61 Q 50 69 50 63 L 50 23 Q 50 29 17 21 Z" fill="#F3E8FF" />
      <path d="M 19 59 Q 50 67 50 61 L 50 21 Q 50 27 19 19 Z" fill="#FFFFFF" />

      {/* Pages right */}
      <path d="M 83 61 Q 50 69 50 63 L 50 23 Q 50 29 83 21 Z" fill="#E8D5FF" />
      <path d="M 81 59 Q 50 67 50 61 L 50 21 Q 50 27 81 19 Z" fill="#FFFFFF" />

      {/* Mock lines of text on pages */}
      <line x1="25" y1="30" x2="42" y2="34" stroke="#D8B4FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="25" y1="38" x2="40" y2="42" stroke="#D8B4FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="25" y1="46" x2="44" y2="50" stroke="#D8B4FE" strokeWidth="2.5" strokeLinecap="round" />

      <line x1="58" y1="34" x2="75" y2="30" stroke="#D8B4FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="60" y1="42" x2="75" y2="38" stroke="#D8B4FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="56" y1="50" x2="75" y2="46" stroke="#D8B4FE" strokeWidth="2.5" strokeLinecap="round" />

      {/* Center binder */}
      <line x1="50" y1="21" x2="50" y2="61" stroke="url(#vGrad)" strokeWidth="3" />
      
      {/* Floating stars */}
      <polygon points="50,10 52,14 56,14 53,17 54,21 50,19 46,21 47,17 44,14 48,14" fill="#F59E0B" />
    </svg>
  );
};

// 3D-Like Icon: Coffee Cup & Pencil
export const CoffeeCupIcon: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24">
      <defs>
        <linearGradient id="cGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#DB2777" />
        </linearGradient>
        <linearGradient id="coffeeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#78350F" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="82" rx="35" ry="6" fill="rgba(0,0,0,0.1)" />

      {/* Red/Pink mug */}
      <g transform="translate(10, 0)">
        {/* Handle */}
        <path d="M 52 40 C 65 40 65 60 52 60" stroke="url(#cGrad)" strokeWidth="7" fill="none" strokeLinecap="round" />
        
        {/* Cup Body */}
        <path d="M 22 30 C 22 30 20 68 37 68 C 54 68 52 30 52 30 Z" fill="url(#cGrad)" />
        
        {/* Liquid Surface */}
        <ellipse cx="37" cy="30" rx="15" ry="4" fill="url(#coffeeGrad)" />
        
        {/* Steam */}
        <path d="M 32 22 Q 35 15 32 10" stroke="#FBCFE8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M 42 22 Q 45 14 42 8" stroke="#FBCFE8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      </g>

      {/* Pencil leaning behind */}
      <g transform="translate(15, 20) rotate(45 50 50)">
        <rect x="46" y="20" width="8" height="45" fill="#FBBF24" rx="1" />
        <polygon points="46,20 54,20 50,12" fill="#FDE047" />
        <polygon points="49,12 51,12 50,8" fill="#1F2937" />
        <rect x="46" y="60" width="8" height="5" fill="#F472B6" /> {/* Eraser */}
        <rect x="46" y="57" width="8" height="3" fill="#9CA3AF" /> {/* Metal band */}
      </g>
    </svg>
  );
};

// 3D-Like Icon: Tilted Stacked Books (Violet)
export const TiltedStackedIcon: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24">
      <defs>
        <linearGradient id="pGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="85" rx="32" ry="6" fill="rgba(0,0,0,0.12)" />

      {/* Back book (standing tilted) */}
      <g transform="translate(12, 10) rotate(-15 30 45)">
        <rect x="15" y="15" width="30" height="60" rx="4" fill="url(#pGrad)" />
        <rect x="15" y="15" width="5" height="60" fill="#4C1D95" />
        <line x1="25" y1="25" x2="40" y2="25" stroke="#DDD6FE" strokeWidth="2" />
        <line x1="25" y1="32" x2="35" y2="32" stroke="#DDD6FE" strokeWidth="2" />
      </g>

      {/* Front book (tilted more, leaning) */}
      <g transform="translate(35, 12) rotate(15 30 45)">
        <rect x="15" y="15" width="30" height="60" rx="4" fill="#C084FC" />
        <rect x="15" y="15" width="5" height="60" fill="#7E22CE" />
        <circle cx="30" cy="45" r="5" fill="#FAE8FF" />
      </g>
    </svg>
  );
};

// 3D-Like Icon: Cute Book with Smile (Illustration)
export const CuteCloudBookIcon: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24">
      <defs>
        <linearGradient id="tGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="100%" stopColor="#0D9488" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="82" rx="35" ry="6" fill="rgba(0,0,0,0.1)" />

      {/* Book Body */}
      <g transform="translate(25, 20)">
        <rect x="0" y="0" width="50" height="50" rx="8" fill="url(#tGrad)" />
        {/* Cover Spine */}
        <path d="M 0 0 L 10 0 L 10 50 L 0 50 Z" fill="#047857" opacity="0.3" />

        {/* Cute Cloud Character in Center */}
        <g transform="translate(10, 12)">
          {/* Cloud body */}
          <path d="M 10 20 Q 5 15 12 10 Q 15 5 22 10 Q 30 5 32 12 Q 38 15 32 22 Q 25 25 15 22 Z" fill="#FFFFFF" />
          {/* Cute face */}
          <circle cx="17" cy="14" r="1.5" fill="#1F2937" />
          <circle cx="27" cy="14" r="1.5" fill="#1F2937" />
          {/* Smile */}
          <path d="M 20 17 Q 22 20 24 17" stroke="#1F2937" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Blush */}
          <circle cx="14" cy="16" r="1.5" fill="#F472B6" />
          <circle cx="30" cy="16" r="1.5" fill="#F472B6" />
        </g>
      </g>
    </svg>
  );
};

// 3D-Like Icon: Yellow Ladder and Stack of Books
export const YellowLadderIcon: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24">
      <defs>
        <linearGradient id="fGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#BE185D" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="85" rx="35" ry="6" fill="rgba(0,0,0,0.1)" />

      {/* Large Purple Book stacked flat */}
      <rect x="25" y="52" width="50" height="20" rx="4" fill="url(#fGrad)" />
      <rect x="30" y="56" width="40" height="12" fill="#FDF2F8" /> {/* Pages */}
      <rect x="25" y="52" width="5" height="20" fill="#9D174D" />

      {/* Smaller Stacked Book */}
      <rect x="32" y="38" width="36" height="14" rx="3" fill="#EC4899" />
      <rect x="36" y="42" width="28" height="6" fill="#FFF1F2" />
      <rect x="32" y="38" width="4" height="14" fill="#BE185D" />

      {/* Ladder Leaning */}
      <g transform="translate(15, 10)">
        <line x1="20" y1="10" x2="35" y2="70" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
        <line x1="30" y1="10" x2="45" y2="70" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
        {/* Ladder Rungs */}
        <line x1="23" y1="22" x2="33" y2="22" stroke="#FBBF24" strokeWidth="3" />
        <line x1="26" y1="35" x2="36" y2="35" stroke="#FBBF24" strokeWidth="3" />
        <line x1="30" y1="48" x2="40" y2="48" stroke="#FBBF24" strokeWidth="3" />
        <line x1="33" y1="60" x2="43" y2="60" stroke="#FBBF24" strokeWidth="3" />
      </g>
    </svg>
  );
};

// 3D-Like Icon: Book and Yellow Pencil
export const BookAndPencilIcon: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24">
      <defs>
        <linearGradient id="blGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="85" rx="32" ry="5" fill="rgba(0,0,0,0.1)" />

      {/* Blue book lying flat */}
      <g transform="translate(0, 5)">
        <rect x="25" y="40" width="50" height="22" rx="4" fill="url(#blGrad)" />
        <rect x="30" y="44" width="41" height="14" fill="#F0F9FF" /> {/* pages */}
        <rect x="25" y="40" width="5" height="22" fill="#0369A1" />
      </g>

      {/* Pencil lying at an angle on the book */}
      <g transform="translate(30, 20) rotate(-20 20 20)">
        <rect x="0" y="20" width="40" height="7" fill="#FBBF24" rx="1" />
        <polygon points="40,20 40,27 46,23.5" fill="#FDE047" />
        <polygon points="44,22 44,25 46,23.5" fill="#1F2937" />
        <rect x="-4" y="20" width="4" height="7" fill="#F472B6" /> {/* pink eraser */}
      </g>
    </svg>
  );
};

// Render matching 3D illustration based on key name
export const IllustrationRenderer: React.FC<{ icon: string; className?: string }> = ({ icon, className = '' }) => {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      {icon === 'stacked_books' && <StackedBooksIcon />}
      {icon === 'red_book' && <RedBookIcon />}
      {icon === 'open_book' && <OpenBookIcon />}
      {icon === 'coffee_cup' && <CoffeeCupIcon />}
      {icon === 'tilted_stacked' && <TiltedStackedIcon />}
      {icon === 'cute_cloud_book' && <CuteCloudBookIcon />}
      {icon === 'yellow_ladder' && <YellowLadderIcon />}
      {icon === 'book_and_pencil' && <BookAndPencilIcon />}
    </div>
  );
};

// Side column icons: Best sales
export const PlantPotIcon: React.FC = () => {
  return (
    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shadow-inner">
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        {/* Pot */}
        <path d="M 12 24 L 28 24 L 25 34 L 15 34 Z" fill="#D97706" />
        <rect x="10" y="21" width="20" height="3" rx="1" fill="#F59E0B" />
        {/* Leaves */}
        <path d="M 20 21 Q 20 10 26 8 C 22 12 22 18 20 21" fill="#10B981" />
        <path d="M 20 21 Q 20 10 14 8 C 18 12 18 18 20 21" fill="#059669" />
        <path d="M 20 21 Q 23 14 20 5 C 17 14 17 18 20 21" fill="#34D399" />
      </svg>
    </div>
  );
};

export const WateringCanIcon: React.FC = () => {
  return (
    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center shadow-inner">
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        {/* Watering can */}
        <rect x="14" y="20" width="16" height="12" rx="3" fill="#06B6D4" />
        {/* Handle */}
        <path d="M 14 23 C 10 23 10 29 14 29" stroke="#0891B2" strokeWidth="2.5" fill="none" />
        {/* Spout */}
        <line x1="30" y1="24" x2="36" y2="18" stroke="#06B6D4" strokeWidth="3" />
        <line x1="36" y1="18" x2="38" y2="20" stroke="#F59E0B" strokeWidth="2" />
        {/* Drips */}
        <circle cx="37" cy="24" r="1.5" fill="#38BDF8" />
        <circle cx="35" cy="28" r="1" fill="#38BDF8" />
      </svg>
    </div>
  );
};

export const PurpleJournalIcon: React.FC = () => {
  return (
    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shadow-inner">
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <rect x="11" y="10" width="18" height="22" rx="2.5" fill="#8B5CF6" />
        <rect x="11" y="10" width="4" height="22" fill="#6D28D9" />
        {/* Ribbon bookmark */}
        <path d="M 21 28 L 24 33 L 21 31 L 18 33 Z" fill="#FBBF24" />
        {/* Question mark outline */}
        <text x="16" y="22" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">?</text>
      </svg>
    </div>
  );
};

export const UnplugCoffeeIcon: React.FC = () => {
  return (
    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shadow-inner">
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        {/* Cup */}
        <path d="M 14 16 L 26 16 L 24 28 C 24 31 16 31 16 28 Z" fill="#F97316" />
        <path d="M 26 18 C 29 18 29 24 26 24" stroke="#F97316" strokeWidth="2" fill="none" />
        {/* Steam */}
        <path d="M 17 12 Q 19 8 17 6" stroke="#FB923C" strokeWidth="1.5" fill="none" />
        <path d="M 22 12 Q 24 8 22 6" stroke="#FB923C" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
};

export const GoldJournalIcon: React.FC = () => {
  return (
    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center shadow-inner">
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <rect x="12" y="9" width="16" height="23" rx="2.5" fill="#EC4899" />
        <rect x="12" y="9" width="4" height="23" fill="#BE185D" />
        {/* Star */}
        <polygon points="20,15 21.5,18 25,18 22,20.5 23.5,24 20,22 16.5,24 18,20.5 15,18 18.5,18" fill="#FBBF24" />
      </svg>
    </div>
  );
};

export const BestSalesIconRenderer: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case 'plant_pot':
      return <PlantPotIcon />;
    case 'watering_can':
      return <WateringCanIcon />;
    case 'purple_journal':
      return <PurpleJournalIcon />;
    case 'unplug_coffee':
      return <UnplugCoffeeIcon />;
    case 'gold_journal':
      return <GoldJournalIcon />;
    default:
      return <PlantPotIcon />;
  }
};
