export type ProjectCategory = "study" | "work";

export type Project = {
  category: ProjectCategory;
  title: string;
  company?: string;
  period?: string;
  role?: string;
  description: string;
  summary: string;
  highlights?: string[];
  environment: string;
  view?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    category: "work",
    title: "비대면 원격진료",
    company: "(주)루커스",
    period: "2025.02 ~ 2026.05 (재직중)",
    role: "플랫폼 팀 · 프론트엔드",
    description: "React / TypeScript 기반 비대면 원격진료 서비스",
    summary: "WebRTC 기반 실시간 화상 진료와 Vital 데이터 UI를 구현했습니다.",
    highlights: [
      "WebRTC 기반 실시간 화상 진료 기능 구현",
      "Vital 데이터 실시간 표시 UI 및 상태 동기화",
      "FastAPI / WebSocket 기반 의료 데이터 연동",
      "환자 세션 및 실시간 상담 흐름 관리",
      "관리자·운영용 모니터링 화면 구현",
    ],
    environment: "React, TypeScript, WebRTC, WebSocket, FastAPI",
  },
  {
    category: "work",
    title: "실시간 AI 번역기",
    company: "(주)루커스",
    period: "2025.02 ~ 2026.05 (재직중)",
    role: "플랫폼 팀 · 프론트엔드",
    description: "실시간 음성 번역 서비스 UI",
    summary:
      "스트리밍 자막 동기화와 AI 음성 입력/응답 흐름 상태 관리를 담당했습니다.",
    highlights: [
      "실시간 음성 번역 서비스 UI 개발",
      "WebSocket 기반 스트리밍 자막 동기화",
      "AI 음성 입력·응답 흐름 상태 관리",
      "실시간 음성 데이터 처리 및 인터럽트 제어 로직 개선",
    ],
    environment: "React, TypeScript, WebSocket",
  },
  {
    category: "work",
    title: "사내 관리자 페이지",
    company: "(주)루커스",
    period: "2025.02 ~ 2026.05 (재직중)",
    role: "플랫폼 팀 · 프론트엔드",
    description: "React 기반 관리자 CMS",
    summary:
      "게시글·문의 관리와 첨부파일 업로드, React Query 기반 API 연동을 구현했습니다.",
    highlights: [
      "게시글/문의 관리 및 첨부파일 업로드 UI",
      "React Query 기반 서버 상태 관리 및 API 연동",
      "게시글 상태값 관리 구조 개선",
      "첨부파일·썸네일 처리 로직 구현",
      "게시글 관리 흐름 개선 (이미지: 하드 삭제 / 글: 소프트 삭제)",
      "FastAPI REST API 연동",
    ],
    environment: "React, TypeScript, React Query, FastAPI",
  },
  {
    category: "work",
    title: "회원별 홈페이지 2차 개발",
    company: "씨엠바더 코리아",
    period: "2024.09 ~ 2025.02",
    role: "전산팀 · 프론트엔드",
    description: "씨엠바더 코리아 회원별 홈페이지 2차 개발 및 유지보수",
    summary:
      "반응형 퍼블리싱, API 연동, PG 결제·CRUD 기능 구현 후 UX/UI 개선까지 진행했습니다.",
    highlights: [
      "디자인 퍼블리싱 및 Media Query 반응형 작업",
      "카테고리, 페이지네이션, 스크롤 구현",
      "사업자 등록 확인, 쿠폰 선물, 마이페이지 보안 설정 API 연동",
      "공지사항·Q&A·가맹점 정보 CRUD 및 PG 결제 연동",
      "사용자 피드백 기반 로딩 속도·화면 구성 UX/UI 개선",
      "쇼핑몰 오픈을 위한 PHP 프로젝트 커스터마이징",
    ],
    environment: "Vue.js, JavaScript, CSS, PHP",
  },
  {
    category: "study",
    title: "부산광역시 클론",
    description: "부산광역시 홈페이지 클론 코딩",
    summary: "기본 HTML 구조 이해와 CSS 레이아웃 역량 강화",
    environment: "HTML, CSS, JavaScript, Swiper",
    view: "https://yesol123.github.io/CloneCoding/",
    github: "https://github.com/yesol123/CloneCoding",
  },
  {
    category: "study",
    title: "TODAY EAT",
    description: "맛집 후기 공유/검색 서비스",
    summary: "서울 맛집/데이트 코스를 빠르게 탐색하는 UX 구성",
    environment: "HTML, SCSS, JavaScript",
    view: "https://yesol123.github.io/TodayEat/",
    github: "https://github.com/yesol123/TodayEat",
  },
  {
    category: "study",
    title: "오늘의 세종대왕",
    description: "사전 API 기반 단어 퀴즈",
    summary: "외부 API 연동과 사용자 상호작용 흐름 구현",
    environment: "React, Node.js, SCSS",
    view: "https://yesol123.github.io/pj2",
    github: "https://github.com/yesol123/pj2",
  },
  {
    category: "study",
    title: "별별연인",
    description: "사주 기반 커뮤니티 서비스",
    summary: "공지사항/자유게시판 기능 구현",
    environment: "Next.js, SCSS",
    view: "https://byeolbyeolcouple.vercel.app/",
    github: "https://github.com/yesol123/byeolbyeolcouple",
  },
  {
    category: "study",
    title: "whatoeat (진행중)",
    description: "제철 식재료 추천 토이 프로젝트",
    summary: "React Native + TypeScript 기반 모바일 화면 구성",
    environment: "React Native, TypeScript",
    github: "https://github.com/yesol123/whatoeat",
  },
];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category);
}
