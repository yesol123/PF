import { useEffect, useState } from "react";
import { SectionTitle } from "../../shared/ui/SectionTitle";
import {
  getProjectsByCategory,
  type ProjectCategory,
} from "./data/projects";
import "./ProjectSection.css";

const CATEGORY_ORDER: ProjectCategory[] = ["work", "study"];

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  work: "Work",
  study: "Study",
};

const CATEGORY_DESCRIPTIONS: Record<ProjectCategory, string> = {
  work: "회사·업무에서 진행한 프로젝트입니다.",
  study: "공부하며 진행한 개인·학습 프로젝트입니다.",
};

export function ProjectSection() {
  const [category, setCategory] = useState<ProjectCategory>("work");
  const [activeIndex, setActiveIndex] = useState(0);
  const categoryProjects = getProjectsByCategory(category);
  const activeProject = categoryProjects[activeIndex];

  useEffect(() => {
    setActiveIndex(0);
  }, [category]);

  return (
    <section id="project">
      <SectionTitle
        title="Work"
        subtitle="Work와 Study로 구분해 프로젝트를 확인할 수 있습니다."
      />

      <div
        className="projectCategoryTabs"
        role="tablist"
        aria-label="프로젝트 유형"
      >
        {CATEGORY_ORDER.map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={category === key}
            className={category === key ? "isActive" : ""}
            onClick={() => setCategory(key)}
          >
            {CATEGORY_LABELS[key]}
          </button>
        ))}
      </div>

      <p className="projectCategoryDesc">{CATEGORY_DESCRIPTIONS[category]}</p>

      {categoryProjects.length === 0 ? (
        <div className="projectEmpty" role="tabpanel">
          <p>업무 프로젝트를 준비 중입니다.</p>
          <span>회사에서 진행한 프로젝트를 추가할 예정입니다.</span>
        </div>
      ) : (
        <div className="projectLayout" role="tabpanel">
          <nav className="projectNav" aria-label="프로젝트 선택">
            <ol>
              {categoryProjects.map((project, index) => (
                <li key={`${project.title}-${project.company ?? index}`}>
                  <button
                    type="button"
                    className={activeIndex === index ? "isActive" : ""}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`${project.title} 프로젝트 보기`}
                    aria-current={activeIndex === index ? "true" : undefined}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                </li>
              ))}
            </ol>
          </nav>

          <div className="projectPanel" aria-live="polite">
            {activeProject ? (
              <article
                key={`${category}-${activeIndex}`}
                className="projectDetail"
              >
                {activeProject.company ? (
                  <div className="projectCompanyBlock">
                    <p className="projectCompany">{activeProject.company}</p>
                    {activeProject.period ? (
                      <p className="projectPeriod">{activeProject.period}</p>
                    ) : null}
                    {activeProject.role ? (
                      <p className="projectRole">{activeProject.role}</p>
                    ) : null}
                  </div>
                ) : null}

                <p className="projectMeta">{activeProject.environment}</p>
                <h3>{activeProject.title}</h3>
                <p>{activeProject.description}</p>
                <p>{activeProject.summary}</p>

                {activeProject.highlights &&
                activeProject.highlights.length > 0 ? (
                  <ul className="projectHighlights">
                    {activeProject.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}

                {activeProject.view || activeProject.github ? (
                  <div className="projectLinks">
                    {activeProject.view ? (
                      <a
                        href={activeProject.view}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        VIEW
                      </a>
                    ) : null}
                    {activeProject.github ? (
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        README
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </article>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
}
