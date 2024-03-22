import { auth } from "@/auth";
import { ApiParams } from "@/app/lib/definitions";

export function RequiresAuth() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const params = args[0] as ApiParams;
      const headers = (params.headers || {}) as Record<string, any>;
      const session = await auth();
      if (session?.user.token) {
        headers["Authorization"] = `Token ${session.user.token}`;
      }

      args[0] = { ...params, headers };
      return originalMethod.apply(this, args);
    };
  };
}

export function Method(method: "GET" | "POST" | "DELETE" | "PUT" = "GET") {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const params = args[0] as ApiParams;
      args[0] = { ...params, method };
      return originalMethod.apply(this, args);
    };
  };
}

export function NoCache() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const params = args[0] as ApiParams;
      args[0] = { ...params, cache: "no-store" };
      return originalMethod.apply(this, args);
    };
  };
}
