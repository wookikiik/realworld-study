
export default function ErrorMessages({messages = []}: ErrorMessagesProps){
    if(messages.length === 0) return null

    return (
        <ul className="error-messages">
            {messages.map((message, index) => (
                <li key={index}>{message}</li>
            ))}
        </ul>
    )
}

type ErrorMessagesProps = {
    messages?: string[]
}