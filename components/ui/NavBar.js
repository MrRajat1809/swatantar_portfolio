import React, { useState, useEffect } from 'react';

/**
 * NavBar Component (Glassmorphic)
 * Translucent white glass layer with scroll-based shadow
 * Inspired by Isomorphic Labs minimal scientific aesthetic
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Navigation content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.sticky - Enable sticky positioning (default: true)
 */
const NavBar = ({
  children,
  className = '',
  sticky = true,
  ...props
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseStyles = `
    w-full
    transition-all duration-300 ease-out
    z-50
  `;

  const glassStyles = `
    bg-white/75
    backdrop-blur-[12px]
    border-b border-black/10
  `;

  const scrollStyles = isScrolled
    ? 'shadow-[0_4px_12px_rgba(0,0,0,0.05)]'
    : '';

  const positionStyles = sticky ? 'sticky top-0' : '';

  return (
    <nav
      className={`${baseStyles} ${glassStyles} ${scrollStyles} ${positionStyles} ${className}`}
      {...props}
    >
      {children}
    </nav>
  );
};

/**
 * NavBarContainer Component
 * Inner container with max-width and padding
 */
export const NavBarContainer = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

/**
 * NavBarContent Component
 * Flex container for navigation items
 */
export const NavBarContent = ({ children, className = '' }) => (
  <div className={`flex items-center justify-between py-4 ${className}`}>
    {children}
  </div>
);

/**
 * NavBarBrand Component
 * Logo/brand area with optional link
 */
export const NavBarBrand = ({
  children,
  href = null,
  onClick = null,
  className = '',
}) => {
  const baseStyles = `
    text-2xl font-bold
    text-[#0D1B2A]
    tracking-scientific
    transition-all duration-250 ease-out
    hover:text-[#00AEEF]
  `;

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * NavBarLinks Component
 * Container for navigation links
 */
export const NavBarLinks = ({ children, className = '' }) => (
  <div className={`hidden md:flex items-center gap-6 ${className}`}>
    {children}
  </div>
);

/**
 * NavBarLink Component
 * Individual navigation link with active state and cyan underline glow
 */
export const NavBarLink = ({
  children,
  active = false,
  onClick = null,
  href = null,
  className = '',
}) => {
  const baseStyles = `
    relative
    px-3 py-2
    text-sm font-medium
    tracking-scientific
    transition-all duration-250 ease-out
  `;

  const activeStyles = active
    ? 'text-[#00AEEF]'
    : 'text-[#35536B] hover:text-[#00AEEF]';

  const underlineStyles = `
    after:content-['']
    after:absolute
    after:bottom-0
    after:left-0
    after:right-0
    after:h-[3px]
    after:bg-[#00AEEF]
    after:rounded-full
    after:transition-all
    after:duration-250
    after:ease-out
    ${active ? 'after:opacity-100 after:scale-x-100' : 'after:opacity-0 after:scale-x-0'}
    hover:after:opacity-100
    hover:after:scale-x-100
  `;

  const combinedStyles = `${baseStyles} ${activeStyles} ${underlineStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};

/**
 * NavBarActions Component
 * Container for action buttons (CTA, theme toggle, etc.)
 */
export const NavBarActions = ({ children, className = '' }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {children}
  </div>
);

/**
 * MobileMenuButton Component
 * Hamburger menu button for mobile
 */
export const MobileMenuButton = ({ isOpen, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`
      md:hidden
      p-2
      rounded-[10px]
      bg-white/40
      backdrop-blur-[6px]
      border border-black/10
      text-[#00334E]
      transition-all duration-250 ease-out
      hover:bg-white/60
      ${className}
    `}
    aria-label="Toggle menu"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {isOpen ? (
        <path d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  </button>
);

/**
 * MobileMenu Component
 * Dropdown mobile navigation menu
 */
export const MobileMenu = ({ isOpen, children, className = '' }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`
        md:hidden
        absolute top-full left-0 right-0
        bg-white/90
        backdrop-blur-[12px]
        border-b border-black/10
        shadow-[0_4px_12px_rgba(0,100,200,0.08)]
        ${className}
      `}
    >
      <div className="px-4 py-4 space-y-2">
        {children}
      </div>
    </div>
  );
};

/**
 * MobileMenuLink Component
 * Mobile navigation link
 */
export const MobileMenuLink = ({
  children,
  active = false,
  onClick = null,
  href = null,
  className = '',
}) => {
  const baseStyles = `
    block w-full text-left
    px-4 py-3
    rounded-[10px]
    text-sm font-medium
    tracking-scientific
    transition-all duration-250 ease-out
  `;

  const activeStyles = active
    ? 'bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20'
    : 'text-[#35536B] hover:bg-white/60 hover:text-[#00AEEF]';

  const combinedStyles = `${baseStyles} ${activeStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};

export default NavBar;
