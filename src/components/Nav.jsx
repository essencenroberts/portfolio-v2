const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  return (
    <header className="bg-gradient-brand sticky top-0 z-50 flex h-11 items-center justify-between px-6">
      <a
        href="#top"
        className="font-display text-[12px] font-semibold tracking-[-0.12px] text-body-on-dark"
      >
        Essence Roberts
      </a>
      <nav className="flex items-center gap-5">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-text text-[12px] leading-none tracking-[-0.12px] text-body-on-dark/80 transition-colors hover:text-body-on-dark"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Nav;
