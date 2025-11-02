import React from 'react';

/**
 * Tag/Chip/Badge Component
 * Categorized skill and topic badges with soft, scientific styling
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Tag content
 * @param {'analytical' | 'research' | 'development' | 'custom'} props.category - Tag category for color coding
 * @param {string} props.customColor - Custom background color (when category='custom')
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hover - Enable hover scale effect
 * @param {Function} props.onClick - Optional click handler
 */
const Tag = ({
  children,
  category = 'development',
  customColor = null,
  className = '',
  hover = true,
  onClick = null,
  ...props
}) => {
  const categoryColors = {
    analytical: '#B3E5FC',    // Pale aqua - for data analysis, statistics
    research: '#C9DAF8',      // Soft lilac-blue - for biotech, research topics
    development: '#A9E3FF',   // Muted cyan gray - for coding, tech stack
  };

  const backgroundColor = category === 'custom' && customColor
    ? customColor
    : categoryColors[category] || categoryColors.development;

  const baseStyles = `
    inline-flex items-center
    px-3 py-1.5
    rounded-full
    text-xs font-medium
    text-[#0D1B2A]
    tracking-wide
    shadow-[0_1px_3px_rgba(0,0,0,0.05)]
    transition-transform duration-[150ms] ease-out
  `;

  const hoverStyles = hover ? 'hover:scale-105' : '';
  const clickableStyles = onClick ? 'cursor-pointer' : '';

  return (
    <span
      className={`${baseStyles} ${hoverStyles} ${clickableStyles} ${className}`}
      style={{ backgroundColor }}
      onClick={onClick}
      {...props}
    >
      {children}
    </span>
  );
};

/**
 * TagGroup Component
 * Groups multiple tags with appropriate spacing
 */
export const TagGroup = ({ children, className = '' }) => (
  <div className={`flex items-center gap-2 flex-wrap ${className}`}>
    {children}
  </div>
);

/**
 * StatusBadge Component
 * Small status indicators with dot
 */
export const StatusBadge = ({
  children,
  status = 'active',
  className = '',
}) => {
  const statusColors = {
    active: '#00D084',     // Green - active/live
    pending: '#FFB020',    // Orange - in progress
    inactive: '#94A3B8',   // Gray - completed/archived
  };

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className="w-2 h-2 rounded-full animate-pulse"
        style={{ backgroundColor: statusColors[status] }}
      />
      <span className="text-xs font-medium text-[#35536B] tracking-wide">
        {children}
      </span>
    </span>
  );
};

/**
 * CountBadge Component
 * Small numerical badges (e.g., notification counts)
 */
export const CountBadge = ({ count, className = '' }) => (
  <span
    className={`
      inline-flex items-center justify-center
      min-w-[20px] h-5
      px-1.5
      rounded-full
      bg-gradient-to-r from-[#00AEEF] to-[#0091D5]
      text-white
      text-xs font-semibold
      shadow-[0_2px_4px_rgba(0,174,239,0.3)]
      ${className}
    `}
  >
    {count}
  </span>
);

/**
 * IconTag Component
 * Tag with icon support
 */
export const IconTag = ({
  children,
  icon,
  category = 'development',
  className = '',
}) => {
  const categoryColors = {
    analytical: '#B3E5FC',
    research: '#C9DAF8',
    development: '#A9E3FF',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        px-3 py-1.5
        rounded-full
        text-xs font-medium
        text-[#0D1B2A]
        tracking-wide
        shadow-[0_1px_3px_rgba(0,0,0,0.05)]
        transition-transform duration-[150ms] ease-out
        hover:scale-105
        ${className}
      `}
      style={{ backgroundColor: categoryColors[category] }}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </span>
  );
};

export default Tag;
