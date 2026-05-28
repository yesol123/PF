import { describe, expect, it } from "vitest";
import { getActiveSection } from "./activeSection";

describe("getActiveSection", () => {
  it("스크롤이 초기 구간일 때 home을 반환한다", () => {
    expect(getActiveSection(0, false, ["home", "about", "project", "contact"])).toBe(
      "home"
    );
  });

  it("데스크톱 임계값에서 project를 반환한다", () => {
    expect(
      getActiveSection(1500, false, ["home", "about", "project", "contact"])
    ).toBe("project");
  });

  it("모바일 임계값에서 contact를 반환한다", () => {
    expect(getActiveSection(2600, true, ["home", "about", "project", "contact"])).toBe(
      "contact"
    );
  });
});
