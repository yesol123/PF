import { ButtonLink } from "../../shared/ui/ButtonLink";
import "./HomeSection.css";

export function HomeSection() {
  return (
    <section id="home" className="homeSection">
      <h1 className="homeName">KIM YE-SOL</h1>
      <p className="homeRole">Frontend Developer</p>
      <p className="homeIntro">
        안녕하세요. 현재에 머무르지 않고 계속 성장하는 프론트엔드 개발자
        김예솔입니다.
      </p>
      <ButtonLink href="#contact">Contact</ButtonLink>
    </section>
  );
}
