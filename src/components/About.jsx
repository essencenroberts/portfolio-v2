import { PROFILE } from "../data/resume";

function About() {
  return (
    <section
      id="about"
      className="flex justify-center bg-canvas px-6 py-[80px] md:px-16"
    >
      <div className="flex max-w-195 flex-col items-center gap-6 text-center">
        <h2 className="font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.374px] text-ink md:text-[40px]">
          About
        </h2>
        <p className="font-text text-[17px] leading-[1.47] tracking-[-0.374px] text-body">
          {PROFILE.summary}
        </p>
        <p className="font-text text-[14px] leading-[1.43] tracking-[-0.224px] text-ink-muted-48">
          400+ hours of full-stack training at Per Scholas · B.A. Sociology,
          Spelman College
        </p>
      </div>
    </section>
  );
}

export default About;
