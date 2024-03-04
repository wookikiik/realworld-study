## Directory Structure

```
app
├── (pages)
│   ├── (article)
│   │   ├── _components
│   │   │   ├── article.tsx
│   │   │   ├── articleButtons.tsx
│   │   │   ├── articleEditor.tsx
│   │   │   ├── articleMeta.tsx
│   │   │   ├── articles.tsx
│   │   │   └── comment
│   │   │       ├── comment.tsx
│   │   │       └── commentCreator.tsx
│   │   ├── article
│   │   │   └── [slug]
│   │   │       └── page.tsx
│   │   └── editor
│   │       ├── [slug]
│   │       │   └── page.tsx
│   │       └── page.tsx
│   ├── (authentication)
│   │   ├── login
│   │   │   └── page.tsx
│   │   └── register
│   │       └── page.tsx
│   ├── profile
│   │   ├── [userName]
│   │   │   └── page.tsx
│   │   └── _components
│   │       └── followButton.tsx
│   └── settings
│       └── page.tsx
├── layout.tsx
├── lib
│   ├── actions.ts
│   ├── data.ts
│   ├── definitions.ts
│   └── hooks
├── page.tsx
├── styles
│   ├── fonts.tsx
│   └── global.css
└── ui
    ├── components
    │   ├── feed
    │   │   └── feedTab.tsx
    │   ├── footer
    │   │   └── appFooter.tsx
    │   ├── header
    │   │   ├── acticleHeader.tsx
    │   │   └── appHeader.tsx
    │   └── tag
    │       └── tags.tsx
    ├── containers
    └── skeletons
```

## Auth

https://velog.io/@youngjun625/Next.js14-NextAuth-v5%EB%A1%9C-%EC%9D%B8%EC%A6%9D-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-1-%EB%A1%9C%EA%B7%B8%EC%9D%B8%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83

1. 사용자 로그인
   call signIn -> provider.authorize가 실행됨.
2. 인증 확인
   authorize 메소드는 token을 반환
3. JWT 생성
   JWT에 생성된 토큰 할당
4. 세션 생성
   callbacks.session
5. 클라이언트
   useSession으로 접근
