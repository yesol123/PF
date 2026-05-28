import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProjectSection } from "./ProjectSection";

describe("ProjectSection", () => {
  it("Work 탭에서 업무 프로젝트가 표시된다", () => {
    render(<ProjectSection />);

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "비대면 원격진료"
    );
    expect(screen.getByText("(주)루커스")).toBeInTheDocument();
  });

  it("Study 탭에서 번호 클릭 시 해당 프로젝트만 표시된다", async () => {
    const user = userEvent.setup();
    render(<ProjectSection />);

    await user.click(screen.getByRole("tab", { name: "Study" }));

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "부산광역시 클론"
    );

    await user.click(
      screen.getByRole("button", { name: "TODAY EAT 프로젝트 보기" })
    );

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "TODAY EAT"
    );
  });

  it("Study 프로젝트 링크는 보안 속성을 포함한다", async () => {
    const user = userEvent.setup();
    render(<ProjectSection />);

    await user.click(screen.getByRole("tab", { name: "Study" }));

    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });
});
