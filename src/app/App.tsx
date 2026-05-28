import { HomeSection } from "../features/home/HomeSection";
import { AboutSection } from "../features/about/AboutSection";
import { ProjectSection } from "../features/project/ProjectSection";
import { ContactSection } from "../features/contact/ContactSection";
import { useActiveSection } from "../shared/lib/useActiveSection";
import "./App.css";

const SECTION_ORDER = ["home", "about", "project", "contact"] as const;

type SectionId = (typeof SECTION_ORDER)[number];

const SECTION_LABELS: Record<SectionId, string> = {
  home: "HOME",
  about: "ABOUT",
  project: "PROJECT",
  contact: "CONTACT",
};

export function App() {
  const { activeSection, selectSection } = useActiveSection(SECTION_ORDER);

  return (
    <div className="appShell">
      <header className="appHeader">
        <div className="headerInner">
          <a className="brandLogo" href="#home" aria-label="홈으로 이동">
            YS
          </a>
          <nav aria-label="주요 섹션 이동">
            <ul className="navList">
              {SECTION_ORDER.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={activeSection === section ? "isActive" : ""}
                    aria-current={activeSection === section ? "page" : undefined}
                    onClick={() => selectSection(section)}
                  >
                    {SECTION_LABELS[section]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="appMain">
        <HomeSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </div>
  );
}
