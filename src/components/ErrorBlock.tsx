const ErrorBlock = ({ message }: ErrorBlockProps) => {
  return (
    <div className="error-block">
      <p>{message}</p>
    </div>
  );
};

export default ErrorBlock;
