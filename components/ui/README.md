# UI Component System Documentation

> **Soft-Scientific Blue Aesthetic**
> Inspired by Isomorphic Labs and modern biotech interfaces

A comprehensive, cohesive UI component system for the personal research & projects portfolio website. This design system combines scientific clarity with warm minimalism through glassmorphism, soft gradients, and subtle motion.

---

## 🎨 Design Philosophy

### Core Principles
- **Minimal • Precise • Scientific • Clean • Empathetic**
- **Gradient Intelligence • Frontier Calm**
- Lightweight, compositional, and breathable
- No harsh edges or high contrast
- Subtle motion with hover lift and glow on focus

### Color Palette

```js
// Background
#D8EAF7 → #BDE7F5  // Soft powder blue gradient

// Accents
#00AEEF  // Bright cyan (primary interactions)
#9BE2EB  // Aqua turquoise (highlights)
#007CB8  // Medium blue (hierarchy)
#0D1B2A  // Navy blue (headings)

// Text
#0D1B2A  // Navy (headings)
#35536B  // Slate gray (descriptions)
#00334E  // Deep blue (secondary UI)
```

---

## 📦 Components

### 1. Card Components

Gradient background cards with soft shadows and hover effects.

#### Basic Card

```jsx
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';

<Card hover={true} accentCorner={false}>
  <CardHeader>
    <CardTitle>Research Project</CardTitle>
    <CardDescription>
      A brief description of the research project
    </CardDescription>
  </CardHeader>
  <CardContent>
    {/* Your content here */}
  </CardContent>
  <CardFooter>
    <Button variant="primary">View Details</Button>
  </CardFooter>
</Card>
```

#### Card with Accent

```jsx
<Card
  accentColor="#00AEEF"
  accentCorner={true}
  hover={true}
>
  {/* Content */}
</Card>
```

#### Glass Card (Frosted Variant)

```jsx
import { GlassCard } from '@/components/ui/Card';

<GlassCard className="p-6">
  {/* Overlay content with frosted glass effect */}
</GlassCard>
```

**Props:**
- `children` - Card content
- `className` - Additional CSS classes
- `hover` - Enable hover lift effect (default: true)
- `accentColor` - Optional accent color for border strip
- `accentCorner` - Show accent corner indicator (default: false)
- `onClick` - Optional click handler

---

### 2. Button Components

Gradient primary buttons and frosted glass secondary buttons.

#### Primary Button

```jsx
import Button from '@/components/ui/Button';

<Button variant="primary" onClick={handleClick}>
  Get Started
</Button>
```

#### Secondary Button

```jsx
<Button variant="secondary" href="/about">
  Learn More
</Button>
```

#### Icon Button

```jsx
import { IconButton } from '@/components/ui/Button';

<IconButton variant="ghost">
  <MenuIcon />
</IconButton>
```

#### Button Group

```jsx
import Button, { ButtonGroup } from '@/components/ui/Button';

<ButtonGroup>
  <Button variant="primary">Save</Button>
  <Button variant="secondary">Cancel</Button>
</ButtonGroup>
```

**Props:**
- `variant` - 'primary' | 'secondary' (default: 'primary')
- `children` - Button content
- `className` - Additional CSS classes
- `disabled` - Disabled state
- `onClick` - Click handler
- `href` - Optional link URL (renders as anchor)

---

### 3. Tag Components

Categorized skill badges with soft backgrounds.

#### Basic Tag

```jsx
import Tag from '@/components/ui/Tag';

<Tag category="analytical">Data Analysis</Tag>
<Tag category="research">Protein Folding</Tag>
<Tag category="development">React</Tag>
```

#### Custom Color Tag

```jsx
<Tag category="custom" customColor="#FFE5E5">
  Custom Topic
</Tag>
```

#### Tag Group

```jsx
import Tag, { TagGroup } from '@/components/ui/Tag';

<TagGroup>
  <Tag category="research">ML</Tag>
  <Tag category="development">Python</Tag>
  <Tag category="analytical">Statistics</Tag>
</TagGroup>
```

#### Icon Tag

```jsx
import { IconTag } from '@/components/ui/Tag';

<IconTag
  icon={<StarIcon />}
  category="research"
>
  Featured
</IconTag>
```

#### Status Badge

```jsx
import { StatusBadge } from '@/components/ui/Tag';

<StatusBadge status="active">Live Project</StatusBadge>
<StatusBadge status="pending">In Progress</StatusBadge>
<StatusBadge status="inactive">Completed</StatusBadge>
```

#### Count Badge

```jsx
import { CountBadge } from '@/components/ui/Tag';

<CountBadge count={12} />
```

**Tag Categories:**
- `analytical` - Pale aqua (#B3E5FC) - for data analysis, statistics
- `research` - Soft lilac-blue (#C9DAF8) - for biotech, research topics
- `development` - Muted cyan gray (#A9E3FF) - for coding, tech stack
- `custom` - Use with `customColor` prop

---

### 4. Navigation Components

Glassmorphic translucent navigation with scroll-based shadow.

#### Complete NavBar Example

```jsx
import NavBar, {
  NavBarContainer,
  NavBarContent,
  NavBarBrand,
  NavBarLinks,
  NavBarLink,
  NavBarActions,
  MobileMenuButton,
  MobileMenu,
  MobileMenuLink
} from '@/components/ui/NavBar';
import Button from '@/components/ui/Button';
import { useState } from 'react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <NavBar sticky={true}>
      <NavBarContainer>
        <NavBarContent>
          <NavBarBrand onClick={() => setActiveSection('home')}>
            Your Name
          </NavBarBrand>

          {/* Desktop Navigation */}
          <NavBarLinks>
            <NavBarLink
              active={activeSection === 'home'}
              onClick={() => setActiveSection('home')}
            >
              Home
            </NavBarLink>
            <NavBarLink
              active={activeSection === 'research'}
              onClick={() => setActiveSection('research')}
            >
              Research
            </NavBarLink>
            <NavBarLink
              active={activeSection === 'projects'}
              onClick={() => setActiveSection('projects')}
            >
              Projects
            </NavBarLink>
          </NavBarLinks>

          <NavBarActions>
            <Button variant="secondary">Contact</Button>
            <MobileMenuButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </NavBarActions>
        </NavBarContent>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen}>
          <MobileMenuLink
            active={activeSection === 'home'}
            onClick={() => {
              setActiveSection('home');
              setIsMenuOpen(false);
            }}
          >
            Home
          </MobileMenuLink>
          {/* More mobile links... */}
        </MobileMenu>
      </NavBarContainer>
    </NavBar>
  );
}
```

**Features:**
- Frosted glass effect with `backdrop-blur`
- Scroll-based shadow activation
- Cyan underline glow on active links
- Responsive mobile menu
- Sticky positioning

---

## 🎨 Theme Configuration

All design tokens are centralized in `lib/theme.js`:

```js
import theme, { gradients, mixins } from '@/lib/theme';

// Access colors
theme.colors.accent.cyan
theme.colors.text.primary

// Use gradients
gradients.buttonPrimary
gradients.card

// Apply mixins
const cardStyles = mixins.cardBase;
```

---

## 🛠️ Global CSS Utilities

Custom utility classes available in `styles/globals.css`:

### Card Utilities
```jsx
<div className="card-gradient card-shadow hover:card-shadow-hover">
  {/* Card content */}
</div>
```

### Glass Morphism
```jsx
<div className="glass-navbar">Navigation</div>
<div className="glass-card p-6">Content</div>
```

### Typography
```jsx
<h1 className="text-navy tracking-scientific">Heading</h1>
<p className="text-slate-gray">Description</p>
```

### Effects
```jsx
<div className="hover-lift accent-glow-cyan">
  {/* Hover effects */}
</div>
```

### Backgrounds
```jsx
<div className="bg-powder-gradient">
  {/* Gradient background */}
</div>
```

### Shadows & Borders
```jsx
<div className="shadow-soft-lg border-minimal">
  {/* Soft shadow with minimal border */}
</div>
```

---

## 📐 Layout Patterns

### Research Card Grid

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card hover={true} accentColor="#00AEEF">
    <CardHeader>
      <CardTitle>Project Title</CardTitle>
      <CardDescription>Brief description</CardDescription>
    </CardHeader>
    <CardContent>
      <TagGroup>
        <Tag category="research">ML</Tag>
        <Tag category="development">Python</Tag>
      </TagGroup>
    </CardContent>
    <CardFooter>
      <Button variant="secondary">View Details</Button>
    </CardFooter>
  </Card>
</div>
```

### Hero Section with Glass Card

```jsx
<section className="relative min-h-screen flex items-center">
  <GlassCard className="max-w-3xl mx-auto p-8">
    <h1 className="text-4xl font-bold text-navy mb-4">
      Welcome
    </h1>
    <p className="text-slate-gray mb-6">
      Your tagline here
    </p>
    <ButtonGroup>
      <Button variant="primary">Get Started</Button>
      <Button variant="secondary">Learn More</Button>
    </ButtonGroup>
  </GlassCard>
</section>
```

---

## ♿ Accessibility

All components include:
- Proper ARIA labels
- Keyboard navigation support
- Focus-visible states with cyan ring glow
- Reduced motion support (`prefers-reduced-motion`)
- High contrast mode compatibility
- Semantic HTML structure

---

## 🎭 Animation Guidelines

### Hover Effects
- Card lift: `translateY(-3px)` over 250ms
- Tag scale: `scale(1.05)` over 150ms
- Button glow: Shadow expansion over 250ms

### Focus States
- Cyan ring: `box-shadow: 0 0 0 3px rgba(0, 174, 239, 0.25)`
- Smooth transitions with `ease-out` timing

### Mobile Optimization
- Reduced animation complexity on mobile
- Disabled particle effects on small screens
- Respect `prefers-reduced-motion` setting

---

## 📱 Responsive Behavior

All components are mobile-first and responsive:

- Cards: Stack vertically on mobile, grid on desktop
- Navigation: Hamburger menu on mobile, full navbar on desktop
- Buttons: Full-width option available for mobile
- Tags: Wrap automatically in `TagGroup`

---

## 🚀 Quick Start

1. **Import components:**
   ```jsx
   import Card, { CardHeader, CardTitle } from '@/components/ui/Card';
   import Button from '@/components/ui/Button';
   import Tag from '@/components/ui/Tag';
   ```

2. **Use theme tokens:**
   ```jsx
   import theme from '@/lib/theme';
   ```

3. **Apply global utilities:**
   ```jsx
   <div className="glass-card hover-lift">
   ```

---

## 🌈 Design System Summary

| Element | Style | Behavior |
|---------|-------|----------|
| **Cards** | White→#F4FAFD gradient, 12px radius, soft shadow | Lift 3px on hover, glow shadow |
| **Buttons** | Cyan gradient (primary), frosted glass (secondary) | Lift 1px on hover, ring on focus |
| **Tags** | Category-colored pills, 999px radius | Scale 1.05 on hover |
| **NavBar** | Frosted glass, 12px blur, scroll shadow | Cyan underline on active |
| **Typography** | Inter/Satoshi/IBM Plex Sans, 0.025em tracking | Navy headings, slate body |

---

## 📄 Component Files

```
components/ui/
├── Card.js          // Card system with variants
├── Button.js        // Button components
├── Tag.js           // Tags, badges, chips
├── NavBar.js        // Navigation components
└── README.md        // This file

lib/
└── theme.js         // Design tokens and configuration

styles/
└── globals.css      // Global utilities and animations
```

---

**Created with Claude Code** 🤖
*Soft-Scientific Blue Aesthetic • Isomorphic Labs Inspired*
