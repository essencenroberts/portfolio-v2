import { PROJECTS } from "../data/resume";
import notesAppImage from "../assets/images/notes-app.png";
import timeKeeperAppImage from "../assets/images/time-tracker-app-image.png";

const PROJECT_IMAGES = {
  "notes-app.png": notesAppImage,
  "time-tracker-app-image.png": timeKeeperAppImage,
};

function Projects() {
  return (
    <section
      id="projects"
      className="bg-canvas-parchment px-6 py-[80px] md:px-16"
    >
      <div className="mx-auto flex max-w-[980px] flex-col gap-12">
        <h2 className="text-center font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.374px] text-ink md:text-[40px]">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="flex flex-col gap-4 rounded-lg border border-hairline bg-canvas p-6"
            >
              {project.image && (
                <img
                  src={PROJECT_IMAGES[project.image]}
                  alt={`${project.title} preview`}
                  className="product-shadow h-48 w-full rounded-md object-cover"
                />
              )}
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-text text-[17px] font-semibold leading-[1.24] tracking-[-0.374px] text-ink">
                  {project.title}
                </h3>
                <span className="shrink-0 font-text text-[12px] leading-[1] tracking-[-0.12px] text-ink-muted-48">
                  {project.period}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-surface-pearl px-3 py-1 font-text text-[12px] leading-[1.3] tracking-[-0.08px] text-ink-muted-80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="flex flex-col gap-2">
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="font-text text-[17px] leading-[1.47] tracking-[-0.374px] text-body"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              {(project.liveUrl || project.repoUrl) && (
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-brand rounded-pill px-[18px] py-[9px] font-text text-[14px] leading-[1.4] tracking-[-0.224px] text-on-primary transition-transform active:scale-95"
                    >
                      Live Site
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-gradient-brand text-gradient-brand rounded-pill border px-[18px] py-[9px] font-text text-[14px] leading-[1.4] tracking-[-0.224px] transition-transform active:scale-95"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
