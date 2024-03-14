interface FormErrorMessagesProps {
  errors: string[];
}

export const FormErrorMessages = ({ errors }: FormErrorMessagesProps) => {
  return (
    errors && (
      <ul className="error-messages">
        {errors.map((error, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: error }}></li>
        ))}
      </ul>
    )
  );
};
