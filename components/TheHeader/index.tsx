import { NavLink, Navigation } from '../Navigation';

type NavItems = NavLink[];

const navItems: NavItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

const TheHeader = () => {
  return (
    <header>
      <Navigation navLinks={navItems} />
    </header>
  );
};

export { TheHeader };
