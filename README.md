# 폼 입력 및 유효성 검증

## Goal

회원가입, 로그인 페이지의 폼 유효성 검증 및 에러 메시지를 표시하는 기능 구현하기.

### 필드 별 유효성

- Eamil: 필수값, 이메일 형식
- Password: 필수값, 최소 6자리
- Username: 필수값

### 에러 메시지 표시 방법

- 폼 필드 상단에 모든 유효성 에러의 메시지를 멀티로 전시한다.[ErrorMessages](./app/ui/components/ErrorMessages.tsx) 컴포넌트 사용

### 목표 달성을 위한 `React Hook Form` 기능 찾고 학습하기

[useForm(UseFormProps)](https://react-hook-form.com/docs/useform#reValidateMode)<br>

- mode: 양식 유효성 검사 모드를 설정합니다. 기본값은 'onChange'입니다. 'onBlur' 또는 'onSubmit'으로 변경할 수 있습니다.
- reValidateMode: 양식 유효성 검사 모드를 설정합니다. 기본값은 'onChange'입니다. 'onBlur' 또는 'onSubmit'으로 변경할 수 있습니다.

[Register fields](https://react-hook-form.com/get-started#Registerfields)<br>

- React Hook Form의 핵심 개념 중 하나는 **컴포넌트를 훅에 등록**하는 것입니다. 이렇게 하면 양식 유효성 검사와 제출에 모두 해당 값을 사용할 수 있습니다.

[Apply validation](https://react-hook-form.com/get-started#Applyvalidation)<br>

- 양식 유효성 검사를 위한 기존 HTML 표준과 일치하여 양식 유효성 검사를 쉽게 만듭니다.

[Handle errors](https://react-hook-form.com/get-started#Handleerrors)<br>

- 양식의 오류를 표시하는 오류 객체를 제공합니다. 오류의 유형은 주어진 유효성 검사 제약 조건을 반환합니다.

# reference

[Setting up Jest with Next.js](https://nextjs.org/docs/app/building-your-application/testing/jest)

# 이슈

react hook form nextjs server actions

action 동작 없음.
react hook form의 Form 사용
react hook form의 handleSubmit 사용

action이 아니라 onSubmit 사용 시 문제점
Error 처리 방식 수정.

# zod `optional` 적용 후 검증을 선택적으로 적용하는 방법

Zod 라이브러리를 사용하여 조건부로 필드의 길이를 검사하려면, 커스텀 검증 로직을 구현해야 합니다. 이를 위해서는 `z.preprocess()` 함수 또는 `.refine()` 메소드를 사용하여, 값이 빈 문자열인지 확인하고 그에 따라 검증 로직을 조정할 수 있습니다.

### 방법 1: `z.preprocess()` 사용하기

`z.preprocess()` 함수를 사용하여 입력값을 사전 처리하고, 빈 문자열일 경우 `undefined`로 변환한 뒤, `.optional()` 메소드와 함께 사용하여 처리할 수 있습니다. 이 방법은 입력값을 조건에 맞게 사전 변환하는 과정에 사용됩니다.

```javascript
const passwordSchema = z.preprocess((input) => {
  // 빈 문자열을 undefined로 변환
  return input === "" ? undefined : input;
}, z.string().min(5, "Password must be at least 5 characters long").optional());
```

### 방법 2: `.refine()` 메소드 사용하기

`.refine()` 메소드를 사용하여 커스텀 검증 로직을 추가할 수 있습니다. 이 메소드를 사용하면, 특정 조건(예: 값이 빈 문자열이 아닌 경우)에만 `.min(5)` 검증을 적용할 수 있습니다.

```javascript
const passwordSchema = z
  .string()
  .optional()
  .refine((val) => {
    // 값이 undefined이거나 빈 문자열일 경우 통과
    // 그렇지 않으면 길이가 5 이상인지 검사
    return val === undefined || val === "" || val.length >= 5;
  }, "Password must be at least 5 characters long");
```

위의 두 방법 중 하나를 선택하여 사용하면, 비밀번호 필드에 대한 `.min(5)` 검증을 선택적으로 적용할 수 있습니다. 첫 번째 방법은 입력값을 사전 처리하는 단계에서 조건을 적용하는 반면, 두 번째 방법은 검증 단계에서 조건을 적용합니다.
