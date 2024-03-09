import {FieldErrors} from "react-hook-form";
import type { UserAuthInfo } from "../lib/definitions";

export default function ErrorMessages(errors: {errors: FieldErrors<UserAuthInfo>}) {
    return (
        <ul className="error-messages">
            {errors && Object.entries(errors.errors).map(([key, error]) => (
                <li key={key}>{error?.message?.toString()}</li>
            ))}
        </ul>
    )
}