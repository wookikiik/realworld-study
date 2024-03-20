export class CommonError extends Error {
  messages: string[] = [];
  constructor({ messages = [], ...args }: { messages?: string[] }) {
    super();
    this.messages = messages;
    this.name = 'Common Error';
  }

  getErrorMessage = (): string => {
    return this.message;
  };
}

export class FormValidateError extends Error {
  messages: string[] = [];
  errors: any;
  constructor({ messages = [], errors }: { messages?: string[]; errors: any }) {
    super();
    this.messages = messages;
    this.errors = errors;

    if (!!this.errors) {
      Object.entries(errors).map(([_, m]) => {
        const msg = m as string[];
        this.messages.push(...msg);
      });
    }
  }
}

export class SystemError extends Error {
  constructor() {
    super();
    this.message = '시스템 에러 발생';
    this.name = 'System Error';
  }
}

export class ApiError extends Error {
  constructor({ message, ...args }: { message: string }) {
    super(message);
    this.name = 'Api Error';
  }
}

export const errorHandler = {
  apply: async (error: Error) => {
    if (error instanceof SystemError) {
      return { message: error.message };
    }

    if (error) {
      console.error(error);
    }
  },
};
