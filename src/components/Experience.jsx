import { EXPERIENCE, SKILL_GROUPS } from "../data/resume";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#22c55e] px-6 py-[80px] md:px-16"
    >
      <div className="mx-auto flex max-w-[980px] flex-col gap-16">
        <h2 className="text-center font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.374px] text-black md:text-[40px]">
          Experience
        </h2>

        <div className="flex flex-col gap-8">
          <h3 className="font-display text-[21px] font-semibold leading-[1.19] tracking-[0.231px] text-body-on-dark">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label} className="flex flex-col gap-3">
                <span className="font-text text-[14px] font-semibold leading-[1.29] tracking-[-0.224px] text-black">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-pill bg-canvas px-4 py-3 font-text text-[14px] leading-[1.43] tracking-[-0.224px] text-ink"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="font-display text-[21px] font-semibold leading-[1.19] tracking-[0.231px] text-body-on-dark">
            Professional Experience
          </h3>
          <div className="flex flex-col gap-10">
            {EXPERIENCE.map((job) => (
              <div
                key={job.title + job.company}
                className="flex flex-col gap-3 border-t border-white/10 pt-8 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h4 className="font-text text-[17px] font-semibold leading-[1.24] tracking-[-0.374px] text-black">
                    {job.title} · {job.company}
                  </h4>
                  <span className="font-text text-[14px] leading-[1.43] tracking-[-0.224px] text-black">
                    {job.period}
                  </span>
                </div>
                <span className="font-text text-[14px] leading-[1.43] tracking-[-0.224px] text-black">
                  {job.location}
                </span>
                <ul className="flex flex-col gap-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="font-text text-[17px] leading-[1.47] tracking-[-0.374px] text-black"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
