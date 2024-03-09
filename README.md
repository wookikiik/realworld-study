# auth 적용하여 화면 변경하기
## 로그인 안된 상태
### 상단 네비 [0]
### /profile 경로 접근 시 로그인 페이지로 이동 [0]

## 로그인 기능 구현 [0]
### provider 가 생성되는 시점은?
- 서버 시작 시: Next.js 애플리케이션이 시작될 때, NextAuth.js 구성이 읽히고, 이때 providers 배열 내의 설정이 로드됩니다. 이는 인증 제공자들이 사용 가능한 상태로 초기화된다는 것을 의미합니다.

- 인증 요청 시: 사용자가 로그인을 시도할 때 (예: 로그인 페이지에서 특정 인증 제공자를 선택할 때), 해당 인증 제공자에 대한 설정이 사용되어 인증 프로세스가 실행됩니다. 이 과정에서 사용자를 인증 제공자의 로그인 페이지로 리디렉션하거나, 이미 인증 토큰을 가지고 있다면 그것을 검증하는 등의 작업이 이루어집니다.

-> 인증 요청 (로그인과 연결)
### 에러 발생
- auth.ts의 SignIn과 연결했는데, 호출이 안됨. console.log() 안찍힘

- Uncaught (in promise) Error: Invariant: headers() expects to have requestAsyncStorage, none available.
-> "use server" 를 auth.ts 상단에 추가함

- Uncaught (in promise) Error: A "use server" file can only export async functions, found object.

###  jwt와 session의 호출 순서는 ?
NextAuth.js에서의 jwt와 session 콜백 함수의 호출 순서는 인증 과정 중 특정 단계에서 사용자의 인증 토큰과 세션 정보를 처리할 때 발생합니다. 이러한 콜백 함수들은 인증 성공 후 토큰을 생성하거나 세션을 초기화 및 갱신할 때 호출됩니다. 여기서 jwt 콜백은 주로 JWT 토큰을 생성하거나 수정할 때 사용되고, session 콜백은 사용자 세션을 생성하거나 수정할 때 사용됩니다.

인증 과정에서의 호출 순서는 대략적으로 다음과 같습니다:

인증 (Authentication): 사용자가 로그인하면 Credentials 프로바이더의 authorize 함수가 호출됩니다. 이 함수는 사용자의 인증 정보를 검증하고, 검증이 성공하면 사용자 객체를 반환합니다.

JWT 토큰 생성/갱신 (jwt 콜백 호출): 인증이 성공한 후, NextAuth.js는 jwt 콜백 함수를 호출하여 JWT 토큰을 생성하거나 갱신합니다. 여기서는 사용자 객체에서 반환된 정보 (예: 사용자의 이메일)를 토큰에 추가하거나 수정할 수 있습니다. 이 단계는 로그인 시와 토큰이 자동으로 갱신될 때마다 실행됩니다.

세션 생성/갱신 (session 콜백 호출): JWT 토큰이 생성되거나 갱신된 후, NextAuth.js는 session 콜백 함수를 호출하여 사용자의 세션 정보를 초기화하거나 갱신합니다. session 콜백은 JWT 토큰에서 필요한 정보 (예: 사용자 이메일)를 가져와서 세션 객체에 추가하거나 수정할 수 있습니다. 이 정보는 클라이언트 사이드에서 세션을 통해 접근할 수 있습니다.

즉, 사용자가 로그인을 시도하고 인증에 성공하면, 먼저 jwt 콜백이 호출되어 JWT 토큰을 처리하고, 이어서 session 콜백이 호출되어 세션 정보를 처리합니다. 이 과정을 통해 서버와 클라이언트 양쪽에서 사용자 인증 상태를 관리하고 사용할 수 있는 정보를 설정하게 됩니다.

## 로그인 된 상태
### 상단 네비 [0]
1. 로그인 된 상태를 session에 저장하고 
2. 해당 상태를 state로 관리해서
    - Header 컴포넌트에 isLoggedIn 이라는 prop을 전달하여 분기처리
    - Header를 사용하는 layout 에서 session의 유무에 따라 prop을 전달
        - header는 컴포넌트지만 사용하는곳은 한 곳 이므로 재사용성이 없어서 prop 필요가 없음
        - header 컴포넌트 내에서 session 확인으로 변경
    - 저장된 session을 확인하는 기능 ? SessionProvider
3. nav 컴포넌트에 상태를 전달하여 해당 상태에 따라 다른 컴포넌트를 노출한다

### /profile 경로 접근 시 이용자에 따른 profile []