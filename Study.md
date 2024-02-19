# 작업 도중 발생한 오류 정리

## 1. Package.json `overrides` 사용

> 알려진 보안 문제가 있는 종속성의 버전을 교체하거나, 기존 종속성을 포크로 교체하거나, 모든 곳에서 동일한 버전의 패키지가 사용되도록 하는 등 종속성의 종속성을 구체적으로 변경해야 하는 경우 오버라이드를 추가할 수 있습니다. [(공식 사이트 번역)](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#overrides)

### 작업 도중 발생한 오류

`react-scripts(5.0.1)`는 peerDependencies에서 사용하는 버전과 dependencies에 선언된 `typescript`의 버전이 서로 달라 `npm install` 시 오류 발생함

```shell
npm ERR! Conflicting peer dependency: typescript@4.9.5
npm ERR! node_modules/typescript
npm ERR!   peerOptional typescript@"^3.2.1 || ^4" from react-scripts@5.0.1
npm ERR!   node_modules/react-scripts
npm ERR!     react-scripts@"5.0.1" from the root project
```

### 해결 책

package.json의 `overrides` 속성을 사용 해 강제로 버전을 dependencies에 정의된 버전으로 강제 지정 함.

## 2. React `defaultChecked` 쓰임새

> `defaultChecked`는 컴포넌트가 처음 렌더링될 때 입력 요소의 초기 체크 상태를 설정합니다. 이 prop에 값을 설정하면 해당 입력 요소는 "uncontrolled" 상태가 됩니다. 즉, React는 이후에 이 입력 요소의 상태를 관리하지 않습니다. 사용자가 입력 요소를 클릭하여 체크 상태를 변경하면, 그 변경은 React에 의해 관리되지 않고 브라우저에 의해 처리됩니다.

### 작업 도중 발생한 오류

[ToggleComplete](src/components/ToggleComplete.tsx) 컴포넌트에서 토글 기능을 사용하기 위해 체크박스 상태 변경이 아니라 라벨 클릭 시 toggle 기능을 사용하기 위해 체크박스에 `defaultChecked`를 사용했지만, 클릭 외 Todo list 상태에 따라 자동 변경되어야 하는 상황에서 체크박스 체크 상태가 제대로 변경되지 않음.

### 해결 책

`checked`와 `onChange`를 사용하도록 변경 함. (defaultChecked 사용이 불가능 한 것은 아니였지만 불필요한 코드가 늘어남)

---

# 사용 해 본 기능들

## flushSync

> `flushSync`를 사용하면 제공된 콜백 내부의 모든 업데이트를 동기식으로 플러시하도록 React를 강제할 수 있습니다. 이렇게 하면 DOM이 즉시 업데이트됩니다. [(공식 사이트 번역)](https://react.dev/reference/react-dom/flushSync)

### 언제, 어디서 사용 했는가?

Task [`TaskItem`](src/components/TaskList.tsx) 편집 상태 변경 시 input box에 포커스 적용에 사용함.

## useSyncExternalStore

> `useSyncExternalStore`는 외부 스토어를 구독할 수 있는 React Hook입니다. [(공식 사이트 번역)](https://react.dev/reference/react/useSyncExternalStore)

### 언제, 어디서 사용 했는가?

필터 선택(`All` | `Active` | `Completed`)을 상태로 관리하지 않고, `location` 변경을 감지 하여 Tasks를 필터링 하도록 하기 위해 `useSyncExternalStore` 사용, 별도의 커스텀 hook [useLocation](src/hooks/useLocation.ts)으로 만듬. location 변경을 감지 하기 위해서 `popstate` 이벤트 사용 함

## zustand

> 작고 빠르며 확장 가능한 베어본 상태 관리 솔루션입니다. `Zustand`는 훅을 기반으로 하는 편안한 API를 제공합니다. 진부하거나 독단적이지 않습니다. 명시적이고 플럭스(`flux`)와 같은 충분한 규칙을 가지고 있습니다.[(공식사이트 번역)](https://docs.pmnd.rs/zustand/getting-started/introduction)

### 언제, 어디서 사용 했는가?

상태 관리를 커스텀 hook [useTasks](src/hooks/useTasks.tsx) 에서 사용

### Links

- [공식사이트](https://zustand-demo.pmnd.rs/)
- [github](https://github.com/pmndrs/zustand)

# Typescript 설정

## compilerOptions

### target

> 컴파일러가 생성하는 JavaScript 코드의 버전을 설정하는 옵션

최신 브라우저는 모든 ES6 기능을 지원하므로 ES6를 선택하는 것이 좋습니다. 이전 환경에 코드를 배포하는 경우 더 낮은 타깃을 설정하고, 최신 환경에서 코드가 실행되도록 보장하는 경우 더 높은 타깃을 설정할 수 있습니다.

### module

> 컴파일러가 생성하는 JavaScript 코드의 모듈(`module`) 시스템을 설정하는 옵션입니다.

### paths

> `baseUrl`(설정이 없다면 tsconfig 파일 자체)을 기준으로 가져오기 위치를 조회 위치로 다시 매핑하는 일련의 항목입니다.

`paths`를 사용하면 `require/import`에서 TypeScript가 가져오기를 어떻게 처리할지 선언할 수 있습니다.

**주의:**<br/>
`tsconfig.json` 파일의 paths 옵션은 TypeScript 컴파일러에게 모듈을 어떻게 해석할지 알려주는 역할을 합니다. 하지만 이 설정은 TypeScript 컴파일러에게만 적용되며, 런타임이나 다른 빌드 도구(예: webpack, Parcel, Rollup 등)에게는 적용되지 않습니다.

#### _작업 도중 발생한 오류_

src 경로를 여러 곳에서 사용되어 아래 처럼 추가 했지만 컴파일 시 경로를 제대로 찾지 못해 오류가 발생했음.

```json
{
    ...
    "paths": {
      "@/*": ["./src/*"]
    }
}
```

### typeRoots

> 기본적으로 보이는 모든 `@types` 패키지는 컴파일에 포함됩니다. `node_modules/@types`로 둘러싸인 폴더에 있는 패키지는 표시되는 것으로 간주됩니다. 예를 들어 `./node_modules/@types/`, `../node_modules/@types/`, `../../node_modules/@types/` 등에 있는 패키지를 의미합니다.

`typeRoots`를 지정하면 typeRoots 아래에 있는 패키지만 포함됩니다.

## 타입(d.ts) 파일 정의
