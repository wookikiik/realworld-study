import {FieldErrors} from "react-hook-form";

export default function ErrorMessages(errors: FieldErrors<any>) {
    return (
        <ul className="error-messages">
            {errors && Object.entries(errors).map(([key, error]) => (
                <li key={key}>{error?.message?.toString()}</li>
            ))}
        </ul>
    )
}