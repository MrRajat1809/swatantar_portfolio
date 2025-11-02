import React from 'react';

/**
 * Button Component
 * Supports Primary (gradient) and Secondary (frosted glass) variants
 *
 * @param {Object} props
 * @param {'primary' | 'secondary'} props.variant - Button style variant
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.disabled - Disabled state
 * @param {Function} props.onClick - Click handler
 * @param {string} props.href - Optional link URL (renders as anchor)
 */
const Button = ({
  variant = 'primary',
  children,
  className = '',
  disabled = false,
  onClick = null,
  href = null,
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center
    px-6 py-3
    rounded-[10px]
    font-semibold
    text-sm
    tracking-wide
    transition-all duration-[250ms] ease-out
    focus:outline-none
    focus-visible:ring-3
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-[#00AEEF] to-[#0091D5]
      text-white
      shadow-[0_2px_8px_rgba(0,174,239,0.2)]
      hover:shadow-[0_4px_12px_rgba(0,174,239,0.35)]
      hover:translate-y-[-1px]
      focus-visible:ring-[#00AEEF]/25
      active:translate-y-[0px]
    `,
    secondary: `
      bg-white/40
      backdrop-blur-[6px]
      text-[#00334E]
      border border-black/10
      hover:bg-white/60
      hover:shadow-[0_4px_12px_rgba(0,100,200,0.12)]
      hover:translate-y-[-1px]
      focus-visible:ring-[#00AEEF]/25
      active:translate-y-[0px]
    `,
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * IconButton Component
 * Square button for icons
 */
export const IconButton = ({
  children,
  className = '',
  variant = 'secondary',
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center
    w-10 h-10
    rounded-[10px]
    transition-all duration-[250ms] ease-out
    focus:outline-none
    focus-visible:ring-3 focus-visible:ring-[#00AEEF]/25
  `;

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-[#00AEEF] to-[#0091D5]
      text-white
      hover:shadow-[0_4px_12px_rgba(0,174,239,0.35)]
      hover:translate-y-[-1px]
    `,
    secondary: `
      bg-white/40
      backdrop-blur-[6px]
      text-[#00334E]
      border border-black/10
      hover:bg-white/60
      hover:shadow-[0_4px_12px_rgba(0,100,200,0.12)]
      hover:translate-y-[-1px]
    `,
    ghost: `
      bg-transparent
      text-[#00334E]
      hover:bg-white/40
    `,
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * ButtonGroup Component
 * Groups buttons with appropriate spacing
 */
export const ButtonGroup = ({ children, className = '' }) => (
  <div className={`flex items-center gap-3 flex-wrap ${className}`}>
    {children}
  </div>
);

export default Button;
