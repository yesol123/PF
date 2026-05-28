# React Migration Phase 1

## 요청 사항
- Vue 기반 포트폴리오를 React로 점진 전환
- 핵심 화면 우선 리디자인(Project/Home/App shell)
- 테스트 코드 포함

## 수행 내용
- 빌드 체인을 Vue CLI에서 Vite + TypeScript로 전환
- 섹션 구조를 React 컴포넌트로 분리 이식
- 디자인 토큰 기반 스타일 체계 도입
- 활성 섹션 계산 로직을 순수 함수/훅으로 분리
- Vitest + React Testing Library 기반 테스트 추가

## 결과
- 핵심 3개 섹션 중심으로 React 마이그레이션 1차 완료
- 외부 링크 보안 속성(`noopener noreferrer`) 적용 검증
- 후속 단계에서 About/Contact 세부 카피 및 자산 보강 가능

## 참고 자료(출처)
- React 공식 문서: https://react.dev/
- Vite 공식 문서: https://vitejs.dev/
- TypeScript Handbook: https://www.typescriptlang.org/docs/
- Vitest 문서: https://vitest.dev/
- React Testing Library: https://testing-library.com/docs/react-testing-library/intro/
