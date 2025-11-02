import React from 'react';

/**
 * Card Component
 * Soft-scientific design with gradient backgrounds, subtle shadows, and hover effects
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hover - Enable hover lift effect (default: true)
 * @param {string} props.accentColor - Optional accent color for border strip
 * @param {boolean} props.accentCorner - Show accent corner indicator
 * @param {Function} props.onClick - Optional click handler
 */
const Card = ({
  children,
  className = '',
  hover = true,
  accentColor = null,
  accentCorner = false,
  onClick = null,
  ...props
}) => {
  const baseStyles = `
    relative
    bg-gradient-to-b from-white to-[#F4FAFD]
    rounded-[12px]
    border border-black/5
    shadow-[0_4px_12px_rgba(0,100,200,0.08)]
    overflow-hidden
  `;

  const hoverStyles = hover ? `
    transition-all duration-[250ms] ease-out
    hover:translate-y-[-3px]
    hover:shadow-[0_6px_16px_rgba(0,160,255,0.15)]
  ` : '';

  const clickableStyles = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Optional Accent Corner Indicator */}
      {accentCorner && (
        <div
          className="absolute top-0 right-0 w-16 h-16 opacity-20"
          style={{
            background: `radial-gradient(circle at top right, ${accentColor || '#00AEEF'} 0%, transparent 70%)`,
          }}
        />
      )}

      {/* Optional Top Accent Strip */}
      {accentColor && (
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ backgroundColor: accentColor }}
        />
      )}

      {children}
    </div>
  );
};

/**
 * CardHeader Component
 * For card titles and metadata
 */
export const CardHeader = ({ children, className = '' }) => (
  <div className={`px-6 pt-6 pb-4 ${className}`}>
    {children}
  </div>
);

/**
 * CardTitle Component
 * Navy blue heading text
 */
export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-semibold text-[#0D1B2A] tracking-wide ${className}`}>
    {children}
  </h3>
);

/**
 * CardDescription Component
 * Slate gray descriptive text
 */
export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-sm text-[#35536B] leading-relaxed tracking-wide ${className}`}>
    {children}
  </p>
);

/**
 * CardContent Component
 * Main content area
 */
export const CardContent = ({ children, className = '' }) => (
  <div className={`px-6 pb-6 ${className}`}>
    {children}
  </div>
);

/**
 * CardFooter Component
 * Optional footer section for actions
 */
export const CardFooter = ({ children, className = '' }) => (
  <div className={`px-6 pb-6 pt-2 flex items-center gap-3 ${className}`}>
    {children}
  </div>
);

/**
 * GlassCard Component
 * Frosted glass variant for overlay content
 */
export const GlassCard = ({ children, className = '', ...props }) => {
  const glassStyles = `
    bg-white/75
    backdrop-blur-[12px]
    border border-black/10
    rounded-[12px]
    shadow-[0_4px_12px_rgba(0,100,200,0.08)]
  `;

  return (
    <div className={`${glassStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
