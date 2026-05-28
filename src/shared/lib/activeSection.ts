export type SectionId = "home" | "about" | "project" | "contact";

export function getActiveSection(
  scrollY: number,
  isMobile: boolean,
  sectionOrder: readonly SectionId[]
): SectionId {
  const thresholds = isMobile
    ? { contact: 2500, project: 1350, about: 450 }
    : { contact: 2610, project: 1450, about: 450 };

  if (scrollY >= thresholds.contact) {
    return "contact";
  }

  if (scrollY >= thresholds.project) {
    return "project";
  }

  if (scrollY >= thresholds.about) {
    return "about";
  }

  return sectionOrder[0] ?? "home";
}
