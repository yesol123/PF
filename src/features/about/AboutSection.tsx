import { SectionTitle } from "../../shared/ui/SectionTitle";
import { etcSkills, skills } from "./data/skills";
import "./AboutSection.css";

export function AboutSection() {
  return (
    <section id="about">
      <SectionTitle
        title="About"
        subtitle="사용하기 쉬운 인터페이스를 만드는 프론트엔드 개발자 김예솔입니다."
      />
      <p className="aboutBody">
        편의성과 최신 기술을 결합해 누구에게나 친숙한 웹 경험을 제공하는 것을
        목표로 합니다. 새로운 기술을 빠르게 익히고 팀과 협업해 제품의 완성도를
        높이는 데 집중하고 있습니다.
      </p>

      <h3 className="aboutSubTitle">Skills</h3>
      <ul className="skillsGrid">
        {skills.map((skill) => (
          <li key={skill.name}>
            <strong>{skill.name}</strong>
            <ul>
              {skill.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="etcRow">
        <span>Etc.</span>
        <ul>
          {etcSkills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
