# 개발환경 구축/운영 가이드

## 1) 공통 요구사항
- Node.js 20 이상
- npm 10 이상

## 2) Windows 환경
1. 프로젝트 루트로 이동
2. 의존성 설치
   - `npm install`
3. 개발 서버 실행
   - `npm run dev`
4. 빌드/테스트
   - `npm run build`
   - `npm run test`

## 3) Ubuntu 환경
1. Node.js 설치(nvm 권장)
   - `curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash`
   - `nvm install 20`
   - `nvm use 20`
2. 프로젝트 루트에서 의존성 설치
   - `npm install`
3. 개발 서버 실행
   - `npm run dev -- --host`
4. 빌드/테스트
   - `npm run build`
   - `npm run test`

## 4) 운영 배포 체크리스트
- `npm run build` 결과물(`dist/`) 생성 확인
- 외부 링크 `rel="noopener noreferrer"` 유지 확인
- 민감정보를 `.env` 파일/저장소에 커밋하지 않도록 점검

## 참고 자료(출처)
- Node.js: https://nodejs.org/
- nvm: https://github.com/nvm-sh/nvm
- Vite 배포 가이드: https://vitejs.dev/guide/static-deploy.html
