export type Skill = {
  name: string;
  details: string[];
};

export const skills: Skill[] = [
  {
    name: "HTML/CSS",
    details: [
      "시멘틱 태그와 CSS3 기반 표준 웹 제작",
      "Flexbox 기반 반응형 레이아웃 구성",
      "접근성과 유지보수성을 고려한 구조 설계",
    ],
  },
  {
    name: "JavaScript",
    details: ["비동기 데이터 처리", "이벤트 중심 DOM 제어"],
  },
  { name: "React", details: ["Hooks 기반 상태 관리", "컴포넌트 재사용 설계"] },
  { name: "Vue", details: ["컴포넌트 기반 화면 구성 경험"] },
  { name: "Next.js", details: ["SSR/SEO 최적화 경험"] },
  {
    name: "Python",
    details: ["기본 문법 및 스크립트 활용", "백엔드 연동 흐름 이해"],
  },
  {
    name: "FastAPI",
    details: ["REST API 연동 경험", "프론트엔드와의 데이터 통신 구조 이해"],
  },
];

export const etcSkills = ["MongoDB", "MariaDB", "MySQL", "Linux", "GitHub"];
