import { useEffect, useState } from "react";
import { type SectionId } from "./activeSection";

export function useActiveSection(sectionOrder: readonly SectionId[]) {
  const [activeSection, setActiveSection] = useState<SectionId>(sectionOrder[0]);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "") as SectionId;
      if (sectionOrder.includes(hash)) {
        setActiveSection(hash);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [sectionOrder]);

  useEffect(() => {
    const elements = sectionOrder
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const topEntry = visible[0];
        if (topEntry?.target.id) {
          setActiveSection(topEntry.target.id as SectionId);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionOrder]);

  const selectSection = (section: SectionId) => {
    setActiveSection(section);
  };

  return { activeSection, selectSection };
}
