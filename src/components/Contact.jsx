import { PROFILE } from "../data/resume";

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-8 bg-surface-black px-6 py-[80px] text-center md:px-16"
    >
      <h2 className="font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.374px] text-body-on-dark md:text-[40px]">
        Let's Connect
      </h2>
      <p className="max-w-[560px] font-text text-[17px] leading-[1.47] tracking-[-0.374px] text-body-muted">
        Open to full-stack developer roles and always happy to talk shop
        about React, product strategy, or the leap from marketing to code.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href={`mailto:${PROFILE.email}`}
          className="bg-gradient-brand rounded-pill px-[22px] py-[11px] font-text text-[17px] leading-[1.47] tracking-[-0.374px] text-on-primary transition-transform active:scale-95"
        >
          Email Me
        </a>
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noreferrer"
          className="border-gradient-brand text-gradient-brand rounded-pill border px-[22px] py-[11px] font-text text-[17px] leading-[1.47] tracking-[-0.374px] transition-transform active:scale-95"
        >
          LinkedIn
        </a>
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="border-gradient-brand text-gradient-brand rounded-pill border px-[22px] py-[11px] font-text text-[17px] leading-[1.47] tracking-[-0.374px] transition-transform active:scale-95"
        >
          GitHub
        </a>
      </div>

      <p className="font-text text-[14px] leading-[1.43] tracking-[-0.224px] text-ink-muted-48">
        {PROFILE.phone} · {PROFILE.location}
      </p>
    </section>
  );
}

export default Contact;
