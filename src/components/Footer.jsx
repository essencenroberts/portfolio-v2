import { PROFILE } from "../data/resume";

function Footer() {
  return (
    <footer className="bg-canvas-parchment px-6 py-8 text-center md:px-16">
      <p className="font-text text-[12px] leading-[1.3] tracking-[-0.08px] text-ink-muted-48">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React &amp; Tailwind CSS.
      </p>
    </footer>
  );
}

export default Footer;
