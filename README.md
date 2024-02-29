권한 인증 테스트 시나리오

- 프로필 페이지 접근 (/profile)
- 권한 체크 (middleware.js, auth.js)
  - auth.ts의 `callbacks.authorized` 호출
- 로그인 페이지 이동됨 (/login)
  - auth.ts 페이지 설정 필요 (pages.signIn)
  - callbacks.authorized 콜백 함수에서 `false`값 반환되면 로그인 페이지로 이동됨.
- 로그인 진행 (actions.ts)
  - providers에 `credentials` 추가
  - credentials에 인증을 처리할 `authorize` 함수 구현
  - auth.ts에서 반환된 `signIn` 함수 호출
  - TODO: error handling
  - `callbacks.jwt` 콜백 함수 호출됨
  - `callbacks.session` 콜백 함수 호출됨
- 프로필 페이지 접근 (/profile)
- 권한 체크 (middleware.js, auth.js)
- 회원 데이터 조회(data.js `getCurrentUser`)
  - session에 등록된 token 사용 하여 API 호출
- 프로필 페이지 전시

**AUTH_SECRET 설정**
.env 파일 참고
