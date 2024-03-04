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
