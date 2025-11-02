/**
 * Design System Theme Configuration
 * Soft-Scientific Blue Aesthetic
 * Inspired by Isomorphic Labs and modern biotech interfaces
 */

export const theme = {
  // Core Brand Colors
  colors: {
    // Background Palette
    background: {
      base: '#D8EAF7',           // Soft powder blue
      gradient: {
        from: '#D8EAF7',         // Powder blue
        to: '#BDE7F5',           // Aqua turquoise
      },
      light: '#E8F4FC',          // Lighter variation
      deep: '#C8E0F2',           // Deeper variation
    },

    // Accent Colors
    accent: {
      cyan: '#00AEEF',           // Bright cyan
      turquoise: '#9BE2EB',      // Aqua turquoise
      blue: '#007CB8',           // Medium blue
      navy: '#0D1B2A',           // Navy blue (dark text)
    },

    // Text Colors
    text: {
      primary: '#0D1B2A',        // Navy blue for headings
      secondary: '#35536B',      // Slate gray for descriptions
      tertiary: '#00334E',       // Deep blue for secondary UI
    },

    // Card & Component Colors
    card: {
      gradient: {
        from: '#FFFFFF',
        to: '#F4FAFD',
      },
      border: 'rgba(0, 0, 0, 0.05)',
      shadow: 'rgba(0, 100, 200, 0.08)',
      shadowHover: 'rgba(0, 160, 255, 0.15)',
    },

    // Tag Categories
    tags: {
      analytical: '#B3E5FC',     // Pale aqua
      research: '#C9DAF8',       // Soft lilac-blue
      development: '#A9E3FF',    // Muted cyan gray
    },

    // Glass Effect
    glass: {
      light: 'rgba(255, 255, 255, 0.75)',
      medium: 'rgba(255, 255, 255, 0.4)',
      border: 'rgba(0, 0, 0, 0.1)',
    },

    // Button Gradients
    button: {
      primary: {
        from: '#00AEEF',
        to: '#0091D5',
      },
      focus: 'rgba(0, 174, 239, 0.25)',
    },
  },

  // Typography
  typography: {
    fonts: {
      primary: '"Inter", "Satoshi", "IBM Plex Sans", system-ui, -apple-system, sans-serif',
    },
    letterSpacing: {
      wide: '0.025em',
    },
  },

  // Spacing & Sizing
  spacing: {
    cardPadding: '1.5rem',
    sectionGap: '3rem',
  },

  // Border Radius
  radius: {
    card: '12px',
    cardLarge: '16px',
    button: '10px',
    tag: '999px', // pill shape
  },

  // Shadows
  shadows: {
    card: '0 4px 12px rgba(0, 100, 200, 0.08)',
    cardHover: '0 6px 16px rgba(0, 160, 255, 0.15)',
    button: '0 2px 8px rgba(0, 174, 239, 0.2)',
    navbar: '0 4px 12px rgba(0, 0, 0, 0.05)',
    tag: '0 1px 3px rgba(0, 0, 0, 0.05)',
  },

  // Transitions
  transitions: {
    fast: '0.15s ease-out',
    normal: '0.25s ease-out',
    slow: '0.35s ease-out',
  },

  // Filters
  filters: {
    glassBlur: 'blur(12px)',
    glassBlurMedium: 'blur(6px)',
  },

  // Z-Index
  zIndex: {
    navbar: 50,
    overlay: 40,
    modal: 60,
    tooltip: 70,
  },
};

// CSS-in-JS Helper Functions
export const gradients = {
  background: `linear-gradient(180deg, ${theme.colors.background.gradient.from} 0%, ${theme.colors.background.gradient.to} 100%)`,

  card: `linear-gradient(180deg, ${theme.colors.card.gradient.from} 0%, ${theme.colors.card.gradient.to} 100%)`,

  buttonPrimary: `linear-gradient(90deg, ${theme.colors.button.primary.from} 0%, ${theme.colors.button.primary.to} 100%)`,

  accentGlow: `radial-gradient(circle at center, ${theme.colors.accent.cyan}33 0%, transparent 70%)`,
};

// Reusable style mixins
export const mixins = {
  cardBase: {
    background: gradients.card,
    borderRadius: theme.radius.card,
    border: `1px solid ${theme.colors.card.border}`,
    boxShadow: theme.shadows.card,
    transition: `transform ${theme.transitions.normal}, box-shadow ${theme.transitions.normal}`,
  },

  cardHover: {
    transform: 'translateY(-3px)',
    boxShadow: theme.shadows.cardHover,
  },

  glassMorphism: {
    background: theme.colors.glass.light,
    backdropFilter: theme.filters.glassBlur,
    border: `1px solid ${theme.colors.glass.border}`,
  },

  buttonPrimary: {
    background: gradients.buttonPrimary,
    color: 'white',
    fontWeight: 600,
    borderRadius: theme.radius.button,
    transition: `all ${theme.transitions.normal}`,
  },

  buttonSecondary: {
    background: theme.colors.glass.medium,
    backdropFilter: theme.filters.glassBlurMedium,
    color: theme.colors.text.tertiary,
    border: `1px solid ${theme.colors.glass.border}`,
    borderRadius: theme.radius.button,
    transition: `all ${theme.transitions.normal}`,
  },

  tag: {
    borderRadius: theme.radius.tag,
    boxShadow: theme.shadows.tag,
    transition: `transform ${theme.transitions.fast}`,
  },
};

export default theme;
