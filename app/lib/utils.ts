import type { FieldErrors, FieldValues } from "react-hook-form";

export function normalizeFormErrors<FORM extends FieldValues>(
  errors: FieldErrors<FORM>,
): string[] {
  if (!errors) {
    return [];
  }

  const messages = Object.entries(errors).map(([_, error]) => {
    if (error && "message" in error) {
      return (error.message as string) || "";
    }

    return "";
  });

  return messages.filter((message) => message.length > 0);
}
