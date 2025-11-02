/**
 * UI Component System - Main Export
 * Soft-Scientific Blue Aesthetic
 *
 * Centralized exports for all UI components
 * Import from '@/components/ui' instead of individual files
 */

// Card Components
export {
  default as Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  GlassCard,
} from './Card';

// Button Components
export {
  default as Button,
  IconButton,
  ButtonGroup,
} from './Button';

// Tag Components
export {
  default as Tag,
  TagGroup,
  StatusBadge,
  CountBadge,
  IconTag,
} from './Tag';

// Navigation Components
export {
  default as NavBar,
  NavBarContainer,
  NavBarContent,
  NavBarBrand,
  NavBarLinks,
  NavBarLink,
  NavBarActions,
  MobileMenuButton,
  MobileMenu,
  MobileMenuLink,
} from './NavBar';

// Theme Configuration
export { default as theme, gradients, mixins } from '../../lib/theme';
