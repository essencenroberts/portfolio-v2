import { PROFILE } from "../data/resume";
import profilePhoto from "../assets/images/essence-professional.png";

function Hero() {
  return (
    <section
      id="top"
      className="flex flex-col-reverse items-center justify-center gap-12 bg-canvas-parchment px-6 py-20 text-center md:flex-row md:gap-16 md:px-16 md:py-[80px] md:text-left"
    >
      <div className="flex max-w-[560px] flex-col items-center gap-6 md:items-start">
        <span className="text-gradient-brand font-text text-[14px] font-semibold leading-[1.29] tracking-[-0.224px]">
          {PROFILE.role}
        </span>
        <h1 className="font-display text-[40px] font-semibold leading-[1.1] tracking-[-0.28px] text-ink md:text-[56px] md:leading-[1.07]">
          {PROFILE.name}
        </h1>
        <p className="font-text text-[19px] font-light leading-[1.4] text-ink-muted-80 md:text-[24px] md:leading-[1.5]">
          Marketing strategist turned full-stack developer, building
          user-centered web applications with the same research and
          execution rigor she brought to campaigns.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <a
            href="#projects"
            className="bg-gradient-brand rounded-pill px-[22px] py-[11px] font-text text-[17px] leading-[1.47] tracking-[-0.374px] text-on-primary transition-transform active:scale-95"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-gradient-brand text-gradient-brand rounded-pill border px-[22px] py-[11px] font-text text-[17px] leading-[1.47] tracking-[-0.374px] transition-transform active:scale-95"
          >
            Contact Me
          </a>
        </div>
        <p className="font-text text-[14px] leading-[1.43] tracking-[-0.224px] text-ink-muted-48">
          {PROFILE.location}
        </p>
      </div>

      <div className="avatar-gradient-border h-55 w-55 shrink-0 rounded-full md:h-70 md:w-70">
        <img
          src={profilePhoto}
          alt={PROFILE.name}
          className="product-shadow h-full w-full rounded-full object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
